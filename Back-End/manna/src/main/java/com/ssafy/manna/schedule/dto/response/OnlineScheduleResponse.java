package com.ssafy.manna.schedule.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OnlineScheduleResponse {

    //스케줄 아이디
    private Integer scheduleId;
    //상대방 아이디
    private String opponentId;
    //날짜 "yyyy-mm-dd"
    private String date;
    //시간 "hh시 mm분"
    private String time;

    private String url;
}
