package com.ssafy.manna.schedule.service;

import com.ssafy.manna.schedule.domain.OfflineSchedule;
import com.ssafy.manna.schedule.dto.request.OfflineScheduleRequest;
import com.ssafy.manna.schedule.dto.request.TodayScheduleRequest;
import com.ssafy.manna.schedule.dto.response.OfflineScheduleResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OfflineScheduleService {


    //스케줄 등록
    void insertSchedule(OfflineScheduleRequest scheduleRequest) throws Exception;

//    //스케줄 삭제
//    void deleteSchedule(Integer id) throws Exception;

    // 회원 전체 스케줄 return
    List<OfflineScheduleResponse> getAllSchedule(String userId) throws Exception;

    //날짜 스케줄 return
    List<OfflineScheduleResponse> getTodaySchedule(TodayScheduleRequest todayScheduleRequest) throws Exception;

    List<OfflineSchedule> allSchedule(String userId) throws Exception;
}
