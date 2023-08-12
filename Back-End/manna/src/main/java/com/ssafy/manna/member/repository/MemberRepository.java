package com.ssafy.manna.member.repository;

import com.ssafy.manna.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, String> {

    Optional<Member> findById(String id);   //id로 조회

    //중복 id 조회
    boolean existsById(String id);

    //이름, email id, email domain 으로 조회

    Optional<Member> findByNameAndMemberDetailEmailIdAndMemberDetailEmailDomain(
            String name, String emailId, String emailDomain
    );

    //이름으로 조회
    Optional<Member> findByName(String receiver);


}