package com.ssafy.manna.sogaeting.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SogaetingStartRequest {

    // 스케줄 아이디와 동일
    private int sogaetingId;
    // 여자 아이디
    private String femaleId;
    // 남자 아이디
    private String maleId;
}
