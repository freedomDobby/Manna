package com.ssafy.manna.meeting.domain;

import com.ssafy.manna.global.common.domain.BaseStartEndEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Meeting extends BaseStartEndEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String host;
    private String game;
    private Boolean isOpenProfile;
    private Integer level;


}
