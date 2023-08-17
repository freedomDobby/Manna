package com.ssafy.manna.sogaeting.enums;

public enum SogaetingResponseMessage {


    SOGAETING_REPORT_SUCCESS("report success"),
    SOGAETING_REPORT_ERROR("report error"),

    SOGAETING_LIKE_SUCCESS("like success"),
    SOGAETING_LIKE_ERROR("like error"),
    SOGAETING_RECOMMEND_SUCCESS("recommend success"),
    SOGAETING_RECOMMEND_ERROR("recommend error"),
    SOGAETING_START_SUCCESS("start success"),
    SOGAETING_START_ERROR("start error"),
    SOGAETING_SUCCESS_SUCCESS("sogaeting success success"),
    SOGAETING_SUCCESS_ERROR("sogaeting success error"),
    SOGAETING_CHATRECOMMEND_SUCCESS("chat recommend success"),
    SOGAETING_RECOMMENDLOCATE_SUCCESS("recommend locate success"),
    SOGAETING_ONLINERECOMMEND_SUCCESS("online recommend success"),
    SOGAETING_ONLINERECOMMENDLOCATE_SUCCESS("online recommend locate success"),
    SOGAETING_INFO_SUCCESS("info success");


    private final String message;

    SogaetingResponseMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
