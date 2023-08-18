package com.ssafy.manna.schedule.service;

import com.ssafy.manna.schedule.domain.ReservePlace;
import com.ssafy.manna.schedule.dto.request.ReserveMiddlePlaceRequest;
import com.ssafy.manna.schedule.dto.request.ReservePlaceRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ReservePlaceService {

    //예약 정보 조회하기
    ReservePlace getPlaceInfo(Integer id) throws Exception;

    //추천 장소 조회하기 - sido,gugun,category
    List<ReservePlace> getRecommendList(ReservePlaceRequest reservePlaceRequest) throws Exception;

    //두 사람 위치 가운데 장소 조회하기
    List<ReservePlace> recommendMiddle(ReserveMiddlePlaceRequest reserveMiddlePlaceRequest) throws Exception;
}
