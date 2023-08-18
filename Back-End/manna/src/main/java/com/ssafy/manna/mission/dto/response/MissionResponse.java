package com.ssafy.manna.mission.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MissionResponse {
    private Integer missionQuestionId;
    private Boolean isDone;
}
