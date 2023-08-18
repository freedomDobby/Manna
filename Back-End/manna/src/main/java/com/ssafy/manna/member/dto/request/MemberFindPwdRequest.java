package com.ssafy.manna.member.dto.request;

import lombok.Data;

@Data
public class MemberFindPwdRequest {
    //id랑 email 로 비밀번호 찾기
    private String id;
    private String emailId;
    private String emailDomain;
}
