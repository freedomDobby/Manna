package com.ssafy.manna.schedule.service;

import com.ssafy.manna.schedule.domain.OnlineSchedule;
import com.ssafy.manna.schedule.dto.request.OnlineScheduleRequest;
import com.ssafy.manna.schedule.dto.request.TodayScheduleRequest;
import com.ssafy.manna.schedule.dto.response.OnlineScheduleResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OnlineScheduleService {

    //스케줄 등록
    void insertSchedule(OnlineScheduleRequest scheduleRequest) throws Exception;

    //스케줄 삭제
    void deleteSchedule(Integer id) throws Exception;

    // 회원 전체 스케줄 return
    List<OnlineScheduleResponse> getAllSchedule(String userId) throws Exception;

    //날짜 스케줄 return
    List<OnlineScheduleResponse> getTodaySchedule(TodayScheduleRequest todayScheduleRequest) throws Exception;

    List<OnlineSchedule> allSchedule(String userId) throws Exception;

}
