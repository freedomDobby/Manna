package com.ssafy.manna.member.controller;

import com.ssafy.manna.global.util.ResponseTemplate;
import com.ssafy.manna.member.Enums.MemberInfoEnum;
import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.dto.request.*;
import com.ssafy.manna.member.dto.response.MemberFindIdResponse;
import com.ssafy.manna.member.dto.response.MemberInfoResponse;
import com.ssafy.manna.member.repository.MemberRepository;
import com.ssafy.manna.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.Optional;

import static com.ssafy.manna.member.Enums.MemberInfoEnum.*;

@RestController
@RequiredArgsConstructor
@EnableWebMvc
@Slf4j
@RequestMapping("/api/user")
public class MemberController {

    private final MemberService memberService;
    private final PasswordEncoder passwordEncoder;
    private final MemberRepository memberRepository;

    @Value("${file.upload-dir}")
    private String uploadDir;

    //회원 가입
    @PostMapping(value = "/regist", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ResponseTemplate> join(
            @RequestPart("memberSignUpRequest") MemberSignUpRequest memberSignUpRequest,
            @RequestPart("profilePicture1") MultipartFile profilePicture1,
            @RequestPart("profilePicture2") MultipartFile profilePicture2,
            @RequestPart("profilePicture3") MultipartFile profilePicture3
    ) {
        try {
            MultipartFile[] multipartFiles = new MultipartFile[3];
            multipartFiles[0] = profilePicture1;
            multipartFiles[1] = profilePicture2;
            multipartFiles[2] = profilePicture3;
            // 회원가입 시 카카오 인증
            memberService.signUp(memberSignUpRequest, multipartFiles);
            return new ResponseEntity<>(
              ResponseTemplate.builder()
                      .result(true)
                      .msg(JOIN_SUCCESS_MESSAGE.getValue())
                      .build(),
                    HttpStatus.OK
            );
        } catch (Exception e) {
            return new ResponseEntity<>(
                    ResponseTemplate.builder()
                            .result(false)
                            .msg(JOIN_FAIL_MESSAGE.getValue())
                            .build(),
                    HttpStatus.BAD_REQUEST
            );
        }
    }

    //회원탈퇴
    @DeleteMapping("/delete")
    public ResponseEntity<ResponseTemplate> delete(@RequestBody MemberDeleteRequest memberDeleteRequest) {
        //회원 탈퇴시 비밀번호 입력받고 일치하면 회원 탈퇴.(DB Role을 DELETED로 바꿔주기)
        memberService.delete(memberDeleteRequest.getPwd(), memberDeleteRequest.getId());
        return new ResponseEntity<>(
                ResponseTemplate.builder()
                    .result(true)
                    .msg(WITHDRAWAL_SUCCESS_MESSAGE.getValue())
                    .build(),
                HttpStatus.OK
        );
    }

    //마이페이지 정보 조회
    @GetMapping("/mypage/{id}")
    public ResponseEntity<ResponseTemplate<MemberInfoResponse>> myPage(@Validated @PathVariable("id") String id) {
        return new ResponseEntity<>(
                ResponseTemplate.<MemberInfoResponse>builder()
                        .msg(MEMBER_SEARCH_SUCCESS.getValue())
                        .data(memberService.getInfo(id))
                        .result(true)
                        .build(),
                HttpStatus.OK);
    }

    //마이페이지 정보수정
    @PutMapping("/mypage/{id}")
    public ResponseEntity<ResponseTemplate> myPageEdit(@RequestPart("memberUpdateRequest") MemberUpdateRequest memberUpdateRequest,
                                        @PathVariable("id") String id,
                                        @RequestPart(value = "profilePicture1", required = false) MultipartFile profilePicture1,
                                        @RequestPart(value = "profilePicture2", required = false) MultipartFile profilePicture2,
                                        @RequestPart(value = "profilePicture3", required = false) MultipartFile profilePicture3)
    {
            MultipartFile[] multipartFiles = new MultipartFile[3];
            multipartFiles[0] = profilePicture1;
            multipartFiles[1] = profilePicture2;
            multipartFiles[2] = profilePicture3;
            memberService.updateInfo(id, memberUpdateRequest, multipartFiles);
            return new ResponseEntity<>(
                    ResponseTemplate.builder()
                            .result(true)
                            .msg(MEMBER_MODIFY_SUCCESS.getValue())
                            .build(),
                    HttpStatus.OK
            );
    }

    //아이디 찾기
    @PostMapping("/findId")
    public ResponseEntity<ResponseTemplate<MemberFindIdResponse>> findId(@RequestBody MemberFindIdRequest memberFindIdRequest) {
        MemberFindIdResponse memberFindIdResponse = memberService.findId(memberFindIdRequest);
        return new ResponseEntity<>(
                ResponseTemplate.<MemberFindIdResponse>builder()
                        .msg(MEMBER_SEARCH_SUCCESS.getValue())
                        .data(memberFindIdResponse)
                        .result(true)
                        .build(),
                HttpStatus.OK);
    }

    //비밀번호 찾기
    @PostMapping("/findPwd")
    public ResponseEntity<ResponseTemplate> findPwd(@RequestBody MemberFindPwdRequest memberFindPwdRequest) {
            memberService.findPwd( memberFindPwdRequest);
            return new ResponseEntity<>(
                    ResponseTemplate.builder()
                            .result(true)
                            .msg(MEMBER_TEMP_PASSWORD_MESSAGE.getValue())
                            .build(),HttpStatus.OK
            );
    }

    //마이페이지 - 비밀번호 변경 전 현재 비밀번호 확인
    @PostMapping("/mypage/checkPwd")
    public ResponseEntity<ResponseTemplate> checkPassword(@RequestBody MemberCheckPwdRequest memberCheckPwdRequest) {
        memberService.checkPassword(memberCheckPwdRequest);
        return new ResponseEntity<>(
                ResponseTemplate.builder()
                        .result(true)
                        .msg(MEMBER_CHECK_PASSWORD_SUCCESS.getValue())
                        .build(),HttpStatus.OK
        );
    }

    //마이페이지 비밀번호 변경
    @PostMapping("/mypage/changePwd")
    public ResponseEntity<ResponseTemplate> changePassword(@RequestBody MemberCheckPwdRequest memberChangePwdRequest) {
        memberService.changePassword(memberChangePwdRequest);
        return new ResponseEntity<>(
                ResponseTemplate.builder()
                        .result(true)
                        .msg(MEMBER_PASSWORD_MODIFY_SUCCESS.getValue())
                        .build(),HttpStatus.OK
        );
    }
}
