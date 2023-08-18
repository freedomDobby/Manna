package com.ssafy.manna.mission.Enums;

public enum MissionResponseMessage {

    MISSION_ASSIGN_SUCCESS("mission assign success"),
    MISSION_ASSIGN_ERROR("mission assign error"),
    MISSION_CALL_SUCCESS("mission call success"),
    MISSION_GIVEUP_SUCCESS("mission giveup success"),
    MISSION_GIVEUP_ERROR("mission giveup error"),
    MISSION_DO_SUCCESS("mission do success"),
    MISSION_DO_ERROR("mission do error"),
    MISSION_FINISH_SUCCESS("mission finish success"),
    MISSION_START_SUCCESS("mission start success"),
    MISSION_NOT_EXISTS("해당하는 미션 정보가 없습니다."),
    MISSION_GET_PARTICIPANT_SUCCESS("mission get participant success"),

    MISSION_GET_DETAIL_SUCCESS("mission get detail success");
    private final String message;


    MissionResponseMessage(String message) {
        this.message = message;
    }

    public String getMessage(){
        return message;
    }
}
