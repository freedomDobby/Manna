package com.ssafy.manna.meeting.domain;

import com.ssafy.manna.global.common.domain.BaseCreateOnlyEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class GameLoveStick extends BaseCreateOnlyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Meeting meeting;

    private String receiver;
    private String sender;


}
