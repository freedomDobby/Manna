package com.ssafy.manna.mission.service;

import com.ssafy.manna.mission.domain.Mission;
import com.ssafy.manna.mission.dto.request.MissionAssignRequest;
import com.ssafy.manna.mission.dto.request.MissionDeleteRequest;
import com.ssafy.manna.mission.dto.request.MissionDoRequest;
import com.ssafy.manna.mission.dto.request.MissionStartRequest;
import com.ssafy.manna.mission.dto.response.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface MissionService {

    // 소개팅이 성공하면 미션 6가지 생성해주기
    void assignMission(MissionAssignRequest missionAssignRequest) throws Exception;

    // 미션 완료 후 인증서 발급
    List<MissionCallResponse> getMissionListByUserId(String userid);

    // 미션 포기하기
    void giveUpMission(MissionAssignRequest missionAssignRequest);

    // 미션 사진 올리기
    void doMission(MissionDoRequest missionDoRequest, MultipartFile missionPicture) throws IOException;

    // 사진 등록
    String storeFile(String memberId, MultipartFile file) throws IOException;

    MissionFinishResponse finishMission(Integer missionId);

    Mission startMission(MissionStartRequest missionStartRequest);

    MissionParticipantResponse getParticipant(String userId);

    MissionDetailResponse getImagePerCard(Integer missionId, Integer cardId, String userId);


    void deleteMission(MissionDeleteRequest missionDeleteRequest);
}
