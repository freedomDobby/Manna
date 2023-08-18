package com.ssafy.manna.schedule.Enums;

import java.util.TimeZone;

public enum Timezone {

    SEOUL("Asia/Seoul");
    private final String zoneId;

    Timezone(String zoneId){
        this.zoneId = zoneId;
    }

    public String getZoneId(){
        return zoneId;
    }

}
