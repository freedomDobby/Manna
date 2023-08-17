package com.ssafy.manna.schedule.service;

import com.ssafy.manna.global.util.GeoUtils;
import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.repository.MemberRepository;
import com.ssafy.manna.schedule.domain.ReservePlace;
import com.ssafy.manna.schedule.dto.request.ReserveMiddlePlaceRequest;
import com.ssafy.manna.schedule.dto.request.ReservePlaceRequest;
import com.ssafy.manna.schedule.repository.ReservePlaceRepository;
import io.micrometer.common.util.StringUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ReservePlaceServiceImpl implements ReservePlaceService {

    private final ReservePlaceRepository reservePlaceRepository;

    private final MemberRepository memberRepository;

    @Override
    public ReservePlace getPlaceInfo(Integer id) throws Exception {
        //id로 찾아서 
        ReservePlace reservePlace = reservePlaceRepository.findById(id)
                .orElseThrow(() -> new Exception("예약 장소 정보가 없습니다."));
        return reservePlace;
    }

    @Override
    public List<ReservePlace> getRecommendList(ReservePlaceRequest reservePlaceRequest) {
        String sido = reservePlaceRequest.getSido();
        String gugun = reservePlaceRequest.getGugun();
        String category = reservePlaceRequest.getCategory();

        boolean isEmptyCategory = StringUtils.isEmpty(category);

        List<ReservePlace> recommendList;
        // 카테고리 선택 안했을 때
        if (!isEmptyCategory) {
            recommendList = reservePlaceRepository.findAllBySidoAndGugunAndCategory(sido, gugun,
                    category);
        }
        // 카테고리 선택 했을 때
        else {
            recommendList = reservePlaceRepository.findAllBySidoAndGugun(sido, gugun);
        }
        return recommendList;
    }

    @Override
    public List<ReservePlace> recommendMiddle(ReserveMiddlePlaceRequest reserveMiddlePlaceRequest)
            throws Exception {
        final int EARTH_RADIUS = 6371; // 지구의 반지름 (단위: km)
        Member member1 = memberRepository.findById(reserveMiddlePlaceRequest.getUserId())
                .orElseThrow(() -> new Exception("회원 정보가 없습니다."));
        Member member2 = memberRepository.findById(reserveMiddlePlaceRequest.getOpponentId())
                .orElseThrow(() -> new Exception("회원 정보가 없습니다."));

        double latitude1 = member1.getMemberDetail().getAddress().getLatitude();
        double longitude1 = member1.getMemberDetail().getAddress().getLongitude();

        double latitude2 = member2.getMemberDetail().getAddress().getLatitude();
        double longitude2 = member2.getMemberDetail().getAddress().getLongitude();

        //가운데 좌표 계산
        System.out.println(longitude1);
        System.out.println(longitude2);
        double latitudeMiddle = (latitude1 + latitude2) / 2.0;
        double longitudeMiddle = (longitude1 + longitude2) / 2.0;

        System.out.println(latitudeMiddle + "," + longitudeMiddle);
        // 위도에 따른 1도 당 이동 거리 계산 (단위: 미터)
        double metersPerDegreeLatitude = 111320.0; // 약 111.32 km

// 경도에 따른 1도 당 이동 거리 계산 (단위: 미터)
        double metersPerDegreeLongitude =
                metersPerDegreeLatitude * Math.cos(Math.toRadians(latitudeMiddle));

// 현재 위치 기준 검색 거리 좌표
        double radius = 1000.0; // 반경 1 km
        double maxY = latitudeMiddle + (radius / metersPerDegreeLatitude);
        double minY = latitudeMiddle - (radius / metersPerDegreeLatitude);
        double maxX = longitudeMiddle + (radius / metersPerDegreeLongitude);
        double minX = longitudeMiddle - (radius / metersPerDegreeLongitude);

        System.out.println(maxY + "," + minY + "," + maxX + "," + minX);
        boolean isEmptyCategory = StringUtils.isEmpty(reserveMiddlePlaceRequest.getCategory());
        System.out.println(isEmptyCategory);
        List<ReservePlace> tempNearByPlaces;
        if (isEmptyCategory) {
            tempNearByPlaces = reservePlaceRepository.findNearbyReservePlaces(minY, maxY, minX,
                    maxX);
        } else {
            tempNearByPlaces = reservePlaceRepository.findNearbyAndCategoryReservePlaces(minY, maxY,
                    minX, maxX, reserveMiddlePlaceRequest.getCategory());
        }
        System.out.println(tempNearByPlaces.size() + ">>");

        List<ReservePlace> nearByPlaces = new ArrayList<>();
        for (ReservePlace place : tempNearByPlaces) {
            double distance = GeoUtils.getDistance(latitudeMiddle, longitudeMiddle,
                    place.getLatitude(), place.getLongitude());
            System.out.println("radius" + radius + " " + "distance" + distance);
            if (distance < radius) {
                nearByPlaces.add(place);
            }
        }

        System.out.println(nearByPlaces.size());

        return nearByPlaces;
    }


}
