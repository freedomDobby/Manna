package com.ssafy.manna.meeting.service;

import com.ssafy.manna.meeting.dto.request.MeetingMakeRoomRequest;
import com.ssafy.manna.meeting.dto.request.MeetingReportRequest;

public interface MeetingService {

    void MakeRoom(MeetingMakeRoomRequest meetingMakeRoomRequest) throws Exception;

    // 신고하기
    void Report(MeetingReportRequest meetingReportRequest) throws Exception;
}
