package com.ssafy.manna.schedule.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleResponse {

    //스케줄 아이디
    private Integer scheduleId;
    //상대방 아이디
    private String opponentId;
    //날짜 "yyyy년 mm월 dd일"
    private String date;
    //시간 "hh시 mm분"
}
