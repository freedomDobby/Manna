package com.ssafy.manna.global.common.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Builder
@AllArgsConstructor
public class CodeDetail {

    @Id
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Code code;
    private String name;

    @Override
    public String toString() {
        return "CodeDetail{" +
                "id='" + id + '\'' +
                ", code=" + code +
                ", name='" + name + '\'' +
                '}';
    }
}
