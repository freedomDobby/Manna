package com.ssafy.manna.mission.dto.request;

import com.ssafy.manna.global.common.domain.BaseStartEndEntity;
import lombok.*;

@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MissionAssignRequest extends BaseStartEndEntity {

    // 소개팅 방 번호를 받아옴
    private Integer missionId;
}
