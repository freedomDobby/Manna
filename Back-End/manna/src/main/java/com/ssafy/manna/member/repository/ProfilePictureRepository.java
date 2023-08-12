package com.ssafy.manna.member.repository;

import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.domain.ProfilePicture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProfilePictureRepository extends JpaRepository<ProfilePicture, Integer> {
    Optional<ProfilePicture> findById(Integer id);

    //사진 수정 시 member_id,prioriy 로 찾기
    Optional<ProfilePicture> findByMemberAndPriority(Member member, int priority);
}
