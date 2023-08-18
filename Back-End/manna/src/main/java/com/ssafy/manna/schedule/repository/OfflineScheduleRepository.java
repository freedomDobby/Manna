package com.ssafy.manna.schedule.repository;

import com.ssafy.manna.schedule.domain.OfflineSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OfflineScheduleRepository extends JpaRepository<OfflineSchedule, Integer> {
    //    @Override
//    Optional<OnlineSchedule> findById(Integer integer);
    List<OfflineSchedule> findByFemaleId(String femaleId);

    List<OfflineSchedule> findByMaleId(String maleId);
}
