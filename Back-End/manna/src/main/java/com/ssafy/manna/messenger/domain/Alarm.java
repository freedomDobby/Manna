package com.ssafy.manna.messenger.domain;

import com.ssafy.manna.global.common.domain.BaseCreateOnlyEntity;
import com.ssafy.manna.member.Enums.AlarmCode;
import com.ssafy.manna.member.domain.Member;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Alarm extends BaseCreateOnlyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member receiver;

    private String content;

    @Enumerated(EnumType.STRING)
    private AlarmCode code;


}
