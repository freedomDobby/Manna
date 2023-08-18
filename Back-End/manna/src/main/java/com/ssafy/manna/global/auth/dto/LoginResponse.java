package com.ssafy.manna.global.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LoginResponse {

    private String id;
    private String accessToken;
    private String refreshToken;
    private String userName;
    private String gender;
}
