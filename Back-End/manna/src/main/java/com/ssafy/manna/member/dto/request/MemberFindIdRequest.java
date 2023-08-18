package com.ssafy.manna.member.dto.request;

import lombok.Data;

@Data
public class MemberFindIdRequest {
    //이름과 email id로  찾는다
    private String name;
    private String emailId;
    private String emailDomain;
}
