package com.ssafy.manna.mission.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MissionDetailResponse {
    private String userImgPath;
    private String opponentImgPath;
    private String content;
}
