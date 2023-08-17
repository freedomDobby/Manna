package com.ssafy.manna.mission.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MissionDeleteRequest {
    private String maleId;
    private String femaleId;
}
