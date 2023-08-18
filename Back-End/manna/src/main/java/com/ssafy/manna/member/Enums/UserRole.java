package com.ssafy.manna.member.Enums;

public enum UserRole {
    USER("USER"),           //회원
    ADMIN("admin"),          //관리자
    BANNED("BANNED"),         //차단된 회원
    DELETED("DELETED");         //탈퇴한 회원

    private final String value;

    UserRole(String value){this.value = value;}
    public String getVale(){return value;}

}
