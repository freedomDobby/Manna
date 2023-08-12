package com.ssafy.manna.sogaeting.controller;

import com.ssafy.manna.global.util.ResponseTemplate;
import com.ssafy.manna.sogaeting.dto.request.*;
import com.ssafy.manna.sogaeting.dto.response.SogaetingMemberResponsePage;
import com.ssafy.manna.sogaeting.service.SogaetingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@RestController
@RequiredArgsConstructor
@EnableWebMvc
@Slf4j
@RequestMapping("/api/sogaeting")
public class SogaetingController {

    private final SogaetingService sogaetingService;

    // 신고하기
    @PostMapping(value = "/report")
    public ResponseEntity<?> report(@RequestBody SogaetingReportRequest sogaetingReportRequest) {
        ResponseTemplate<?> body;
        try {
            sogaetingService.report(sogaetingReportRequest);
            return ResponseEntity.ok("report success");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping(value = "/like")
    public ResponseEntity<?> like(@RequestBody SogaetingLikeRequest sogaetingLikeRequest) {
        ResponseTemplate<?> body;
        try {
            sogaetingService.Like(sogaetingLikeRequest);
            return ResponseEntity.ok("상대방에게 호감을 보냈습니다.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/recommend")
    public ResponseEntity<?> findMemberByCondition(
            @RequestBody SogaetingFilteringRequest sogaetingFilteringRequest) {

        SogaetingMemberResponsePage memberByCondition = sogaetingService.findMemberByCondition(
                sogaetingFilteringRequest);

        return new ResponseEntity<>(
                ResponseTemplate.<SogaetingMemberResponsePage>builder()
                        .msg("조회성공")
                        .data(memberByCondition)
                        .result(true)
                        .build(),
                HttpStatus.OK);
    }

    @PostMapping("/recommend/locate")
    public ResponseEntity<?> findMemberByConditionAndLocate(
            @RequestBody SogaetingFilteringRequest sogaetingFilteringRequest) {
        SogaetingMemberResponsePage memberByConditionAndLocate = sogaetingService.findMemberByConditionAndLocate(
                sogaetingFilteringRequest);

        return new ResponseEntity<>(
                ResponseTemplate.<SogaetingMemberResponsePage>builder()
                        .msg("조회성공")
                        .data(memberByConditionAndLocate)
                        .result(true)
                        .build(),
                HttpStatus.OK);
    }

    @PostMapping("/onlineRecommend")
    public ResponseEntity<?> findMemberByConditionAndOnlineState(
            @RequestBody SogaetingFilteringRequest sogaetingFilteringRequest) {

        SogaetingMemberResponsePage memberByConditionAndOnlineState =
                sogaetingService.findMemberByConditionAndOnlineState(sogaetingFilteringRequest);

        return new ResponseEntity<>(
                ResponseTemplate.<SogaetingMemberResponsePage>builder()
                        .msg("조회성공")
                        .data(memberByConditionAndOnlineState)
                        .result(true)
                        .build(),
                HttpStatus.OK);
    }

    @PostMapping("/onlineRecommend/locate")
    public ResponseEntity<?> findMemberByConditionAndOnlineStateAndLocate(
            @RequestBody SogaetingFilteringRequest sogaetingFilteringRequest
    ) {
        SogaetingMemberResponsePage memberByConditionAndOnlineStateAndLocate = sogaetingService.findMemberByConditionAndOnlineStateAndLocate(
                sogaetingFilteringRequest);

        return new ResponseEntity<>(
                ResponseTemplate.<SogaetingMemberResponsePage>builder()
                        .msg("조회성공")
                        .data(memberByConditionAndOnlineStateAndLocate)
                        .result(true)
                        .build(),
                HttpStatus.OK);
    }

    // 소개팅 시작하기
    @PostMapping(value = "/start")
    public ResponseEntity<?> startSogaeting(@RequestBody SogaetingStartRequest sogaetingStartRequest) {
        ResponseTemplate<?> body;
        try {
            sogaetingService.start(sogaetingStartRequest);
            return ResponseEntity.ok("sogaeting start success");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // 소개팅 성공
    @PutMapping(value = "/success")
    public ResponseEntity<?> successSogaeting(@RequestBody SogaetingSuccessRequest sogaetingSuccessRequest) {
        ResponseTemplate<?> body;
        try {
            sogaetingService.success(sogaetingSuccessRequest);
            return ResponseEntity.ok("sogaeting success success");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


}
