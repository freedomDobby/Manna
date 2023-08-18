package com.ssafy.manna.member.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberCheckPwdRequest {
    private String id;
    private String pwd;
}
