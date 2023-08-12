package com.ssafy.manna.mission.repository;

import com.ssafy.manna.mission.domain.Mission;
import com.ssafy.manna.mission.domain.MissionQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MissionQuestionRepository extends JpaRepository<MissionQuestion, Integer> {

    // 해당하는 회원의 미션정보 불러오기
    List<MissionQuestion> findByMissionIn(List<Mission> missions);

    // 미션 아이디로 남녀 사진 업로드 미션 수행 여부 확인
    List<MissionQuestion> findByMissionIdAndMaleIsDoneAndFemaleIsDone(int missionId, boolean maleIsDone, boolean femaleIsDone);
}
