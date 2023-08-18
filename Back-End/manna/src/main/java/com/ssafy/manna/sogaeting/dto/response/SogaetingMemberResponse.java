package com.ssafy.manna.sogaeting.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;

@Data
public class SogaetingMemberResponse {

    private String id;
    private String name;
    private String birth;
    private String sido;
    private String mbti;
    private String religion;
    private String introduction;
    @JsonProperty("isSmoke")
    private Boolean isSmoke;
    @JsonProperty("isDrink")
    private Boolean isDrink;
    private Integer height;
    private String pictureURL;

    @QueryProjection

    public SogaetingMemberResponse(String id, String name, String birth, String sido, String mbti,
                                   String religion, String introduction, Boolean isSmoke, Boolean isDrink, Integer height,
                                   String pictureURL) {
        this.id = id;
        this.name = name;
        this.birth = birth;
        this.sido = sido;
        this.mbti = mbti;
        this.religion = religion;
        this.introduction = introduction;
        this.isSmoke = isSmoke;
        this.isDrink = isDrink;
        this.height = height;
        this.pictureURL = pictureURL;
    }
}
