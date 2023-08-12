package com.ssafy.manna.global.common.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AddressDto {

    //시도 id
    private String sido;
    //구군 id
    private String gugun;
    //상세 주소
    private String detail;
    //위도
    private double latitude;
    //경도
    private double longitude;
}
