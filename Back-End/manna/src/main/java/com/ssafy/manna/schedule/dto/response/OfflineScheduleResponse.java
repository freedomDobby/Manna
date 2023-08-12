package com.ssafy.manna.schedule.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OfflineScheduleResponse {
    //스케줄 아이디
    private Integer scheduleId;
    //상대방 아이디
    private String opponentId;
    //날짜 "yyyy-mm-dd"
    private String date;
    //시간"hh:mm"
    private String time;

    //sido gugun detail name category
    private String sido;
    private String gugun;
    private String detail;
    private String name;
    private String category;
}
