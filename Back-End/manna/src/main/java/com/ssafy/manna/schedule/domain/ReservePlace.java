package com.ssafy.manna.schedule.domain;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@DiscriminatorValue("Reserve")
@Builder
@AllArgsConstructor
@Getter
public class ReservePlace {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String sido;
    private String gugun;
    private String detail;
    private String category;
    private Double latitude;
    private Double longitude;


}
