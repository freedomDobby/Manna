package com.ssafy.manna.sogaeting.domain;

import com.ssafy.manna.global.common.domain.BaseStartEndEntity;
import com.ssafy.manna.member.domain.Member;
import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Builder
@AllArgsConstructor
public class Sogaeting extends BaseStartEndEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member female;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member male;

    private Boolean isSuccess;

    public void updateIsSuccess(boolean isSuccess) {
        this.isSuccess = isSuccess;
    }
}
