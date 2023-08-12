package com.ssafy.manna.messenger.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SogaeNoteDetailResponse {
    //소개팅 신청한 사람 프로필 정보 표출
    private String name;
    private int height;
    private int birth;
    private String job;
    private String mbti;
    private String introduction;
    //이미지 이름
    private String imgPath;

}
