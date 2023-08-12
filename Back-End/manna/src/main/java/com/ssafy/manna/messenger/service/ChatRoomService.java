package com.ssafy.manna.messenger.service;

import com.ssafy.manna.messenger.domain.RedisChatRoom;
import com.ssafy.manna.messenger.dto.request.MakeChattingRoomRequest;
import com.ssafy.manna.messenger.dto.response.ChatHistoryResponse;
import com.ssafy.manna.messenger.dto.response.ChatRoomResponse;

import java.util.List;

public interface ChatRoomService {

    List<RedisChatRoom> findAllRoom();

    RedisChatRoom createChatRoom(MakeChattingRoomRequest makeChattingRoomRequest);

    List<ChatRoomResponse> findChatRoomById(String userId);

    List<ChatHistoryResponse> findChatHistoryByRoomId(String roomId);

}
