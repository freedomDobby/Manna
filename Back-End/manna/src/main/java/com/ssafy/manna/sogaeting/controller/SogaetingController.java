package com.ssafy.manna.sogaeting.controller;

import com.ssafy.manna.global.util.ResponseTemplate;
import com.ssafy.manna.sogaeting.dto.request.*;
import com.ssafy.manna.sogaeting.dto.response.SogaetingChatRecommendResponse;
import com.ssafy.manna.sogaeting.dto.response.SogaetingInfoResponse;
import com.ssafy.manna.sogaeting.dto.response.SogaetingMemberResponsePage;
import com.ssafy.manna.sogaeting.enums.SogaetingResponseMessage;
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

    @PostMapping(value = "/report")
    public ResponseEntity<ResponseTemplate<SogaetingResponseMessage>> report(@RequestBody SogaetingReportRequest sogaetingReportRequest) throws Exception {
        sogaetingService.report(sogaetingReportRequest);

        return new ResponseEntity<>(
                ResponseTemplate.<SogaetingResponseMessage>builder()
                        .msg(SogaetingResponseMessage.SOGAETING_REPORT_SUCCESS.getMessage())
                        .result(true)
                        .build(),
                HttpStatus.OK);

    }

    @PostMapping(value = "/like")
    public ResponseEntity<ResponseTemplate<SogaetingResponseMessage>> like(@RequestBody SogaetingLikeRequest sogaetingLikeRequest) throws Exception {
        sogaetingService.Like(sogaetingLikeRequest);

        return new ResponseEntity<>(
                ResponseTemplate.<SogaetingResponseMessage>builder()
                        .msg(SogaetingResponseMessage.SOGAETING_LIKE_SUCCESS.getMessage())
                        .result(true)
                        .build(),
                HttpStatus.OK);

    }


    @PostMapping("/recommend")
    public ResponseEntity<ResponseTemplate<SogaetingMemberResponsePage>> findMemberByCondition(
            @RequestBody SogaetingFilteringRequest sogaetingFilteringRequest) {

        SogaetingMemberResponsePage memberByCondition = sogaetingService.findMemberByCondition(
                sogaetingFilteringRequest);

        return ResponseEntity.ok(
                ResponseTemplate.<SogaetingMemberResponsePage>builder()
                        .msg(SogaetingResponseMessage.SOGAETING_RECOMMEND_SUCCESS.getMessage())
                        .data(memberByCondition)
                        .result(true)
                        .build());
    }

    @PostMapping("/recommend/locate")
    public ResponseEntity<ResponseTemplate<SogaetingMemberResponsePage>> findMemberByConditionAndLocate(
            @RequestBody SogaetingFilteringRequest sogaetingFilteringRequest) {
        SogaetingMemberResponsePage memberByConditionAndLocate = sogaetingService.findMemberByConditionAndLocate(
                sogaetingFilteringRequest);

        return new ResponseEntity<>(
                ResponseTemplate.<SogaetingMemberResponsePage>builder()
                        .msg(SogaetingResponseMessage.SOGAETING_RECOMMENDLOCATE_SUCCESS.getMessage())
                        .data(memberByConditionAndLocate)
                        .result(true)
                        .build(),
                HttpStatus.OK);
    }

    @PostMapping("/onlineRecommend")
    public ResponseEntity<ResponseTemplate<SogaetingMemberResponsePage>> findMemberByConditionAndOnlineState(
            @RequestBody SogaetingFilteringRequest sogaetingFilteringRequest) {

        SogaetingMemberResponsePage memberByConditionAndOnlineState =
                sogaetingService.findMemberByConditionAndOnlineState(sogaetingFilteringRequest);

        return new ResponseEntity<>(
                ResponseTemplate.<SogaetingMemberResponsePage>builder()
                        .msg(SogaetingResponseMessage.SOGAETING_ONLINERECOMMEND_SUCCESS.getMessage())
                        .data(memberByConditionAndOnlineState)
                        .result(true)
                        .build(),
                HttpStatus.OK);
    }

    @PostMapping("/onlineRecommend/locate")
    public ResponseEntity<ResponseTemplate<SogaetingMemberResponsePage>> findMemberByConditionAndOnlineStateAndLocate(
            @RequestBody SogaetingFilteringRequest sogaetingFilteringRequest
    ) {
        SogaetingMemberResponsePage memberByConditionAndOnlineStateAndLocate = sogaetingService.findMemberByConditionAndOnlineStateAndLocate(
                sogaetingFilteringRequest);

        return new ResponseEntity<>(
                ResponseTemplate.<SogaetingMemberResponsePage>builder()
                        .msg(SogaetingResponseMessage.SOGAETING_ONLINERECOMMENDLOCATE_SUCCESS.getMessage())
                        .data(memberByConditionAndOnlineStateAndLocate)
                        .result(true)
                        .build(),
                HttpStatus.OK);
    }

    // 소개팅 시작하기
    @PostMapping("/start")
    public ResponseEntity<ResponseTemplate<SogaetingResponseMessage>> startSogaeting(@RequestBody SogaetingStartRequest sogaetingStartRequest) {
        sogaetingService.start(sogaetingStartRequest);

        return ResponseEntity.ok(
                ResponseTemplate.<SogaetingResponseMessage>builder()
                        .msg(SogaetingResponseMessage.SOGAETING_START_SUCCESS.getMessage())
                        .result(true)
                        .build());

    }

    // 소개팅 성공
    @PutMapping("/success")
    public ResponseEntity<ResponseTemplate<SogaetingResponseMessage>> successSogaeting(@RequestBody SogaetingSuccessRequest sogaetingSuccessRequest) {
        sogaetingService.success(sogaetingSuccessRequest);

        return ResponseEntity.ok(
                ResponseTemplate.<SogaetingResponseMessage>builder()
                        .msg(SogaetingResponseMessage.SOGAETING_SUCCESS_SUCCESS.getMessage())
                        .result(true)
                        .build());

    }

    // 대화 주제 추천
    @GetMapping(value = "/chatRecommend")
    public ResponseEntity<ResponseTemplate<SogaetingChatRecommendResponse>> getRandomTCodeDetailName() {

        SogaetingChatRecommendResponse sogaetingChatRecommendResponse = sogaetingService.getRandomTCodeDetailName();

        return new ResponseEntity<>(
                ResponseTemplate.<SogaetingChatRecommendResponse>builder()
                        .msg(SogaetingResponseMessage.SOGAETING_CHATRECOMMEND_SUCCESS.getMessage())
                        .data(sogaetingChatRecommendResponse)
                        .result(true)
                        .build(),
                HttpStatus.OK);
    }

    // 소개팅 정보 get
    @GetMapping(value = "/sogaetingInfo/{id}")
    public ResponseEntity<ResponseTemplate<SogaetingInfoResponse>> getSogaetingInfo(@PathVariable("id") int id)
            throws Exception {
        SogaetingInfoResponse sogaetingInfoResponse = sogaetingService.getSogaetingById(id);

        return new ResponseEntity<>(
                ResponseTemplate.<SogaetingInfoResponse>builder()
                        .msg(SogaetingResponseMessage.SOGAETING_INFO_SUCCESS.getMessage())
                        .data(sogaetingInfoResponse)
                        .result(true)
                        .build(),
                HttpStatus.OK);
    }

}
