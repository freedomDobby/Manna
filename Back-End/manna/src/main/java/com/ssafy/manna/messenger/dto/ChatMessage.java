package com.ssafy.manna.messenger.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChatMessage {

    private MessageType type; // 메시지 타입
    private String roomId; // 방번호
    private String senderId; // 메시지 보낸사람
    private String senderName;  // 메시지 보낸사람 이름
    private String message; // 메시지
    // 메시지 타입 : 입장, 채팅
    public enum MessageType {
        ENTER, TALK
    }
}