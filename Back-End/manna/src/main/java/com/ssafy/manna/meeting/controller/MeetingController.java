package com.ssafy.manna.meeting.controller;

import com.ssafy.manna.meeting.dto.request.MeetingMakeRoomRequest;
import com.ssafy.manna.meeting.dto.request.MeetingReportRequest;
import com.ssafy.manna.meeting.service.MeetingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@RestController
@RequiredArgsConstructor
@EnableWebMvc
@Slf4j
@RequestMapping("/api/meeting")
public class MeetingController {

    private final MeetingService meetingService;

    // 미팅 방 만들기
    @PostMapping("/room/make")
    public ResponseEntity<?> makeRoom(@RequestBody MeetingMakeRoomRequest meetingMakeRoomRequest) {
        try {
            meetingService.MakeRoom(meetingMakeRoomRequest);
            return ResponseEntity.ok("makeRoom success");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // 신고하기
    @PostMapping(value = "/report")
    public ResponseEntity<?> report(@RequestBody MeetingReportRequest meetingReportRequest) {
        try {
            meetingService.Report(meetingReportRequest);
            return ResponseEntity.ok("report success");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
