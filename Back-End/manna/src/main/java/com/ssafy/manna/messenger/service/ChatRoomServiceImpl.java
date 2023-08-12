package com.ssafy.manna.messenger.service;

import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.repository.MemberRepository;
import com.ssafy.manna.messenger.domain.ChatRoom;
import com.ssafy.manna.messenger.domain.RedisChat;
import com.ssafy.manna.messenger.domain.RedisChatRoom;
import com.ssafy.manna.messenger.dto.request.MakeChattingRoomRequest;
import com.ssafy.manna.messenger.dto.response.ChatHistoryResponse;
import com.ssafy.manna.messenger.dto.response.ChatRoomResponse;
import com.ssafy.manna.messenger.repository.ChatRepository;
import com.ssafy.manna.messenger.repository.ChatRoomRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.ssafy.manna.member.Enums.GenderEnum.GENDER_MALE;
import static com.ssafy.manna.member.Enums.MemberExceptionsEnum.*;

@RequiredArgsConstructor
@Service
public class ChatRoomServiceImpl implements ChatRoomService {

    // Redis
    private static final String CHAT_ROOMS = "CHAT_ROOM";
    private final RedisTemplate<String, Object> redisTemplate;
    private final ChatRoomRepository chatRoomRepository;
    private final MemberRepository memberRepository;
    private final ChatRepository chatRepository;
    private final ModelMapper modelMapper;
    private HashOperations<String, String, RedisChatRoom> opsHashChatRoom;

    @PostConstruct
    private void init() {
        opsHashChatRoom = redisTemplate.opsForHash();
    }

    // 모든 채팅방 조회
    @Override
    public List<RedisChatRoom> findAllRoom() {
        return opsHashChatRoom.values(CHAT_ROOMS);
    }

    // 채팅방 생성 : 서버간 채팅방 공유를 위해 redis hash에 저장한다.
    @Override
    public RedisChatRoom createChatRoom(MakeChattingRoomRequest makeChattingRoomRequest) {
        ChatRoom chatRoom = saveChatRoom(makeChattingRoomRequest);

        RedisChatRoom redisChatRoom = RedisChatRoom.of(chatRoom);

        opsHashChatRoom.put(CHAT_ROOMS, redisChatRoom.getRoomId(), redisChatRoom);
        return redisChatRoom;
    }

    // 아이디에 해당하는 채팅방 정보 리턴
    @Override
    public List<ChatRoomResponse> findChatRoomById(String userId) {
        Member findMember = memberRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException(MEMBER_EXCEPTIONS_NONE_MEMBER.getValue()));

        return getChatRooms(findMember).stream()
                .map(this::chatRoomDtoMapping).toList();
    }

    @Override
    public List<ChatHistoryResponse> findChatHistoryByRoomId(String roomId) {
        RedisChat redisChat = chatRepository.findById(roomId)
                .orElseThrow(() -> new RuntimeException("요청과 일치하는 방이 존재하지 않습니다."));

        return redisChat.getRedisChatHistories().stream()
                .map(redisChatHistory -> modelMapper.map(redisChatHistory, ChatHistoryResponse.class))
                .toList();
    }

    private ChatRoom saveChatRoom(MakeChattingRoomRequest makeChattingRoomRequest) {
        Member female = memberRepository.findById(makeChattingRoomRequest.getFemaleId())
                .orElseThrow(() -> new RuntimeException(MEMBER_EXCEPTIONS_NONE_FEMALE.getValue()));

        Member male = memberRepository.findById(makeChattingRoomRequest.getMaleId())
                .orElseThrow(() -> new RuntimeException(MEMBER_EXCEPTIONS_NONE_MALE.getValue()));

        return chatRoomRepository.save(ChatRoom.of(male, female));
    }

    private ChatRoomResponse chatRoomDtoMapping(ChatRoom chatRoom) {
        return ChatRoomResponse.builder()
                .maleId(chatRoom.getMale().getId())
                .femaleId(chatRoom.getFemale().getId())
                .headMessage(chatRoom.getHeadMessage())
                .name(chatRoom.getName())
                .id(chatRoom.getId())
                .build();
    }

    private List<ChatRoom> getChatRooms(Member findMember) {
        return findMember.getGender().equals(GENDER_MALE.getValue()) ?
                chatRoomRepository.findByMale(findMember)
                : chatRoomRepository.findByFemale(findMember);
    }
}