package com.ssafy.manna.schedule.service;

import com.ssafy.manna.schedule.dto.request.OnlineScheduleRequest;
import org.springframework.stereotype.Service;

@Service
public interface OnlineScheduleService {

    //create
    void insertSchedule(OnlineScheduleRequest scheduleRequest);

    //delete

    void deleteSchedule();

    //read
    // 회원 전체 스케줄 return

    //

    //update

}
