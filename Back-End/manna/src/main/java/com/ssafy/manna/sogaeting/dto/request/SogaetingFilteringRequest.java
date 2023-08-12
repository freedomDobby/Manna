package com.ssafy.manna.sogaeting.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SogaetingFilteringRequest {

    private String memberId;
    private String gender;
    private String mbti;
    private String religion;
    @JsonProperty("isDrinker")
    private Boolean isDrinker;
    @JsonProperty("isSmoker")
    private Boolean isSmoker;
    private Integer curPage;
}
