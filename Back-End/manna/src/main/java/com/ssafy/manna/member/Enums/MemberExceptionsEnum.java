package com.ssafy.manna.member.Enums;

public enum MemberExceptionsEnum {

    MEMBER_EXCEPTIONS_NONE_MEMBER("일치하는회원이 없습니다."),
    MEMBER_EXCEPTIONS_NONE_MALE("일치하는 남자 회원이 없습니다."),
    MEMBER_EXCEPTIONS_NONE_FEMALE("일치하는 여자 회원이 없습니다.");


    private final String value;

    MemberExceptionsEnum(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

}
