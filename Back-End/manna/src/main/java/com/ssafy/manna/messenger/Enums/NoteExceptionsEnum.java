package com.ssafy.manna.messenger.Enums;

public enum NoteExceptionsEnum {

    NOTE_SEND_ERROR("쪽지 전송에 실패했습니다."),
    NOTE_SEND_SUCCESS("쪽지 전송에 성공했습니다."),
    NOTE_SOGAE_SEND_SUCCESS("소개팅 쪽지 전송에 성공했습니다."),
    NOTE_SOGAE_SEND_ERROR("소개팅 쪽지 전송에 실패했습니다."),
    NOTE_DELETE_SUCCESS("쪽지 삭제에 성공했습니다."),
    NOTE_DELETE_ERROR("쪽지 삭제에 실패했습니다."),
    SOGAE_DECLINE_MESSAGE("소개팅을 거절하셨습니다."),
    SOGAE_ACCEPT_MESSAGE("소개팅을 수락하셨습니다."),
    NOTE_RECEIVER_ERROR("받는 회원 정보가 없습니다."),
    NOTE_SENDER_ERROR("보내는 회원 정보가 없습니다."),
    NOTE_EXIST_ERROR("쪽지가 존재하지 않습니다."),
    NOTE_USER_NOT_EXIST("회원 정보가 존재하지 않습니다."),
    SOGAE_NOTE_FROM_MSG("님이 소개팅 신청을 하셨습니다."),
    SOGAE_NOTE_TO_MSG("님께 소개팅 신청을 하셨습니다.\n"),
    DATE_FORMAT("D-Day: %s"),
    SOGAE_NOTE_REQUEST("%s님이 %s님께 소개팅 신청을 하셨습니다.\n D-Day : %s"),
    SOGAE_NOTE_ACCEPT("%s님이 소개팅 신청을 수락하셨습니다."),
    SOGAE_NOTE_REFUSE("%s님이 소개팅 신청을 거절하셨습니다."),
    NEW_NOTE_NOT_EXIST("새로운 쪽지가 없습니다."),

    NEW_NOTE_SUCCESS("새로운 쪽지 조회에 성공했습니다."),
    SOGAE_NOTE_ACCEPT_CONTENT("%s님이 %s님의 소개팅 신청을 수락하셨습니다.\n D-Day : %s \n 내 스케줄에 일정을 추가합니다."),
    RECEIVED_NOTE_SUCCESS("받은 쪽지함 조회에 성공했습니다."),
    SENT_NOTE_SUCCESS("보낸 쪽지함 조회에 성공했습니다."),
    SOGAE_DATE_PATTERN("\\d{4}년 \\d{2}월 \\d{2}일 \\d{2}시 \\d{2}분");
    private final String value;


    NoteExceptionsEnum(String value){
        this.value=value;
    }

    public String getValue(){return value;}
}
