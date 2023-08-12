package com.ssafy.manna.mission.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
public class MissionCallResponse {

    private int missionId;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime startDate;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime endDate;
    private List<MissionQuestion> missionQuestion;

    @Data
    @AllArgsConstructor
    public static class MissionQuestion {

        private Integer id;
        private Boolean maleIsDone;
        private Boolean femaleIsDone;
        private String content;
    }
}
