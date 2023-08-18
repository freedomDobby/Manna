package com.ssafy.manna.meeting.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MeetingMakeRoomRequest {

    private String name;
    private String host;
    private String game;
    private Boolean isOpenProfile;
    private int level;

}
