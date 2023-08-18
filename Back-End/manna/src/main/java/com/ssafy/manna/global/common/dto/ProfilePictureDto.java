package com.ssafy.manna.global.common.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProfilePictureDto {

    private Integer id;         //사진 id
    private String path;        //사진 경로
    private String name;        //사진 이름
    private Integer priority;   //우선순위

}
