package com.ssafy.manna.messenger.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NoteDetailResponse {
    //받는이 이름
    private String receiverName;
    //받는이 아이디
    private String receiverId;
    //보내는이 이름
    private String senderName;
    //보내는이 아이디
    private String senderId;
    //쪽지 아이디
    private int id;
    //쪽지 제목
    private String subject;
    //쪽지를 보낸시간
    private String date;
    //읽음 여부
    private boolean isCheck;
    //내용
    private String content;
}
