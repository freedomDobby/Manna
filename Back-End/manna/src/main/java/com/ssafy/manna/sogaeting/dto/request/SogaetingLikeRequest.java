package com.ssafy.manna.sogaeting.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SogaetingLikeRequest {

    private String senderId;
    private String receiverId;
}
