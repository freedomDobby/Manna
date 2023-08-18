package com.ssafy.manna.member.domain;

import com.ssafy.manna.global.common.domain.BaseCreateOnlyEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MileageHistory extends BaseCreateOnlyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

    private Integer cost;

    private String list;

}
