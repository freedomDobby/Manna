package com.ssafy.manna.schedule.service;

import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.repository.MemberRepository;
import com.ssafy.manna.schedule.domain.OfflineSchedule;
import com.ssafy.manna.schedule.domain.ReservePlace;
import com.ssafy.manna.schedule.dto.request.OfflineScheduleRequest;
import com.ssafy.manna.schedule.dto.request.TodayScheduleRequest;
import com.ssafy.manna.schedule.dto.response.OfflineScheduleResponse;
import com.ssafy.manna.schedule.repository.OfflineScheduleRepository;
import com.ssafy.manna.schedule.repository.ReservePlaceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class OfflineScheduleServiceImpl implements OfflineScheduleService {

    private final OfflineScheduleRepository offlineScheduleRepository;
    private final MemberRepository memberRepository;
    private final ReservePlaceRepository reservePlaceRepository;

    @Override
    public void insertSchedule(OfflineScheduleRequest scheduleRequest) throws Exception {
        Member female = memberRepository.findById(scheduleRequest.getFemaleId()).orElseThrow(() -> new Exception("회원 정보가 없습니다."));
        Member male = memberRepository.findById(scheduleRequest.getMaleId()).orElseThrow(() -> new Exception("회원 정보가 없습니다."));
        String dateStr = scheduleRequest.getDate();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy년 MM월 dd일 HH시 mm분");
        LocalDateTime time = LocalDateTime.parse(dateStr, formatter);
        // KST 시간대로 변환
        ZoneId kstZone = ZoneId.of("Asia/Seoul");
        ZonedDateTime kstDateTime = time.atZone(kstZone);
        //예약 장소 주소 id로
        Integer reserveAddressId = scheduleRequest.getReserveAddressId();
//
        ReservePlace reservePlace = reservePlaceRepository.findById(reserveAddressId).orElseThrow(() -> new Exception("예약 장소 정보가 없습니다."));
//
        OfflineSchedule offlineSchedule = OfflineSchedule.builder()
                .female(female)
                .male(male)
                .date(kstDateTime.toLocalDateTime())
                .reserve(reservePlace)
                .build();
//
        offlineScheduleRepository.save(offlineSchedule);
    }

    @Override
    public List<OfflineScheduleResponse> getAllSchedule(String userId) throws Exception {
        Member member = memberRepository.findById(userId).orElseThrow(() -> new Exception("회원 정보가 없습니다."));
        List<OfflineSchedule> allSchedule;
        if (member.getGender().equals("female")) {
            allSchedule = offlineScheduleRepository.findByFemaleId(userId);
        } else {
            allSchedule = offlineScheduleRepository.findByMaleId(userId);
        }
        List<OfflineScheduleResponse> scheduleResponses = new ArrayList<>();
        for (OfflineSchedule schedule : allSchedule) {
            //날짜
            LocalDateTime localTime = schedule.getDate();
            // DateTimeFormatter를 사용하여 원하는 형식으로 변환
            DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            String formattedDate = localTime.format(dateFormatter);

            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");
            String formattedTime = localTime.format(formatter);

            Member opponent;
            if (member.getGender().equals("female")) {
                opponent = schedule.getMale();
            } else {
                opponent = schedule.getFemale();
            }

            ReservePlace reservePlace = schedule.getReserve();
            OfflineScheduleResponse offlineSchedule = OfflineScheduleResponse.builder()
                    .opponentName(opponent.getName())
                    .scheduleId(schedule.getId())
                    .opponentId(opponent.getId())
                    .date(formattedDate)
                    .time(formattedTime)
                    .category(reservePlace.getCategory())
                    .sido(reservePlace.getSido())
                    .gugun(reservePlace.getGugun())
                    .detail(reservePlace.getDetail())
                    .name(reservePlace.getName())
                    .build();
            scheduleResponses.add(offlineSchedule);
        }

        return scheduleResponses;
    }

    @Override
    public List<OfflineScheduleResponse> getTodaySchedule(TodayScheduleRequest todayScheduleRequest) throws Exception {
        String userId = todayScheduleRequest.getUserId();
        String date = todayScheduleRequest.getDate();
        Member member = memberRepository.findById(userId).orElseThrow(() -> new Exception("회원이 존재하지 않습니다."));
        List<OfflineSchedule> allSchedule = allSchedule(userId);
        List<OfflineScheduleResponse> scheduleResponseList = new ArrayList<>();
        for (OfflineSchedule schedule : allSchedule) {
            //날짜
            LocalDateTime localTime = schedule.getDate();
            // DateTimeFormatter를 사용하여 원하는 형식으로 변환
            DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            String formattedDate = localTime.format(dateFormatter);
            //날짜가 요청 받은 날짜랑 같은지 확인
            if (date.equals(formattedDate)) {
                //시간
                // DateTimeFormatter로 hh:mm 형식으로 변환
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");
                String formattedTime = localTime.format(formatter);

                Member opponent;
                if (member.getGender().equals("female")) {
                    opponent = schedule.getMale();
                } else {
                    opponent = schedule.getFemale();
                }

                ReservePlace reservePlace = schedule.getReserve();
                OfflineScheduleResponse offlineSchedule = OfflineScheduleResponse.builder()
                        .scheduleId(schedule.getId())
                        .opponentId(opponent.getId())
                        .date(formattedDate)
                        .time(formattedTime)
                        .category(reservePlace.getCategory())
                        .sido(reservePlace.getSido())
                        .gugun(reservePlace.getGugun())
                        .detail(reservePlace.getDetail())
                        .name(reservePlace.getName())
                        .build();
                scheduleResponseList.add(offlineSchedule);
            }
        }
        return scheduleResponseList;
    }

    @Override
    public List<OfflineSchedule> allSchedule(String userId) throws Exception {
        Member member = memberRepository.findById(userId).orElseThrow(() -> new Exception("회원이 존재하지 않습니다."));
        List<OfflineSchedule> allSchedule = new ArrayList<>();
        if (member.getGender().equals("female")) {
            //여자이면
            allSchedule = offlineScheduleRepository.findByFemaleId(userId);
        } else {
            //남자이면
            allSchedule = offlineScheduleRepository.findByMaleId(userId);
        }
        return allSchedule;
    }
}
