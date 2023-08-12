package com.ssafy.manna.sogaeting.dto.request;

import com.ssafy.manna.global.common.domain.BaseCreateOnlyEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SogaetingReportRequest extends BaseCreateOnlyEntity {

    private String memberId;
    private String opponentId;
    private String context;
    private String code;


}
