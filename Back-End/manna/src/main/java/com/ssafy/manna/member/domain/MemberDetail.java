package com.ssafy.manna.member.domain;

import com.ssafy.manna.global.common.domain.Address;
import com.ssafy.manna.global.common.domain.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class MemberDetail extends BaseTimeEntity {

    @Id
    private String id;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "id")
    private Member member;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "member_address_id")
    private Address address;

    private String tel;                 //전화번호
    private String birth;               //생년월일
    private String emailId;             //이메일 아이디
    private String emailDomain;         //이메일 도메인

    private int height;                 //키
    private String job;                 //직업

    private boolean isSmoker;           //흡연여부
    private boolean isDrinker;          //음주
    private String mbti;                //MBTI
    private String religion;            //종교
    private String introduction;        //자기소개
    private boolean isBlockingFriend;   //지인차단 여부
    private int mileage;                //현재마일리지


    // 정보 수정 (비밀번호, 키, 주소, 직업, 프로필 사진)
    public void updateHeight(int height) {
        this.height = height;
    }

    public void updateJob(String job) {
        this.job = job;
    }

    public void updateIsSmoker(boolean isSmoker) {
        this.isSmoker = isSmoker;
    }

    public void updateIsDrinker(boolean isDrinker) {
        this.isDrinker = isDrinker;
    }

    public void updateMbti(String mbti) {
        this.mbti = mbti;
    }

    public void updateReligion(String religion) {
        this.religion = religion;
    }

    public void updateIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public void updateIsBlockingFriend(boolean isBlockingFriend) {
        this.isBlockingFriend = isBlockingFriend;
    }

    public void updateMileage(int mileage) {
        this.mileage = mileage;
    }


}
