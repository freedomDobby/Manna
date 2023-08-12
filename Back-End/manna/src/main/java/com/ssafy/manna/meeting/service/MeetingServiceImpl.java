package com.ssafy.manna.meeting.service;

import com.ssafy.manna.meeting.domain.Meeting;
import com.ssafy.manna.meeting.dto.request.MeetingMakeRoomRequest;
import com.ssafy.manna.meeting.dto.request.MeetingReportRequest;
import com.ssafy.manna.meeting.repository.MeetingRepository;
import com.ssafy.manna.member.Enums.BanCode;
import com.ssafy.manna.member.domain.Ban;
import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class MeetingServiceImpl implements MeetingService {

    private final MeetingRepository meetingRepository;
    private final MemberRepository memberRepository;

    // 미팅 방 만들기
    @Override
    public void MakeRoom(MeetingMakeRoomRequest meetingMakeRoomRequest) throws Exception {
        Meeting meeting = Meeting.builder()
                .name(meetingMakeRoomRequest.getName())
                .host(meetingMakeRoomRequest.getHost())
                .game(meetingMakeRoomRequest.getGame())
                .isOpenProfile(meetingMakeRoomRequest.getIsOpenProfile())
                .level(meetingMakeRoomRequest.getLevel())
                .build();
        meetingRepository.save(meeting);
    }

    // 신고하기
    @Override
    public void Report(MeetingReportRequest meetingReportRequest) throws Exception {

        Member receiveMember = memberRepository.findById(meetingReportRequest.getReceiverId()).orElseThrow(() -> new Exception("일치하는 회원이 없습니다."));
        Member sendMember = memberRepository.findById(meetingReportRequest.getSenderId()).orElseThrow(() -> new Exception("일치하는 회원이 없습니다."));

        Ban ban = Ban.builder()
                .member(receiveMember)
                .opponent(sendMember)
                .context(meetingReportRequest.getContext())
                .code(BanCode.B1)
                .build();
    }
}
