package com.ssafy.manna.global.handler;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.manna.global.auth.jwt.JwtService;
import com.ssafy.manna.messenger.domain.RedisChat;
import com.ssafy.manna.messenger.domain.RedisChatHistory;
import com.ssafy.manna.messenger.dto.ChatMessage;
import com.ssafy.manna.messenger.repository.ChatRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Slf4j
@RequiredArgsConstructor
@Component
public class StompHandler implements ChannelInterceptor {

    private final JwtService jwtService;
    private final ObjectMapper objectMapper;
    private final RedisTemplate redisTemplate;
    private final ChatRepository chatRepository;


    // websocket을 통해 들어온 요청이 처리 되기전 실행된다.
    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        try {
            ChatMessage chatMessage = encodeChatMessaeg(message);

            RedisChat redisChat = chatRepository.findById(chatMessage.getRoomId()).orElse(
                    new RedisChat(chatMessage.getRoomId(), new ArrayList<>()));

            redisChat.getRedisChatHistories().add(RedisChatHistory.of(chatMessage));
            chatRepository.save(redisChat);
        } catch (Exception e) {
            log.info("새로운 구독 확인");
        }

//        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
//        // websocket 연결시 헤더의 jwt token 검증
//        if (StompCommand.CONNECT == accessor.getCommand()) {
//            jwtService.isTokenValid(accessor.getFirstNativeHeader("token"));
//        }
        return message;
    }

    private ChatMessage encodeChatMessaeg(Message<?> message) throws JsonProcessingException {
        String publishMessage = (String) redisTemplate.getStringSerializer()
                .deserialize((byte[]) message.getPayload());

        return objectMapper.readValue(publishMessage, ChatMessage.class);
    }
}