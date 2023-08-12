package com.ssafy.manna.sogaeting.repository;

import com.ssafy.manna.sogaeting.domain.Sogaeting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SogaetingRepository extends JpaRepository<Sogaeting, String> {


    // 전부 가져오는 기능 - 성별만 다르게


    // 흡연여부, 음주여부, mbti, 종교 별 query하는 동적 쿼리


    // 같은 지역 추천하는 기능

    // 남자 여자 아이디를 기준으로 조회
    Sogaeting findByMaleIdAndFemaleId(String maleId, String femaleId);

}
