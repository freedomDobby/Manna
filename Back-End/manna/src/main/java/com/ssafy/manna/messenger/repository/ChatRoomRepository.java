package com.ssafy.manna.messenger.repository;

import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.messenger.domain.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatRoomRepository extends JpaRepository<ChatRoom, Integer> {

    List<ChatRoom> findByFemale(Member female);

    List<ChatRoom> findByMale(Member male);

}
