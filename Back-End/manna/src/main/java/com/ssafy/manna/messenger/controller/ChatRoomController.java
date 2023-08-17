package com.ssafy.manna.messenger.controller;

import com.ssafy.manna.global.util.ResponseTemplate;
import com.ssafy.manna.messenger.domain.RedisChatRoom;
import com.ssafy.manna.messenger.dto.request.MakeChattingRoomRequest;
import com.ssafy.manna.messenger.dto.response.ChatHistoryResponse;
import com.ssafy.manna.messenger.dto.response.ChatRoomResponse;
import com.ssafy.manna.messenger.service.ChatRoomServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/chat")
public class ChatRoomController {

    private final ChatRoomServiceImpl chatRoomServiceImpl;


    @GetMapping("/rooms")
    public List<RedisChatRoom> room() {
        return chatRoomServiceImpl.findAllRoom();
    }

    // 상대방 아이디와 자신의 아이디가 필요하다.

    @PostMapping("/room")
    public RedisChatRoom createRoom(@RequestBody MakeChattingRoomRequest makeChattingRoomRequest) {
        // 방정보를 리턴한다.
        return chatRoomServiceImpl.createChatRoom(makeChattingRoomRequest);
    }

    @GetMapping("/room/{userId}")
    public ResponseEntity<ResponseTemplate<List<ChatRoomResponse>>> findRoomsById(
            @PathVariable String userId) {

        return new ResponseEntity<>(
                ResponseTemplate.<List<ChatRoomResponse>>builder()
                        .result(true)
                        .msg("채팅방 러오기 성공")
                        .data(chatRoomServiceImpl.findChatRoomById(userId))
                        .build(),
                HttpStatus.OK
        );
    }

    @GetMapping("/{roomId}")
    public ResponseEntity<ResponseTemplate<List<ChatHistoryResponse>>> getChatHistory(
            @PathVariable String roomId) {

        return new ResponseEntity<>(
                ResponseTemplate.<List<ChatHistoryResponse>>builder()
                        .result(true)
                        .msg("채팅기록 불러오기 성공")
                        .data(chatRoomServiceImpl.findChatHistoryByRoomId(roomId))
                        .build(),
                HttpStatus.OK
        );
    }
}