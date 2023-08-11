package com.ssafy.manna.schedule.controller;

import com.ssafy.manna.global.util.ResponseTemplate;
import com.ssafy.manna.schedule.domain.ReservePlace;
import com.ssafy.manna.schedule.dto.request.ReservePlaceRequest;
import com.ssafy.manna.schedule.service.ReservePlaceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.List;

@RestController
@RequiredArgsConstructor
@EnableWebMvc
@Slf4j
@RequestMapping("/api/reserve")
public class ReservePlaceController {

    private final ReservePlaceService reservePlaceService;
//    //예약하기 - 조회
//    @GetMapping("/{reserveId}")
//    public ResponseEntity<?> reservePlace(@PathVariable("reserveId") Integer reserveId ){
//        try {
////            reservePlaceService.reserve(reserveId);
//            return new ResponseEntity<>(HttpStatus.OK);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//    }


    //예약 - sido,gugun, category 골라서 return
    @PostMapping("/placeList")
    public ResponseEntity<?> getRecommendList(@RequestBody ReservePlaceRequest reservePlaceRequest){
        ResponseTemplate<?> body;
        try{
            List<ReservePlace> recommendList =  reservePlaceService.getRecommendList(reservePlaceRequest);

            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("추천 리스트 조회 완료")
                    .data(recommendList)
                    .build();
            return new ResponseEntity<>(body,HttpStatus.OK);

        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }
}
