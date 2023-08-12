package com.ssafy.manna.member.domain;

import com.ssafy.manna.global.common.domain.BaseCreateOnlyEntity;
import com.ssafy.manna.member.Enums.BanCode;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
public class Ban extends BaseCreateOnlyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member opponent;

    private String context;

    @Enumerated(EnumType.STRING)
    private BanCode code;


}
