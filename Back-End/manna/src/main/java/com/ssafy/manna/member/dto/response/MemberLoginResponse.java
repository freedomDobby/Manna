package com.ssafy.manna.member.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MemberLoginResponse {

    //로그인 Response
    private String accessToken;     //token
    private String gender;          //성별
    private String id;              //id
    private String name;            //이름

}
