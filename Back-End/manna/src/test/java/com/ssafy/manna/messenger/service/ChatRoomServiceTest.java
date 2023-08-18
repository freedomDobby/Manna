package com.ssafy.manna.messenger.service;

import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.repository.MemberRepository;
import com.ssafy.manna.messenger.dto.request.MakeChattingRoomRequest;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ChatRoomServiceTest {

    @Autowired
    private ChatRoomServiceImpl chatRoomServiceImpl;

//    @Test
//    public void 채팅방_정보_테스트(){
//        String femaleId = "sohyun1";
//
//        List<ChatRoomResponse> chatRoomById = chatRoomService.findChatRoomById(femaleId);
//        System.out.println(chatRoomById);
//    }

//    @Test
//    public void 채팅방중복_테스트(){
//        try {
//            chatRoomServiceImpl.createChatRoom(
//                new MakeChattingRoomRequest("test12", "hongykssafy"));
//        } catch (RuntimeException e) {
//            System.out.println(e.getMessage());
//        }
//    }
}