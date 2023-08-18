package com.ssafy.manna.member.domain;

import com.ssafy.manna.global.common.domain.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ProfilePicture extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;
    private String path;
    private String name;
    private int priority;

    //프로필 사진 변경
    public void updatePath(String path) {
        this.path = path;
    }

    public void updateName(String name) {
        this.name = name;
    }

    public void updatePriority(int priority) {
        this.priority = priority;
    }
}
