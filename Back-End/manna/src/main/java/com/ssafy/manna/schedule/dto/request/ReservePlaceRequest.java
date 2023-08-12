package com.ssafy.manna.schedule.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReservePlaceRequest {
    //추천 리스트 조회 request
    String sido;
    String gugun;
    String category;
}
