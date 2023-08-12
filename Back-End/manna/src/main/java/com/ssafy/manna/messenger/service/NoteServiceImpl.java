package com.ssafy.manna.messenger.service;

import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.repository.MemberRepository;
import com.ssafy.manna.messenger.domain.Note;
import com.ssafy.manna.messenger.dto.request.NoteSendRequest;
import com.ssafy.manna.messenger.dto.request.SogaeNoteSendRequest;
import com.ssafy.manna.messenger.dto.response.NoteDetailResponse;
import com.ssafy.manna.messenger.dto.response.NoteListResponse;
import com.ssafy.manna.messenger.dto.response.SogaeNoteDetailResponse;
import com.ssafy.manna.messenger.repository.NoteRepository;
import com.ssafy.manna.schedule.dto.request.OnlineScheduleRequest;
import com.ssafy.manna.schedule.service.OnlineScheduleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.expression.ExpressionException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class NoteServiceImpl implements NoteService {
    private final MemberRepository memberRepository;
    private final NoteRepository noteRepository;
    private final OnlineScheduleService onlineScheduleService;

    @Value("${file.server-domain}")
    private String SERVER_DOMAIN;

    // 일반 쪽지 쓰기
    @Override
    public void send(NoteSendRequest noteSendRequest) throws Exception {
        //받는이
        String receiverId = noteSendRequest.getReceiver();
        Member receiverMember = memberRepository.findById(receiverId).orElseThrow(
                () -> new Exception("받는 회원 정보가 없습니다.")
        );

        //보낸이
        String senderId = noteSendRequest.getSender();
        Member senderMember = memberRepository.findById(senderId).orElseThrow(
                () -> new Exception("보내는 회원 정보가 없습니다.")
        );
        Note note = Note.builder()
                .receiver(receiverMember)
                .sender(senderMember)
                .subject(noteSendRequest.getSubject())
                .content(noteSendRequest.getContent())
                .date(setNowTime())
                .isSogae(false)         // 소개팅 쪽지 여부 false 설정
                .isCheck(false)         //읽음 false 로 설정
                .isReject(false)       // 거절 여부 false로 설정
                .isDeleted(false)
                .build();
        noteRepository.save(note);
    }


    //소개팅 쪽지 전송
    @Override
    public void sendSogaeNote(SogaeNoteSendRequest sogaeNoteSendRequest) throws Exception {
        // 받는이
        Member receiver = memberRepository.findById(sogaeNoteSendRequest.getReceiver()).orElseThrow(() -> new Exception("회원 정보가 없습니다."));
        // 보내는이
        Member sender = memberRepository.findById(sogaeNoteSendRequest.getSender()).orElseThrow(() -> new Exception("회원 정보가 없습니다."));
        // 제목
        String subject = sender.getName() + "님이 소개팅 신청을 하셨습니다.";
        // 날짜
        //String으로 들어온 날짜 - 소개팅 날짜
        String dateString = sogaeNoteSendRequest.getDate();
        // 내용
        String content = sender.getName() + "님이 " + receiver.getName() + "님께 소개팅 신청을 하셨습니다.\n"
                + "D-Day : " + dateString;

        Note note = Note.builder()
                .receiver(receiver)
                .sender(sender)
                .subject(subject)
                .content(content)
                .date(setNowTime())            //쪽지 보낸 시간
                .isSogae(true)                  //소개팅 쪽지 여부 true
                .isCheck(false)                 //읽음 false 로 설정
                .isReject(false)                //거절 여부 false로 설정
                .isDeleted(false)
                .build();
        noteRepository.save(note);
    }


    //쪽지 삭제
    @Override
    public void deleteNote(int noteId) throws Exception {
        Note deleteNote = noteRepository.findById(noteId).orElseThrow(() -> new Exception("쪽지를 찾을 수 없습니다."));
        deleteNote.updateDeleted(true);     //true로 설정
        noteRepository.save(deleteNote);
    }

    //일반 쪽지 상세보기
    @Override
    public NoteDetailResponse readDetailNote(int noteId) throws Exception {
        //읽음 처리
        Note note = noteRepository.findById(noteId).orElseThrow(() -> new Exception("쪽지를 찾을 수 없습니다."));
        note.updateIsCheck(true);
        noteRepository.save(note);
        //NoteDetailResponse 로 보내기
        NoteDetailResponse noteDetailResponse = new NoteDetailResponse().builder()
                .id(noteId)
                .senderId(note.getSender().getId())
                .senderName(note.getSender().getName())
                .receiverId(note.getReceiver().getId())
                .receiverName(note.getReceiver().getName())
                .subject(note.getSubject())
                .content(note.getContent())
                .isCheck(note.getIsCheck())
                .date(localDateTimeToString(note.getDate()))
                .build();
        return noteDetailResponse;
    }


    //소개팅 쪽지 상세 보기 - 상대방 프로필 표출
    @Override
    public SogaeNoteDetailResponse readSogaeDetailNote(int noteId) throws Exception {
        Note note = noteRepository.findById(noteId).orElseThrow(() -> new ExpressionException("쪽지를 찾을 수 없습니다."));
        //보낸이
        Member sender = note.getSender();
        //읽음 처리
        note.updateIsCheck(true);
        noteRepository.save(note);
        //상대방 프로필 표출
        SogaeNoteDetailResponse sogaeNoteDetailResponse = new SogaeNoteDetailResponse().builder()
                .name(sender.getName())
                .height(sender.getMemberDetail().getHeight())
                .birth(Integer.parseInt(sender.getMemberDetail().getBirth()))
                .job(sender.getMemberDetail().getJob())
                .mbti(sender.getMemberDetail().getMbti())
                .introduction(sender.getMemberDetail().getIntroduction())
                .imgPath(SERVER_DOMAIN + "/img/" + sender.getProfilePictures().get(0).getName())
                .build();
        return sogaeNoteDetailResponse;
    }

    //받은 쪽지 리스트
    @Override
    public List<NoteListResponse> receivedNoteList(String userId) throws Exception {
        List<Note> receivedNoteList = noteRepository.findAllByReceiverIdAndIsDeleted(userId, false);
        List<NoteListResponse> noteListResponses = new ArrayList<>();
        for (Note receivedNote : receivedNoteList) {

            NoteListResponse noteListResponse = new NoteListResponse().builder()
                    .id(receivedNote.getId())
                    .receiverId(receivedNote.getReceiver().getId())
                    .receiverName(receivedNote.getReceiver().getName())
                    .senderId(receivedNote.getSender().getId())
                    .senderName(receivedNote.getSender().getName())
                    .subject(receivedNote.getSubject())
                    .content(receivedNote.getContent())
                    .date(localDateTimeToString(receivedNote.getDate()))
                    .isSogae(receivedNote.getIsSogae())
                    .isCheck(receivedNote.getIsCheck())
                    .isReject(receivedNote.getIsReject())
                    .isDeleted(receivedNote.getIsDeleted())
                    .build();

            noteListResponses.add(noteListResponse);
        }
        return noteListResponses;
    }

    //보낸 쪽지 리스트
    @Override
    public List<NoteListResponse> sentNoteList(String userId) throws Exception {
        List<Note> sentNoteList = noteRepository.findAllBySenderId(userId);
        List<NoteListResponse> noteListResponses = new ArrayList<>();
        for (Note sentNote : sentNoteList) {

            NoteListResponse noteListResponse = new NoteListResponse().builder()
                    .id(sentNote.getId())
                    .receiverId(sentNote.getReceiver().getId())
                    .receiverName(sentNote.getReceiver().getName())
                    .senderId(sentNote.getSender().getId())
                    .senderName(sentNote.getSender().getName())
                    .subject(sentNote.getSubject())
                    .content(sentNote.getContent())
                    .date(localDateTimeToString(sentNote.getDate()))
                    .isSogae(sentNote.getIsSogae())
                    .isCheck(sentNote.getIsCheck())
                    .isReject(sentNote.getIsReject())
                    .isDeleted(sentNote.getIsDeleted())
                    .build();
            noteListResponses.add(noteListResponse);
        }
        return noteListResponses;
    }

    //새로운 쪽지 list
    @Override
    public List<NoteListResponse> newNoteList(String userId) throws Exception {
        List<Note> newNoteList = noteRepository.findAllByReceiverIdAndIsCheckAndIsDeleted(userId, false, false);
        List<NoteListResponse> noteListResponses = new ArrayList<>();
        for (Note newNote : newNoteList) {
            NoteListResponse noteListResponse = new NoteListResponse().builder()
                    .id(newNote.getId())
                    .receiverId(newNote.getReceiver().getId())
                    .receiverName(newNote.getReceiver().getName())
                    .senderId(newNote.getSender().getId())
                    .senderName(newNote.getSender().getName())
                    .subject(newNote.getSubject())
                    .content(newNote.getContent())
                    .date(localDateTimeToString(newNote.getDate()))
                    .isSogae(newNote.getIsSogae())
                    .isCheck(newNote.getIsCheck())
                    .isReject(newNote.getIsReject())
                    .isDeleted(newNote.getIsDeleted())
                    .build();
            noteListResponses.add(noteListResponse);
        }
        return noteListResponses;
    }

    //소개팅 쪽지 수락
    @Override
    public void acceptSogating(int noteId) throws Exception {
        Note note = noteRepository.findById(noteId)
                .orElseThrow(() -> new Exception("쪽지가 존재하지 않습니다."));
        //1. 쪽지 상태 update
        note.updateIsCheck(true);
        note.updateIsReject(false);

        Member receiver = note.getReceiver();
        // 보내는이
        Member sender = note.getSender();

        //2. 신청자(sender)한테 소개팅을 수락하셨습니다 쪽지(or 알림) 전송
        // 제목
        String subject = receiver.getName() + "님이 소개팅 신청을 수락하셨습니다.";
        // 날짜
        String msg = note.getContent();
        System.out.println(msg);
        // 정규표현식 패턴
        String pattern = "\\d{4}년 \\d{2}월 \\d{2}일 \\d{2}시 \\d{2}분";
        // 패턴 매칭을 위한 Pattern 객체 생성
        Pattern r = Pattern.compile(pattern);
        // 매칭되는 부분 추출을 위한 Matcher 객체 생성
        Matcher m = r.matcher(msg);
        // 매칭된 부분이 있다면 추출하여 출력
        System.out.println("수락 완료");
        if (m.find()) {
            System.out.println("msgssg");
            String dateTime = m.group();
            // 내용
            String content = receiver.getName() + "님이 " + sender.getName() + "님의 소개팅 신청을 수락하셨습니다.\n"
                    + "D-Day : " + dateTime + "\n 내 스케줄에 일정을 추가합니다.";
            NoteSendRequest noteSendRequest = NoteSendRequest.builder()
                    .receiver(sender.getId())
                    .sender("admin")
                    .subject(subject)
                    .content(content)
                    .build();
            send(noteSendRequest);      //소개팅 신청자한테 쪽지 보내기.

            //3.  스케줄에 추가해주기
            OnlineScheduleRequest onlineScheduleRequest;
            if (sender.getGender().equals("male")) {
                onlineScheduleRequest = OnlineScheduleRequest.builder()
                        .femaleId(receiver.getId())
                        .maleId(sender.getId())
                        .date(dateTime)
                        .url("unknown")
                        .build();
            } else {
                onlineScheduleRequest = OnlineScheduleRequest.builder()
                        .femaleId(sender.getId())
                        .maleId(receiver.getId())
                        .date(dateTime)
                        .url("unknown")
                        .build();
            }

            onlineScheduleService.insertSchedule(onlineScheduleRequest);
            noteRepository.save(note);
        }
    }

    //소개팅 쪽지 거절
    @Override
    public void refuseSogating(int noteId) throws Exception {
        Note note = noteRepository.findById(noteId).orElseThrow(() -> new Exception("쪽지가 존재하지 않습니다."));
        note.updateIsCheck(true);
        note.updateIsReject(true);  //isReject==true 이면 거절

        //신청자한테 소개팅을 거절하셨습니다 쪽지 전송
        // 받는이
        Member receiver = note.getReceiver();
        // 보내는이
        Member sender = note.getSender();
        // 제목
        String subject = receiver.getName() + "님이 소개팅 신청을 거절하셨습니다.";
        // 내용
        String content = receiver.getName() + "님이 소개팅 신청을 거절하셨습니다.";

        NoteSendRequest noteSendRequest = NoteSendRequest.builder()
                .receiver(sender.getId())
                .sender("admin")
                .subject(subject)
                .content(content)
                .build();
        send(noteSendRequest);      //소개팅 신청자한테 쪽지 보내기.

        noteRepository.save(note);
    }

    //현재시간 return
    @Override
    public LocalDateTime setNowTime() {
        //현재시간
        ZoneId koreaZone = ZoneId.of("Asia/Seoul");
        ZonedDateTime koreaTime = ZonedDateTime.now(koreaZone);
        LocalDateTime localDateTime = koreaTime.toLocalDateTime();
        return localDateTime;
    }

    //LocalDateTime->String
    public String localDateTimeToString(LocalDateTime localDateTime) {
        // 형식 지정
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        // LocalDateTime 객체를 "2023-08-07 05:44:20" 형식으로 변환
        String formattedDateTime = localDateTime.format(formatter);
        return formattedDateTime;
    }


}
