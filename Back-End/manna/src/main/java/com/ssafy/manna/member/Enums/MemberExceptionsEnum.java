package com.ssafy.manna.member.Enums;

public enum MemberExceptionsEnum {

    MEMBER_EXCEPTIONS_NONE_MEMBER("일치하는 회원이 없습니다."),
    MEMBER_EXCEPTIONS_NONE_MALE("일치하는 남자 회원이 없습니다."),
    MEMBER_EXCEPTIONS_NONE_FEMALE("일치하는 여자 회원이 없습니다."),
    MEMBER_EXCEPTIONS_EXIST_MEMBER("존재하는 회원입니다."),
    MEMBER_EXCEPTIONS_WRONG_PASSWORD("비밀번호가 틀렸습니다."),
    MEMBER_EXCEPTIONS_WRONG_INFO("가입한 정보가 없습니다. 다시 입력해주세요.");



    private final String value;

    MemberExceptionsEnum(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

}
