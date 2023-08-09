package com.ssafy.manna.schedule.controller;

import com.ssafy.manna.global.util.ResponseTemplate;
import com.ssafy.manna.member.repository.MemberRepository;
import com.ssafy.manna.member.service.MemberService;
import com.ssafy.manna.schedule.dto.request.OnlineScheduleRequest;
import com.ssafy.manna.schedule.dto.response.OnlineScheduleResponse;
import com.ssafy.manna.schedule.service.OnlineScheduleService;
import com.ssafy.manna.schedule.service.ScheduleService;
import java.awt.image.RescaleOp;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@RestController
@RequiredArgsConstructor
@EnableWebMvc
@Slf4j
@RequestMapping("/api/schedule")
public class ScheduleController {

    private final OnlineScheduleService onlineScheduleService;

    //온라인 스케줄 insert
    @PostMapping("/insert")
    public ResponseEntity<?> insertOnlineSchedule(@RequestBody OnlineScheduleRequest scheduleRequest){
        try {
            onlineScheduleService.insertSchedule(scheduleRequest);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    //온라인 스케줄 list 조회 - userId로 전체 조회
    @GetMapping("/{userId}")
    public ResponseEntity<?> getAllSchedule(@PathVariable("userId") String userId){
        ResponseTemplate<?> body;
        try{
            List<OnlineScheduleResponse> scheduleList = onlineScheduleService.getAllSchedule(userId);
            body = ResponseTemplate.builder()
                    .result(true)
                    .data(scheduleList)
                    .msg("스케줄 리스트 조회 완료")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.OK);
        }
        catch(Exception e ){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    //스케줄 삭제
    @DeleteMapping("/{scheduleId}")
    public ResponseEntity<?> deleteSchedule(@PathVariable("scheduleId") Integer id){
        try{
            onlineScheduleService.deleteSchedule(id);
            return  ResponseEntity.ok(HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}
