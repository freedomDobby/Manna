package com.ssafy.manna.sogaeting.dto.response;

import com.ssafy.manna.member.domain.Member;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SogaetingInfoResponse {

    private int id;
    private String femaleId;
    private String maleId;
    private Boolean isSuccess;

}
