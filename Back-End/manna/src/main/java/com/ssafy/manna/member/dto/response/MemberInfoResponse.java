package com.ssafy.manna.member.dto.response;

import com.ssafy.manna.global.common.dto.ProfilePictureDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberInfoResponse {
    //마이페이지 - 조회 Response

    // 이름
    private String name;
    // 키
    private int height;

    // 직업
    private String job;
    // 지인차단여부
    private boolean isBlockingFriend;
    // 흡연
    private boolean isSmoker;
    // 음주
    private boolean isDrinker;
    // 종교
    private String religion;
    // mbti
    private String mbti;
    // 프로필사진
    private List<ProfilePictureDto> profilePictures;
    // 자기소개
    private String introduction;
    // 마일리지
    private int mileage;
    // 나이
    private int age;
    private String sido;
    private String gugun;
    private String detailAddress;
}
