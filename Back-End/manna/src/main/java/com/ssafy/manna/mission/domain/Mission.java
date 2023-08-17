package com.ssafy.manna.mission.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.manna.global.common.domain.BaseStartEndEntity;
import com.ssafy.manna.sogaeting.domain.Sogaeting;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Builder
@AllArgsConstructor
public class Mission extends BaseStartEndEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne(fetch = FetchType.LAZY)
    private Sogaeting sogaeting;

    @JsonProperty("isSucess")
    private Boolean isSuccess;

    @JsonProperty("isDone")
    private Boolean isDone;

    private String maleId;

    private String femaleId;

    @OneToMany(mappedBy = "mission", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<MissionQuestion> missionQuestions;

    public void updateIsDone(boolean isDone) {
        this.isDone = isDone;
    }
}
