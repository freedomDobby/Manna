package com.ssafy.manna.mission.controller;

import com.ssafy.manna.global.util.ResponseTemplate;
import com.ssafy.manna.mission.dto.request.MissionAssignRequest;
import com.ssafy.manna.mission.dto.request.MissionDoRequest;
import com.ssafy.manna.mission.dto.request.MissionGiveUpRequest;
import com.ssafy.manna.mission.dto.response.MissionCallResponse;
import com.ssafy.manna.mission.dto.response.MissionFinishResponse;
import com.ssafy.manna.mission.repository.MissionRepository;
import com.ssafy.manna.mission.service.MissionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.List;

@RestController
@RequiredArgsConstructor
@EnableWebMvc
@Slf4j
@RequestMapping("/api/mission")
public class MissionController {

    private final MissionRepository missionRepository;
    private final MissionService missionService;


    // 소개팅이 성공하면 미션 6가지 생성해주기
    @PostMapping(value = "/assign")
    public ResponseEntity<?> assignMission(@RequestBody MissionAssignRequest missionAssignRequest) {
        ResponseTemplate<?> body;
        try {
            missionService.assignMission(missionAssignRequest);
            return ResponseEntity.ok("mission assign success");
        } catch (Exception e) {
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("미션 생성 에러")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
        }
    }

    // 해당하는 회원의 미션정보 불러오기
    @GetMapping(value = "/call/{id}")
    public ResponseEntity<List<MissionCallResponse>> getMissionListByUserId(
            @Validated @PathVariable("id") String id) {
        try {
            List<MissionCallResponse> response = missionService.getMissionListByUserId(id);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // 미션 포기하기
    @PutMapping(value = "/giveup")
    public ResponseEntity<?> giveUpMissionByMissionId(
            @RequestBody MissionGiveUpRequest missionGiveUpRequest) {
        ResponseTemplate<?> body;
        try {
            missionService.giveUpMission(missionGiveUpRequest);
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("미션 포기 성공")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.OK);
        } catch (Exception e) {
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("미션 포기 실패")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
        }
    }

    // 미션 사진 업로드
    @PutMapping(value = "/do", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> doMission(
            @RequestPart("missionDoRequest") MissionDoRequest missionDoRequest,
            @RequestPart("missionPicture") MultipartFile missionPicture) {
        try {
            missionService.doMission(missionDoRequest, missionPicture);
            return ResponseEntity.ok("doMission success");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // 미션 완료 후 인증서 발급
    @GetMapping(value = "/finish/{id}")
    public ResponseEntity<?> finishMission(
            @Validated @PathVariable("id") String id) throws Exception {
        ResponseTemplate<?> body;
        try {
            MissionFinishResponse missionFinishResponse = missionService.finishMission(id);
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("미션 완료")
                    .data(missionFinishResponse)
                    .build();
            return new ResponseEntity<>(body, HttpStatus.OK);
        } catch (Exception e) {
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("미션 실패")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
        }
    }


}
