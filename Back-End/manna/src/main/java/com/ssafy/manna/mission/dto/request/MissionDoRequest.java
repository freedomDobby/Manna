package com.ssafy.manna.mission.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
@Builder
@AllArgsConstructor
public class MissionDoRequest {

    private String memberId;
    private int id;
    private String gender;
    //private String path;

}
