package com.ssafy.manna.schedule.service;

import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.repository.MemberRepository;
import com.ssafy.manna.schedule.domain.OnlineSchedule;
import com.ssafy.manna.schedule.dto.request.OnlineScheduleRequest;
import com.ssafy.manna.schedule.dto.request.TodayScheduleRequest;
import com.ssafy.manna.schedule.dto.response.OnlineScheduleResponse;
import com.ssafy.manna.schedule.repository.OnlineScheduleRepository;
import com.ssafy.manna.schedule.repository.ScheduleRepository;
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

import static com.ssafy.manna.member.Enums.MemberExceptionsEnum.*;
import static com.ssafy.manna.schedule.Enums.DateTimeFormat.*;
import static com.ssafy.manna.schedule.Enums.Timezone.*;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class OnlineScheduleServiceImpl implements OnlineScheduleService {

    private final OnlineScheduleRepository onlineScheduleRepository;
    private final ScheduleRepository scheduleRepository;
    private final MemberRepository memberRepository;

    @Override
    public void insertSchedule(OnlineScheduleRequest scheduleRequest) {
        Member female = memberRepository.findById(scheduleRequest.getFemaleId()).orElseThrow(() -> new RuntimeException(MEMBER_EXCEPTIONS_NONE_MEMBER.getValue()));
        Member male = memberRepository.findById(scheduleRequest.getMaleId()).orElseThrow(() -> new RuntimeException(MEMBER_EXCEPTIONS_NONE_MEMBER.getValue()));
        String dateStr = scheduleRequest.getDate();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(KST.getValue());
        LocalDateTime time = LocalDateTime.parse(dateStr, formatter);
        // KST 시간대로 변환
        ZoneId kstZone = ZoneId.of(SEOUL.getZoneId());
        ZonedDateTime kstDateTime = time.atZone(kstZone);

        System.out.println(kstDateTime);
        System.out.println(kstDateTime.toLocalDateTime());

        String url = scheduleRequest.getUrl();
        System.out.println(url);
        OnlineSchedule onlineSchedule = OnlineSchedule.builder()
                .female(female)
                .male(male)
                .date(kstDateTime.toLocalDateTime())
                .url(url)
                .build();
      
        onlineScheduleRepository.save(onlineSchedule);
    }


    //스케줄 삭제
    @Override
    public void deleteSchedule(Integer id) throws Exception {
        OnlineSchedule schedule = (OnlineSchedule) onlineScheduleRepository.findById(id).orElseThrow(() -> new Exception());
        scheduleRepository.delete(schedule);
    }

    @Override
    public List<OnlineSchedule> allSchedule(String userId) throws Exception {
        Member member = memberRepository.findById(userId).orElseThrow(() -> new Exception("회원이 존재하지 않습니다."));
        List<OnlineSchedule> allSchedule = new ArrayList<>();
        if (member.getGender().equals("female")) {
            //여자이면
            allSchedule = onlineScheduleRepository.findByFemaleId(userId);
        } else {
            //남자이면
            allSchedule = onlineScheduleRepository.findByMaleId(userId);
        }
        return allSchedule;
    }

    @Override
    public List<OnlineScheduleResponse> getAllSchedule(String userId) throws Exception {
        Member member = memberRepository.findById(userId).orElseThrow(() -> new Exception("회원이 존재하지 않습니다."));
        List<OnlineSchedule> allSchedule = allSchedule(userId);
        List<OnlineScheduleResponse> scheduleResponseList = new ArrayList<>();
        for (OnlineSchedule schedule : allSchedule) {

            //날짜
            LocalDateTime localTime = schedule.getDate();
            // DateTimeFormatter를 사용하여 원하는 형식으로 변환
            DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            String formattedDate = localTime.format(dateFormatter);


//            LocalDateTime localTime = schedule.getDate();
//
//            int year = localTime.getYear();             // 년도 추출
//            int month = localTime.getMonthValue();      // 월 추출
//            int day = localTime.getDayOfMonth();        // 일 추출
//            String extractedDate = String.format("%04d년 %02d월 %02d일", year, month, day);

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
            OnlineScheduleResponse onlineSchedule = OnlineScheduleResponse.builder()
                    .opponentName(opponent.getName())
                    .scheduleId(schedule.getId())
                    .opponentId(opponent.getId())
                    .date(formattedDate)
                    .time(formattedTime)
                    .url(schedule.getUrl())
                    .build();
            scheduleResponseList.add(onlineSchedule);
        }
        return scheduleResponseList;
    }

    @Override
    public List<OnlineScheduleResponse> getTodaySchedule(TodayScheduleRequest todayScheduleRequest) throws Exception {
        String userId = todayScheduleRequest.getUserId();
        String date = todayScheduleRequest.getDate();
        Member member = memberRepository.findById(userId).orElseThrow(() -> new Exception("회원이 존재하지 않습니다."));
        List<OnlineSchedule> allSchedule = allSchedule(userId);
        List<OnlineScheduleResponse> scheduleResponseList = new ArrayList<>();
        for (OnlineSchedule schedule : allSchedule) {
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

                OnlineScheduleResponse onlineSchedule = OnlineScheduleResponse.builder()
                        .scheduleId(schedule.getId())
                        .opponentId(opponent.getId())
                        .date(formattedDate)
                        .time(formattedTime)
                        .url(schedule.getUrl())
                        .build();
                scheduleResponseList.add(onlineSchedule);
            }
        }
        return scheduleResponseList;
    }


}
