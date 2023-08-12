package com.ssafy.manna.messenger.domain;

import com.ssafy.manna.messenger.dto.ChatMessage;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.io.Serializable;
import java.time.LocalDateTime;

@Builder
@Getter
@AllArgsConstructor
@ToString
public class RedisChatHistory implements Serializable {
    private String senderId;
    private String senderName;
    private String message;
    private LocalDateTime time;

    public static RedisChatHistory of(ChatMessage roomMessage) {
        return RedisChatHistory.builder()
                .message(roomMessage.getMessage())
                .senderId(roomMessage.getSenderId())
                .senderName(roomMessage.getSenderName())
                .time(LocalDateTime.now())
                .build();
    }
}
