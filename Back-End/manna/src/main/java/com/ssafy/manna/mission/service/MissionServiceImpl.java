package com.ssafy.manna.mission.service;

import com.ssafy.manna.global.common.domain.CodeDetail;
import com.ssafy.manna.global.common.repository.CodeDetailRepository;
import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.repository.MemberRepository;
import com.ssafy.manna.mission.Enums.MissionCode;
import com.ssafy.manna.mission.domain.Mission;
import com.ssafy.manna.mission.domain.MissionQuestion;
import com.ssafy.manna.mission.dto.request.MissionAssignRequest;
import com.ssafy.manna.mission.dto.request.MissionDoRequest;
import com.ssafy.manna.mission.dto.request.MissionGiveUpRequest;
import com.ssafy.manna.mission.dto.response.MissionCallResponse;
import com.ssafy.manna.mission.dto.response.MissionFinishResponse;
import com.ssafy.manna.mission.repository.MissionQuestionRepository;
import com.ssafy.manna.mission.repository.MissionRepository;
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

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class MissionServiceImpl implements MissionService {

    private final CodeDetailRepository codeDetailRepository;
    private final MissionRepository missionRepository;
    private final MissionQuestionRepository missionQuestionRepository;
    private final MemberRepository memberRepository;

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
    public void giveUpMission(MissionGiveUpRequest missionGiveUpRequest) {
        Optional<Mission> findMission = missionRepository.findById(missionGiveUpRequest.getId());
        Mission mission = findMission.get();
        mission.updateIsDone(true);

        missionRepository.save(mission);
    }

    // 미션 사진 등록하기
    @Override
    public void doMission(MissionDoRequest missionDoRequest, MultipartFile missionPicture) throws IOException {
        Optional<MissionQuestion> findMissionQuestion = missionQuestionRepository.findById(missionDoRequest.getId());
        MissionQuestion missionQuestion = findMissionQuestion.get();

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
        String uploadDir = "/manna/upload/images/member/";
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
    public MissionFinishResponse finishMission(String id) {
        Optional<Member> findMember = memberRepository.findById(id);
        Member member = findMember.get();
        String gender = member.getGender();

        Optional<Mission> missions;
        int missionId = 0;
        if (gender.equals("male")) {
            missions = missionRepository.findFirstByMaleId(id);
            missionId = missions.get().getId();
        } else if (gender.equals("female")) {
            missions = missionRepository.findFirstByFemaleId(id);
            missionId = missions.get().getId();
        }

        Optional<Mission> findMission = missionRepository.findById(missionId);
        String maleId = findMission.get().getMaleId();
        String femaleId = findMission.get().getFemaleId();

        List<MissionQuestion> completedQuestions = missionQuestionRepository.findByMissionIdAndMaleIsDoneAndFemaleIsDone(missionId, true, true);
        int endCnt = 0;
        for (MissionQuestion completedQuestion : completedQuestions) {
            if (completedQuestion.getMaleIsDone() == true) {
                endCnt++;
            }
            if (completedQuestion.getFemaleIsDone() == true) {
                endCnt++;
            }
        }
        if (endCnt == 12) {
            // 모든 미션을 완료
            MissionFinishResponse missionFinishResponse = new MissionFinishResponse().builder()
                    .maleId(maleId)
                    .femaleId(femaleId)
                    .build();
            return missionFinishResponse;
        } else {
            // 모든 미션을 완료하지 못함
            MissionFinishResponse missionFinishResponse = new MissionFinishResponse().builder()
                    .maleId("error")
                    .femaleId("error")
                    .build();
            return missionFinishResponse;
        }
    }
}

