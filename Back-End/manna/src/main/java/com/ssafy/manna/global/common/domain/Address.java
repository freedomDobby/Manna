package com.ssafy.manna.global.common.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn
@Getter
@Builder
@AllArgsConstructor
public class Address extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String sido;
    private String gugun;
    private String detail;
    private Double latitude;
    private Double longitude;

    public Address(String sido, String gugun, String detail, Double latitude, Double longitude) {
        this.sido = sido;
        this.gugun = gugun;
        this.detail = detail;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public void updateDetail(String detail) {
        this.detail = detail;
    }

    public void updateAddress(String sido, String gugun, String detail, Double latitude, Double longitude) {
        this.sido = sido;
        this.gugun = gugun;
        this.detail = detail;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
