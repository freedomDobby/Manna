package com.ssafy.manna.schedule.Enums;

public enum DateTimeFormat {
    KST("yyyy년 MM월 dd일 HH시 mm분"),
    KST_TO_LOCAL("yyyy-MM-dd HH:mm:ss");
    private final String value;
    DateTimeFormat(String value){
        this.value = value;
    }
    public String getValue(){
        return value;
    }
}
