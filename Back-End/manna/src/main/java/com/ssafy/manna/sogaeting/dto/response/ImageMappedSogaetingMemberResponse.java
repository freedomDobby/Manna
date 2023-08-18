package com.ssafy.manna.sogaeting.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
public class ImageMappedSogaetingMemberResponse {

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
    @JsonProperty("isOnline")
    private Boolean isOnline;
    private Integer height;
    private List<String> pictureURLs = new ArrayList<>();

    public void updateOnlineState(Boolean onlineState) {
        this.isOnline = onlineState;
    }

    public void updateBirthUnit() {
        int age = LocalDate.now().getYear() - Integer.parseInt(birth);
        this.birth = Integer.toString(age);
    }
}
