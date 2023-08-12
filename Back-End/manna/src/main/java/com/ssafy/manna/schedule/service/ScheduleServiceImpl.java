package com.ssafy.manna.schedule.service;

import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.repository.MemberRepository;
import com.ssafy.manna.schedule.domain.Schedule;
import com.ssafy.manna.schedule.dto.response.ScheduleResponse;
import com.ssafy.manna.schedule.repository.ScheduleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ScheduleServiceImpl implements ScheduleService {

    private final MemberRepository memberRepository;

    private final ScheduleRepository scheduleRepository;

    @Value("${file.server-domain}")
    private String serverDomain;

    @Override
    public void deleteSchedule(Integer id) throws Exception {
        Schedule schedule = scheduleRepository.findById(id).orElseThrow(() -> new Exception("스케줄 정보가 없습니다."));
        scheduleRepository.delete(schedule);
    }

    @Override
    public List<Schedule> getAllSchedule(String userId) throws Exception {
        //member 가 female인지 male인지 확인
        Member member = memberRepository.findById(userId).orElseThrow(() -> new Exception("회원이 존재하지 않습니다."));
        List<Schedule> allSchedule;
        if (member.getGender().equals("female")) {
            //여자이면
            allSchedule = scheduleRepository.findByFemaleId(userId);
        } else {
            //남자이면
            allSchedule = scheduleRepository.findByMaleId(userId);
        }
        return allSchedule;
    }

    @Override
    public ScheduleResponse getDetailInfo(Integer scheduleId, String userId) throws Exception {
        //scheduleid
        Member member = memberRepository.findById(userId).orElseThrow(() -> new Exception("회원이 존재하지 않습니다."));
        Schedule schedule = scheduleRepository.findById(scheduleId).orElseThrow(() -> new Exception("스케줄 정보가 없습니다."));
        Member opponent;
        if (member.getGender().equals("female")) {
            //여자이면 반대
            opponent = schedule.getMale();
        } else {
            //남자이면
            opponent = schedule.getFemale();
        }

        LocalDateTime localTime = schedule.getDate();
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String formattedDate = localTime.format(dateFormatter);
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("hh:mm");
        String formattedTime = localTime.format(timeFormatter);

        ScheduleResponse scheduleResponse = ScheduleResponse.builder()
                .scheduleId(scheduleId)
                .opponentId(opponent.getId())
                .date(formattedDate)
                .time(formattedTime)
                .opponentName(opponent.getName())
                .age(2023 - Integer.parseInt(opponent.getMemberDetail().getBirth()))
                .height(opponent.getMemberDetail().getHeight())
                .job(opponent.getMemberDetail().getJob())
                .mbti(opponent.getMemberDetail().getMbti())
                .imgPath(serverDomain + "/img/" + opponent.getProfilePictures().get(0).getName())
                .introduction(opponent.getMemberDetail().getIntroduction())
                .build();
        return scheduleResponse;
    }
}
