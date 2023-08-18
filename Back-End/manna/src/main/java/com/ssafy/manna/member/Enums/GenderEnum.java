package com.ssafy.manna.member.Enums;

public enum GenderEnum {
    GENDER_MALE("male"),
    GENDER_FEMALE("female");

    private final String value;

    GenderEnum(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
