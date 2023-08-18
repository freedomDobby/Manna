package com.ssafy.manna.mission.service;

import com.ssafy.manna.global.common.domain.CodeDetail;
import com.ssafy.manna.global.common.repository.CodeDetailRepository;
import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.repository.MemberRepository;
import com.ssafy.manna.mission.Enums.MissionCode;
import com.ssafy.manna.mission.domain.Mission;
import com.ssafy.manna.mission.domain.MissionQuestion;
import com.ssafy.manna.mission.dto.request.MissionAssignRequest;
import com.ssafy.manna.mission.dto.request.MissionDeleteRequest;
import com.ssafy.manna.mission.dto.request.MissionDoRequest;
import com.ssafy.manna.mission.dto.request.MissionStartRequest;
import com.ssafy.manna.mission.dto.response.*;
import com.ssafy.manna.mission.repository.MissionQuestionRepository;
import com.ssafy.manna.mission.repository.MissionRepository;
import com.ssafy.manna.sogaeting.domain.Sogaeting;
import com.ssafy.manna.sogaeting.repository.SogaetingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static com.ssafy.manna.member.Enums.MemberExceptionsEnum.MEMBER_EXCEPTIONS_NONE_MEMBER;
import static com.ssafy.manna.mission.Enums.MissionResponseMessage.MISSION_NOT_EXISTS;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class MissionServiceImpl implements MissionService {

    private final CodeDetailRepository codeDetailRepository;
    private final MissionRepository missionRepository;
    private final MissionQuestionRepository missionQuestionRepository;
    private final MemberRepository memberRepository;
    private final SogaetingRepository sogaetingRepository;

    @Value("${file.server-domain}")
    private String serverDomain;

    // 소개팅이 성공하면 미션 6가지 생성해주기
    @Override
    public void assignMission(MissionAssignRequest missionAssignRequest) throws Exception {
        // 코드가 M인 목록을 랜덤으로 6가지 불러옴
        List<CodeDetail> codeDetails = codeDetailRepository.findRandomTop6ById("M");
        Mission mission = missionRepository.findById(missionAssignRequest.getMissionId())
                .orElseThrow(() -> new RuntimeException("mission not found"));
        codeDetails.stream().forEach(codeDetail -> {
            MissionQuestion missionQuestion = MissionQuestion.builder()
                    .mission(mission)
                    .maleIsDone(false)
                    .femaleIsDone(false)
                    .code(MissionCode.valueOf("M1"))
                    .content(codeDetail.getName())
                    .maleImagePath(null)
                    .femaleImagePath(null)
                    .build();
            missionQuestionRepository.save(missionQuestion);
        });
    }

    // 해당하는 회원의 미션정보 불러오기
    @Override
    public List<MissionCallResponse> getMissionListByUserId(String id) {
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("일치하는 회원이 없습니다."));
        String gender = member.getGender();
        List<Mission> missions;
        if ("male".equals(gender)) {
            missions = missionRepository.findByMaleId(member.getId());
        } else if ("female".equals(gender)) {
            missions = missionRepository.findByFemaleId(member.getId());
        } else {
            throw new RuntimeException("유효하지 않은 성별입니다.");
        }

        List<MissionQuestion> missionQuestions = missionQuestionRepository.findByMissionIn(
                missions);

        List<MissionCallResponse.MissionQuestion> missionQuestionList = new ArrayList<>();
        for (MissionQuestion missionQuestion : missionQuestions) {
            missionQuestionList.add(new MissionCallResponse.MissionQuestion(
                    missionQuestion.getId(),
                    missionQuestion.getMaleIsDone(),
                    missionQuestion.getFemaleIsDone(),
                    missionQuestion.getContent()
            ));
        }

        List<MissionCallResponse> responseList = new ArrayList<>();

        for (Mission mission : missions) {
            MissionCallResponse missionCallResponse = new MissionCallResponse(
                    mission.getId(),
                    mission.getStartDate(),
                    mission.getEndDate(),
                    missionQuestionList
            );
            responseList.add(missionCallResponse);
        }
        return responseList;
    }

    // 미션 포기하기
    @Override
    public void giveUpMission(MissionAssignRequest missionAssignRequest) {
        Mission mission = missionRepository.findById(missionAssignRequest.getMissionId())
                .orElseThrow(() -> new RuntimeException("미션이 없습니다."));
        missionRepository.delete(mission);
    }

    // 미션 사진 등록하기
    @Override
    public void doMission(MissionDoRequest missionDoRequest, MultipartFile missionPicture) throws IOException {
        List<MissionQuestion> findMissionQuestion = missionQuestionRepository.findByMissionId(missionDoRequest.getMissionId());
        MissionQuestion missionQuestion = findMissionQuestion.get(missionDoRequest.getId() - 1);

        String path = storeFile(missionDoRequest.getMemberId(), missionPicture);
        if (missionDoRequest.getGender().equals("male")) {
            missionQuestion.updateMaleImgPath(missionDoRequest.getMemberId() + "_" + missionPicture.getOriginalFilename());
            missionQuestion.updateMaleIsDone(true);
        } else if (missionDoRequest.getGender().equals("female")) {
            missionQuestion.updateFemaleImgPath(missionDoRequest.getMemberId() + "_" + missionPicture.getOriginalFilename());
            missionQuestion.updateFemaleIsDone(true);
        }
    }

    // 미션 사진 등록
    @Override
    public String storeFile(String memberId, MultipartFile file) throws IOException {
        String uploadDir = "/manna/upload/images/mission/";
        String originalFileName = file.getOriginalFilename();
        String fileName = memberId + "_" + originalFileName;

        File directory = new File(uploadDir);
        String filePath = uploadDir + fileName;
        File destFile = new File(filePath);

        if (!directory.exists()) {
            boolean mkdirsResult = directory.mkdirs();
            if (mkdirsResult) {
                System.out.println("디렉토리 생성  String storeFile(String memberId, MultipartFile file) throws IOException;성공");
            } else {
                System.out.println("디렉토리 생성 실패");
            }
        }

        file.transferTo(destFile);
        log.info("서비스 >>> 파일 저장 성공! filePath : " + filePath);
        return filePath;
    }

    @Override
    public MissionFinishResponse finishMission(Integer missionId) {
        List<MissionQuestion> missionQuestions = missionQuestionRepository.findByMissionId(missionId);

        return new MissionFinishResponse(
                missionQuestions.stream()
                        .filter((missionQuestion) -> !missionQuestion.checkCardIsDone())
                        .findFirst()
                        .isEmpty()
        );
    }

    @Override
    public Mission startMission(MissionStartRequest missionStartRequest) {
        if (missionRepository.findBySogaetingId(missionStartRequest.getSogaetingId())
            .isPresent()) {
            throw new RuntimeException("중복된 채팅방이 존재합니다.");
        }

        Sogaeting sogaeting = Sogaeting.builder()
                .id(missionStartRequest.getSogaetingId())
                .build();

        Mission mission = Mission.builder()
                .sogaeting(sogaeting)
                .isSuccess(false)
                .isDone(false)
                .maleId(missionStartRequest.getMaleId())
                .femaleId(missionStartRequest.getFemaleId())
                .build();

        missionRepository.save(mission);
        return mission;

    }

    @Override
    public MissionParticipantResponse getParticipant(String userId) {
        Member member = memberRepository.findById(userId).orElseThrow(() -> new RuntimeException(MEMBER_EXCEPTIONS_NONE_MEMBER.getValue()));
        Member opponent;
        Mission mission;

        if (member.getGender().equals("male")) {
            //남자라면 maleId 로 찾기
            mission = missionRepository.findFirstByMaleId(userId).orElseThrow(() -> new RuntimeException(MISSION_NOT_EXISTS.getMessage()));
            opponent = memberRepository.findById(mission.getFemaleId()).orElseThrow(() -> new RuntimeException(MEMBER_EXCEPTIONS_NONE_MEMBER.getValue()));

        } else {
            //여자라면 femaileId 로 찾기
            mission = missionRepository.findFirstByFemaleId(userId).orElseThrow(() -> new RuntimeException(MISSION_NOT_EXISTS.getMessage()));
            opponent = memberRepository.findById(mission.getMaleId()).orElseThrow(() -> new RuntimeException(MEMBER_EXCEPTIONS_NONE_MEMBER.getValue()));
        }

        List<MissionQuestion> missionQuestions = missionQuestionRepository.findByMission(mission);
        List<MissionResponse> missionResponses = missionQuestions.stream()
                .map(this::MappingMissionResponse)
                .toList();

        return makeDto(userId, member, opponent, mission, missionResponses);
    }

    private MissionResponse MappingMissionResponse(MissionQuestion missionQuestion) {
        return new MissionResponse(missionQuestion.getId(), missionQuestion.checkCardIsDone());
    }

    @Override
    public MissionDetailResponse getImagePerCard(Integer missionId, Integer cardId, String userId) {
        Member member = memberRepository.findById(userId).orElseThrow(() -> new RuntimeException("회원을 찾을 수 없습니다."));
        String userPath;
        String opponentPath;
        List<MissionQuestion> missionQuestionList = missionQuestionRepository.findByMissionIdOrderByIdAsc(missionId);
        MissionQuestion missionQuestion = missionQuestionList.get(cardId - 1);

        if (member.getGender().equals("male")) {
            userPath = missionQuestion.getMaleImagePath();
            opponentPath = missionQuestion.getFemaleImagePath();
        } else {
            userPath = missionQuestion.getFemaleImagePath();
            opponentPath = missionQuestion.getMaleImagePath();
        }

        return MissionDetailResponse.builder()
                .userImgPath(userPath)
                .opponentImgPath(opponentPath)
                .content(missionQuestion.getContent())
                .build();
    }

    @Override
    public void deleteMission(MissionDeleteRequest missionDeleteRequest) {
        List<Mission> femaleList = missionRepository.findByFemaleId(missionDeleteRequest.getFemaleId());
        List<Mission> maleList = missionRepository.findByMaleId(missionDeleteRequest.getMaleId());



        for (Mission mission : femaleList) {
            System.out.println("female : " + mission.getId());
            missionQuestionRepository.deleteByMissionId(mission.getId());
        }

        for (Mission mission : maleList) {
            System.out.println("male : " + mission.getId());
            missionQuestionRepository.deleteByMissionId(mission.getId());
        }


    }


    private MissionParticipantResponse makeDto(String userId, Member member, Member opponent, Mission mission, List<MissionResponse> missionResponses) {
        return MissionParticipantResponse
                .builder()
                .userId(userId)
                .userName(member.getName())
                .opponentId(opponent.getId())
                .opponentName(opponent.getName())
                .missionId(mission.getId())
                .missionResponses(missionResponses)
                .build();
    }

}

