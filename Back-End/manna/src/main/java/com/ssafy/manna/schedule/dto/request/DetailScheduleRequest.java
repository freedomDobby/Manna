package com.ssafy.manna.schedule.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DetailScheduleRequest {
    //id
    private String userId;
    //날짜
    private String date;

}
