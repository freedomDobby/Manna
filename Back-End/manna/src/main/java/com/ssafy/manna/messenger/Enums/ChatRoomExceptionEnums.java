package com.ssafy.manna.messenger.Enums;

public enum ChatRoomExceptionEnums {
    CHAT_ROOM_DUPLICATE_EXCEPTION("ChatRoomDuplicateException");

    private final String value;
    ChatRoomExceptionEnums(String value){
        this.value=value;
    }

    public String getValue(){return value;}

}
