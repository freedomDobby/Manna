package com.ssafy.manna.member.domain;

import com.ssafy.manna.member.Enums.UserRole;
import com.ssafy.manna.global.common.domain.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
//import org.springframework.security.crypto.password.PasswordEncoder;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Member extends BaseTimeEntity {

    @Id
    private String id;      //사용자 아이디(PK)
    private String pwd;     //사용자 비밀번호
    private String name;    //사용자 이름
    private String gender;  //성별
    @Enumerated(EnumType.STRING)
    private UserRole role;      //ROLE

    //회원 정보 매핑
    @OneToOne(mappedBy = "member", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private MemberDetail memberDetail;

    //프로필 사진 매핑
    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private List<ProfilePicture> profilePicture;



    // 정보 수정 (비밀번호, 키, 주소, 직업, 프로필 사진)
    //1. 비밀번호 수정
//    public void changePassword(PasswordEncoder passwordEncoder,String pwd){
//        this.pwd = passwordEncoder.encode(pwd);
//    }

    //비밀번호 수정
    public void updatePassword(String pwd){
        this.pwd = pwd;
    }



}
