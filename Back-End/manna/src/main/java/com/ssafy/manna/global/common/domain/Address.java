package com.ssafy.manna.global.common.domain;

import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.OneToOne;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn
@Getter
public class Address extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne(fetch = FetchType.LAZY)
    private Sido sido;

    @OneToOne(fetch = FetchType.LAZY)
    private Gugun gugun;

    private String detail;

    private Double latitude;
    private Double longitude;


    public void updateDetail(String detail) {
        this.detail = detail;
    }
    public void updateAddress(Sido sido, Gugun gugun, String detail, Double latitude, Double longitude){
        this.sido = sido;
        this.gugun = gugun;
        this.detail = detail;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Address(Sido sido, Gugun gugun, String detail, Double latitude, Double longitude) {
        this.sido = sido;
        this.gugun = gugun;
        this.detail = detail;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
