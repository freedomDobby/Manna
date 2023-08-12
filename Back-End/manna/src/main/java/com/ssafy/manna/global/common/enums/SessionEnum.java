package com.ssafy.manna.global.common.enums;

public enum SessionEnum {

    SOCKET_HEADER_USER_NAME("userName"),
    SOCKET_HEADER_USER_ID("userId"),
    SOCKET_HEADER_GENDER("gender"),
    GENDER_MALE("male"),
    GENDER_FEMALE("female");

    private final String value;

    SessionEnum(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

}
