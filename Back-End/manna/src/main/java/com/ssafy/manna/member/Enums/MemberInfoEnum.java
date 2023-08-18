package com.ssafy.manna.member.Enums;

public enum MemberInfoEnum {

    MEMBER_INFO_ENUM_PASSWORD_TITLE("맞나만나 임시비밀번호 안내 이메일 입니다."),
    MEMBER_INFO_ENUM_PASSWORD_MESSAGE_ONE("안녕하세요. 맞나만나 임시비밀번호 안내 관련 이메일입니다.\n 회원님의 임시 비밀번호는 "),
    MEMBER_INFO_ENUM_PASSWORD_MESSAGE_TWO("입니다. \n 로그인 후에 비밀번호를 변경해주세요."),
    DIRECTORY_SUCCESS_MESSAGE("디렉토리 생성 성공"),
    DIRECTORY_FAIL_MESSAGE("디렉토리 생성 실패"),
    PROFILE_PICTURE_SAVE_SUCCESS("파일 저장 성공! filePath : "),
    JOIN_SUCCESS_MESSAGE("회원가입이 완료되었습니다."),
    JOIN_FAIL_MESSAGE("회원가입에 실패했습니다."),
    WITHDRAWAL_SUCCESS_MESSAGE("회원 탈퇴가 완료되었습니다."),
    WRONG_PASSWORD_MESSAGE("비밀번호가 틀렸습니다. 다시 입력해주세요."),
    MEMBER_SEARCH_SUCCESS("회원 조회가 완료되었습니다."),
    MEMBER_SEARCH_FAIL("회원 조회에 실패했습니다."),
    MEMBER_MODIFY_SUCCESS("정보 수정이 완료되었습니다."),
    MEMBER_MODIFY_FAIL("정보 수정에 실패했습니다."),
    MEMBER_TEMP_PASSWORD_MESSAGE("임시비밀번호 발송이 완료되었습니다."),
    MEMBER_CHECK_PASSWORD_SUCCESS("비밀번호 확인이 완료되었습니다."),

    MEMBER_PASSWORD_MODIFY_SUCCESS("비밀번호 변경이 완료되었습니다."),
    MEMBER_PASSWORD_MODIFY_FAIL("비밀번호 변경에 실패했습니다."),
    PROFILE_PICTURE_NOT_EXIST("사진 정보가 없습니다."),
    PROFILE_PICTURE_SAVE_FAIL("사진 저장에 실패했습닌다.");


    private final String value;





    MemberInfoEnum(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
