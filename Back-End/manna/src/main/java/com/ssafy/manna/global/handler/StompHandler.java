package com.ssafy.manna.global.handler;

import static com.ssafy.manna.global.common.enums.SessionEnum.SOCKET_HEADER_GENDER;
import static com.ssafy.manna.global.common.enums.SessionEnum.SOCKET_HEADER_USER_ID;
import static com.ssafy.manna.global.common.enums.SessionEnum.SOCKET_HEADER_USER_NAME;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.manna.global.auth.jwt.JwtService;
import com.ssafy.manna.global.common.domain.Session;
import com.ssafy.manna.global.common.repository.RedisSessionRepository;
import com.ssafy.manna.messenger.domain.RedisChat;
import com.ssafy.manna.messenger.domain.RedisChatHistory;
import com.ssafy.manna.messenger.dto.ChatMessage;
import com.ssafy.manna.messenger.repository.ChatRepository;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
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
    private final RedisSessionRepository redisSessionRepository;



    // websocket을 통해 들어온 요청이 처리 되기전 실행된다.
    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor header = StompHeaderAccessor.wrap(message);
        try {
            if (StompCommand.CONNECT.equals(header.getCommand())) {
                log.info("헤더 정보 " + header.toString());

                String userName = header.getNativeHeader(SOCKET_HEADER_USER_NAME.getValue())
                    .get(0);
                String gender = header.getNativeHeader(SOCKET_HEADER_GENDER.getValue()).get(0);
                String userId = header.getNativeHeader(SOCKET_HEADER_USER_ID.getValue()).get(0);
                header.getSessionAttributes().put(SOCKET_HEADER_USER_ID.getValue(), userId);

                saveSession(userName, gender, userId);
                log.info("saveSession");

//          혹시 한글 안나오면 이거 주석 해제  하세요
//            header.setNativeHeader("Content-Type", MimeTypeUtils.APPLICATION_JSON_VALUE);
//            header.setNativeHeader("charset", StandardCharsets.UTF_8.name());
            }
        } catch (Exception e) {
            log.info("세션 과정 오류 발생");
        }

        try {
            ChatMessage chatMessage = encodeChatMessaege(message);
            log.info("TALK메시지 수신 " + chatMessage.getSenderId() + " : " + chatMessage.getRoomId());

            RedisChat redisChat = chatRepository.findById(chatMessage.getRoomId()).orElse(
                    new RedisChat(chatMessage.getRoomId(), new ArrayList<>()));

            redisChat.getRedisChatHistories().add(RedisChatHistory.of(chatMessage));
            chatRepository.save(redisChat);
        } catch (Exception e) {
            log.info("새로운 Socket 커넥션 확인");
        }

//        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
//        // websocket 연결시 헤더의 jwt token 검증
//        if (StompCommand.CONNECT == accessor.getCommand()) {
//            jwtService.isTokenValid(accessor.getFirstNativeHeader("token"));
//        }
        return message;
    }

    private ChatMessage encodeChatMessaege(Message<?> message) throws JsonProcessingException {
        String publishMessage = (String) redisTemplate.getStringSerializer()
                .deserialize((byte[]) message.getPayload());

        return objectMapper.readValue(publishMessage, ChatMessage.class);
    }

    private void saveSession(String userName, String gender, String userId) {
        Session socketSession = Session.builder()
            .gender(gender)
            .userId(userId)
            .userName(userName)
            .offset((int) (Math.random() * 30) + 1)
            .build();
        redisSessionRepository.save(socketSession);
    }

}