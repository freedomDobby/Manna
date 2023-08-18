package com.ssafy.manna.sogaeting.domain;

import com.ssafy.manna.global.common.domain.BaseCreateOnlyEntity;
import com.ssafy.manna.member.domain.Member;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SogaetingContinue extends BaseCreateOnlyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    private Sogaeting sogaeting;

    private LocalDateTime extendDate;

}
