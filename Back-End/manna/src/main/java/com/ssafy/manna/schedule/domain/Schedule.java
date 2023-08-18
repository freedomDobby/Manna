package com.ssafy.manna.schedule.domain;

import com.ssafy.manna.member.domain.Member;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@DiscriminatorColumn
@Inheritance(strategy = InheritanceType.JOINED)
@AllArgsConstructor
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "female_id")
    private Member female;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "male_id")
    private Member male;

    private LocalDateTime date;

    public Schedule(Member female, Member male, LocalDateTime date) {
        this.female = female;
        this.male = male;
        this.date = date;
    }
}
