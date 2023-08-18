package com.ssafy.manna.schedule.service;

import com.ssafy.manna.schedule.domain.Schedule;
import com.ssafy.manna.schedule.dto.response.ScheduleResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ScheduleService {

    //스케줄 삭제
    void deleteSchedule(Integer id) throws Exception;

    // 회원 전체 스케줄 return
    List<Schedule> getAllSchedule(String userId) throws Exception;

    ScheduleResponse getDetailInfo(Integer scheduleId, String userId) throws Exception;

}
