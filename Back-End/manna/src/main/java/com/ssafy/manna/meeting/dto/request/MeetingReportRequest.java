package com.ssafy.manna.meeting.dto.request;

import com.ssafy.manna.global.common.domain.BaseCreateOnlyEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MeetingReportRequest extends BaseCreateOnlyEntity {

    private String senderId;
    private String receiverId;
    private String reportType;
    private String context;

}
