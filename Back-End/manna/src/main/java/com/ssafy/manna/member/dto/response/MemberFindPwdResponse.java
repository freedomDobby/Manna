package com.ssafy.manna.member.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MemberFindPwdResponse {
    //비밀번호 찾기 Response
    private String pwd;
}
