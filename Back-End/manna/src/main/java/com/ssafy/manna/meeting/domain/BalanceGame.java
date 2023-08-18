package com.ssafy.manna.meeting.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BalanceGame {

    @Id
    private String question;

    private Integer level;

}
