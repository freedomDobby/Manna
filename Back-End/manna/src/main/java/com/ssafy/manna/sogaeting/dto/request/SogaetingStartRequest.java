package com.ssafy.manna.sogaeting.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SogaetingStartRequest {

    private String femaleId;
    private String maleId;
}
