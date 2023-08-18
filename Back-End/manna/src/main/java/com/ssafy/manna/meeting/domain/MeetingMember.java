package com.ssafy.manna.meeting.domain;

import com.ssafy.manna.member.domain.Member;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MeetingMember {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Meeting meeting;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

}
