package com.ssafy.manna.messenger.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatRoomResponse {

    private Integer id;
    private String maleId;
    private String femaleId;
    private String name;
    private String headMessage;
}
