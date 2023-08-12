package com.ssafy.manna.messenger.domain;

import com.ssafy.manna.global.common.domain.BaseTimeEntity;
import com.ssafy.manna.member.domain.Member;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChatRoom extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "male_id")
    private Member male;

    @ManyToOne
    @JoinColumn(name = "female_id")
    private Member female;

    private String name;
    private String headMessage;

    public static ChatRoom of(Member male, Member female) {
        return ChatRoom.builder()
                .male(male)
                .female(female)
                .name(male.getName() + " 🩷 " + female.getName())
                .headMessage(male.getName() + " 님과 " + female.getName() + " 님의 채팅방입니다.")
                .build();
    }
}
