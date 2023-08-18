package com.ssafy.manna.schedule.domain;

import com.ssafy.manna.member.domain.Member;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToOne;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@DiscriminatorValue("Offline")
public class OfflineSchedule extends Schedule {

    @OneToOne(fetch = FetchType.LAZY)
    private ReservePlace reserve;

    @Builder
    public OfflineSchedule(Member female, Member male, LocalDateTime date, ReservePlace reserve) {
        super(female, male, date);
        this.reserve = reserve;
    }

}
