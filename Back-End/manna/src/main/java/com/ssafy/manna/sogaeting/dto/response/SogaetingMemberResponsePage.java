package com.ssafy.manna.sogaeting.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class SogaetingMemberResponsePage {

    int curPage;
    int totalPage;
    List<ImageMappedSogaetingMemberResponse> sogaetingMembers;
}
