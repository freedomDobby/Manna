package com.ssafy.manna.member.dto.request;

import com.ssafy.manna.global.common.dto.ProfilePictureDto;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberUpdateRequest {

    //마이페이지 - 수정 Request
    // 이름
    private String name;
    // 키
    private Integer height;
    // 직업
    private String job;
    // 지인차단여부
    private Boolean isBlockingFriend;
    // 흡연
    private Boolean isSmoker;
    // 음주
    private Boolean isDrinker;
    // 종교
    private String religion;
    // mbti
    private String mbti;
    // 프로필사진
    private List<ProfilePictureDto> profilePictures;
    // 자기소개
    private String introduction;
    // 마일리지
    private Integer mileage;

    //주소
    private String sido;
    private String gugun;
    private String detail;
    private Double latitude;
    private Double longitude;

}
