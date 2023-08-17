package com.ssafy.manna.messenger.repository;

import com.ssafy.manna.messenger.domain.Note;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface NoteRepository extends JpaRepository<Note, Integer> {

    //id로 쪽지 조회
    Optional<Note> findById(Integer id);

    //보낸이로 쪽지 조회
    List<Note> findAllBySenderIdAndIsSentDeleted(String SenderId,boolean isSentDeleted);


    //받는 이로 쪽지 조회 +  isDeleted=false인걸로
    List<Note> findAllByReceiverIdAndIsDeleted(String receiverId, boolean isDeleted);

    // 내가 RECEIVER(받는 사람), isCheck=false인거 + isDeleted=false
    List<Note> findAllByReceiverIdAndIsCheckAndIsDeleted(String receiverId, boolean isCheck, boolean isDeleted);


}
