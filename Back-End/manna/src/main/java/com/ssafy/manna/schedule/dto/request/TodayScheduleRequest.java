package com.ssafy.manna.schedule.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TodayScheduleRequest {

    //userid
    private String userId;

    //Date : YYYY-MM-DD
    private String date;
}
