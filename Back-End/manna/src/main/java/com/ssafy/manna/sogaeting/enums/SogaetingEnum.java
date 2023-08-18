package com.ssafy.manna.sogaeting.enums;

public enum SogaetingEnum {

    NUM_IMAGE(3);


    private final Integer value;

    SogaetingEnum(Integer value) {
        this.value = value;
    }

    public Integer getValue() {
        return value;
    }
}
