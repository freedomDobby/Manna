package com.ssafy.manna.sogaeting.dto.request;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class SogaetingSuccessRequest {

    private String maleId;
    private String femaleId;
}
