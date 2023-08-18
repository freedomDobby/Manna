package com.ssafy.manna.messenger.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChatHistoryResponse {

    private String senderId;
    private String senderName;
    private String message;
    private String time;
}
