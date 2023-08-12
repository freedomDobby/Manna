package com.ssafy.manna.schedule.controller;

import com.ssafy.manna.global.util.ResponseTemplate;
import com.ssafy.manna.schedule.dto.request.OfflineScheduleRequest;
import com.ssafy.manna.schedule.dto.request.OnlineScheduleRequest;
import com.ssafy.manna.schedule.dto.request.TodayScheduleRequest;
import com.ssafy.manna.schedule.dto.response.OfflineScheduleResponse;
import com.ssafy.manna.schedule.dto.response.OnlineScheduleResponse;
import com.ssafy.manna.schedule.dto.response.ScheduleResponse;
import com.ssafy.manna.schedule.service.OfflineScheduleService;
import com.ssafy.manna.schedule.service.OnlineScheduleService;
import com.ssafy.manna.schedule.service.ScheduleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@EnableWebMvc
@Slf4j
@RequestMapping("/api/schedule")
public class ScheduleController {

    private final OnlineScheduleService onlineScheduleService;
    private final OfflineScheduleService offlineScheduleService;
    private final ScheduleService scheduleService;

    //소개팅 신청 수락 후
    //온라인 스케줄 insert
    @PostMapping("/online/insert")
    public ResponseEntity<?> insertOnlineSchedule(@RequestBody OnlineScheduleRequest scheduleRequest) {
        ResponseTemplate<?> body;
        try {
            onlineScheduleService.insertSchedule(scheduleRequest);
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("온라인 스케줄 등록 완료")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    //소개팅 후 예약 완료 시
    //오프라인 스케줄 insert
    @PostMapping("/offline/insert")
    public ResponseEntity<?> insertOfflineSchedule(@RequestBody OfflineScheduleRequest scheduleRequest) {
        ResponseTemplate<?> body;
        try {
            offlineScheduleService.insertSchedule(scheduleRequest);
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("오프라인 스케줄(예약) 등록 완료")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    //전체 스케줄 list 조회 - userId로 전체 조회
    @GetMapping("/{userId}")
    public ResponseEntity<?> getAllSchedule(@PathVariable("userId") String userId) {
        ResponseTemplate<?> body;
        try {
            List<OnlineScheduleResponse> onlineScheduleList = onlineScheduleService.getAllSchedule(userId);
            List<OfflineScheduleResponse> offLineScheduleList = offlineScheduleService.getAllSchedule(userId);
            Map<String, List<?>> scheduleMap = new HashMap<>();
            scheduleMap.put("onlineSchedule", onlineScheduleList);
            scheduleMap.put("offlineSchedule", offLineScheduleList);
            body = ResponseTemplate.builder()
                    .result(true)
                    .data(scheduleMap)
                    .msg("스케줄 리스트 조회 완료")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    //날짜별 스케줄 list 조회 - userId, 날짜로
    @PostMapping("/list")
    public ResponseEntity<?> getTodaySchedule(@RequestBody TodayScheduleRequest todayScheduleRequest) {
        ResponseTemplate<?> body;
        try {
            List<OnlineScheduleResponse> onlineScheduleList = onlineScheduleService.getTodaySchedule(todayScheduleRequest);
            List<OfflineScheduleResponse> offLineScheduleList = offlineScheduleService.getTodaySchedule(todayScheduleRequest);
            Map<String, List<?>> scheduleMap = new HashMap<>();
            scheduleMap.put("onlineSchedule", onlineScheduleList);
            scheduleMap.put("offlineSchedule", offLineScheduleList);
            body = ResponseTemplate.builder()
                    .result(true)
                    .data(scheduleMap)
                    .msg("날짜별 스케줄 리스트 조회 완료")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    //스케줄 삭제
    @DeleteMapping("/{scheduleId}")
    public ResponseEntity<?> deleteSchedule(@PathVariable("scheduleId") Integer id) {
        ResponseTemplate<?> body;
        try {
            scheduleService.deleteSchedule(id);
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("스케줄이 삭제 되었습니다.")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    //스케줄 하나 조회(noteId로)
    @GetMapping("/{scheduleId}/{userId}")
    public ResponseEntity<?> getDetailSchedule(@PathVariable("scheduleId") Integer scheduleId, @PathVariable("userId") String userId) {
        ResponseTemplate<?> body;
        try {
            ScheduleResponse scheduleResponse = scheduleService.getDetailInfo(scheduleId, userId);
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("스케줄 상세 조회 완료")
                    .data(scheduleResponse)
                    .build();
            return new ResponseEntity<>(body, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}
