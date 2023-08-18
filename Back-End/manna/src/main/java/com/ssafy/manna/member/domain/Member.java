package com.ssafy.manna.member.domain;

import com.ssafy.manna.global.auth.dto.LoginResponse;
import com.ssafy.manna.global.common.domain.BaseTimeEntity;
import com.ssafy.manna.member.Enums.UserRole;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

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
    @OneToOne(mappedBy = "member", fetch = FetchType.LAZY)
    private MemberDetail memberDetail;

    //프로필 사진 매핑
    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY)
    private List<ProfilePicture> profilePictures;

    public void passwordEncode(PasswordEncoder passwordEncoder) {
        this.pwd = passwordEncoder.encode(this.pwd);
    }

    // 정보 수정 (비밀번호, 키, 주소, 직업, 프로필 사진)
    //1. 비밀번호 수정
    public void updatePassword(PasswordEncoder passwordEncoder, String pwd) {
        this.pwd = passwordEncoder.encode(pwd);
    }

    public void updateProfilePicture(List<ProfilePicture> profilePictures) {
        this.profilePictures = profilePictures;
    }


    public void updateRole(String role) {
        this.role = UserRole.valueOf(role);
    }

    public LoginResponse makeLoginResponse(String accessToken, String refreshToken) {
        return LoginResponse.builder()
                .gender(gender)
                .userName(name)
                .id(id)
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }
}
