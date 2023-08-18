package com.ssafy.manna.mission.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Data
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class MissionStartRequest {
    private int sogaetingId;
    private String maleId;
    private String femaleId;
}
