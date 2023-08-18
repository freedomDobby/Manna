package com.ssafy.manna.messenger.service;

import com.ssafy.manna.messenger.dto.request.NoteSendRequest;
import com.ssafy.manna.messenger.dto.request.SogaeNoteSendRequest;
import com.ssafy.manna.messenger.dto.response.NoteDetailResponse;
import com.ssafy.manna.messenger.dto.response.NoteListResponse;
import com.ssafy.manna.messenger.dto.response.SogaeNoteDetailResponse;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public interface NoteService {

    //쪽지 전송하기(일반 쪽지)
    void send(NoteSendRequest noteSendRequest);

    //소개팅 쪽지 전송하기
    void sendSogaeNote(SogaeNoteSendRequest sogaeNoteSendRequest);

    //쪽지 삭제하기 - 받은쪽지, 보낸 쪽지
    void deleteNote(int id,String userId);

    //쪽지 내용 보기 (읽기처리)
    //1. 소개팅 쪽지면 소개팅 Response
    //2. 소개팅 쪽지 아니면 일반 Response
    NoteDetailResponse readDetailNote(int id);

    SogaeNoteDetailResponse readSogaeDetailNote(int id);

    //받은 쪽지 List 반환
    List<NoteListResponse> receivedNoteList(String userId);

    //보낸 쪽지 List 반환
    List<NoteListResponse> sentNoteList(String userId);

    //새로운 쪽지 LIST 반환
    List<NoteListResponse> newNoteList(String userId);

    //소개팅 쪽지 수락
    void acceptSogating(int noteId);

    //소개팅 쪽지 거절
    void refuseSogating(int noteId);

    LocalDateTime setNowTime();

}
