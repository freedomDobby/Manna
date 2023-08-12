package com.ssafy.manna.schedule.domain;

import com.ssafy.manna.member.domain.Member;
import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@DiscriminatorValue("Online")
public class OnlineSchedule extends Schedule {
    @Column(name = "url")
    private String url;

    @Builder
    public OnlineSchedule(Member female, Member male, LocalDateTime date, String url) {
        super(female, male, date);
        this.url = url;
    }
}
