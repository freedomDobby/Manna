package com.ssafy.manna.messenger.controller;

import com.ssafy.manna.messenger.dto.ChatMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

@RequiredArgsConstructor
@Controller
public class ChatController {

    private final RedisTemplate<String, Object> redisTemplate;
    private final ChannelTopic channelTopic;


    /**
     * websocket "/pub/chat/message"로 들어오는 메시징을 처리한다.
     */
//    @MessageMapping("/chat/message")
//    public void message(ChatMessage message, @Header("token") String token) {
//        // 채팅방 입장시에는 대화명과 메시지를 자동으로 세팅한다.
//        if (ChatMessage.MessageType.ENTER.equals(message.getType())) {
//            message.setSender("[알림]");
//            message.setMessage(message.getSender() + "님이 입장하셨습니다.");
//        }
//        // Websocket에 발행된 메시지를 redis로 발행(publish)
//        redisTemplate.convertAndSend(channelTopic.getTopic(), message);
//    }
    @MessageMapping("/chat/message")
    public void message(ChatMessage message) {
        // 채팅방 입장시에는 대화명과 메시지를 자동으로 세팅한다.
        if (ChatMessage.MessageType.ENTER.equals(message.getType())) {
            message.setSenderName("[알림]");
            message.setMessage(message.getSenderName() + "님이 입장하셨습니다.");
        }
        // Websocket에 발행된 메시지를 redis로 발행(publish)
        redisTemplate.convertAndSend(channelTopic.getTopic(), message);
    }

}
