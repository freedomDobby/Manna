package com.ssafy.manna.member.controller;

import com.ssafy.manna.global.util.ResponseTemplate;
import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.dto.request.*;
import com.ssafy.manna.member.dto.request.MemberDeleteRequest;
import com.ssafy.manna.member.dto.request.MemberFindIdRequest;
import com.ssafy.manna.member.dto.request.MemberFindPwdRequest;
import com.ssafy.manna.member.dto.request.MemberSignUpRequest;
import com.ssafy.manna.member.dto.request.MemberUpdateRequest;
import com.ssafy.manna.member.dto.response.MemberFindIdResponse;
import com.ssafy.manna.member.dto.response.MemberInfoResponse;
import com.ssafy.manna.member.repository.MemberRepository;
import com.ssafy.manna.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@EnableWebMvc
@Slf4j
@RequestMapping("/user")
public class MemberController {

    private final MemberService memberService;
    private final PasswordEncoder passwordEncoder;

    //회원가입
    @PostMapping("/regist")
    public ResponseEntity<String> join(@RequestBody MemberSignUpRequest memberSignUpRequest) {
        try {
            // 회원가입 시 카카오 인증
            memberService.signUp(memberSignUpRequest);
            return ResponseEntity.ok("join success");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    //회원탈퇴
    @DeleteMapping("/delete")
    public ResponseEntity<?> delete(@RequestBody MemberDeleteRequest memberDeleteRequest){
        ResponseTemplate<?> body;
        try{
            //회원 탈퇴시 비밀번호 입력받고 일치하면 회원 탈퇴.(DB Role을 DELETED로 바꿔주기)
            memberService.delete(memberDeleteRequest.getPwd(),memberDeleteRequest.getId());
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("회원 탈퇴가 완료되었습니다.")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.OK);
        }
        catch (Exception e){
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("비밀번호가 틀렸습니다. 다시 입력해주세요.")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.BAD_REQUEST);
        }
    }

    //마이페이지 정보 조회
    @GetMapping("/mypage/{id}")
    public ResponseEntity<?> myPage(@Validated @PathVariable("id") String id) {
        ResponseTemplate<?> body;
        Optional<Member> findMember = memberService.findOne(id);
        if(findMember.isPresent()){
            MemberInfoResponse memberInfoResponse = memberService.getInfo(findMember.get());
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("회원 조회 완료")
                    .data(memberInfoResponse)
                    .build();
            return new ResponseEntity<>(body,HttpStatus.OK);
        }
        else{
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("Page error")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.BAD_REQUEST);
        }
    }

    //마이페이지 정보수정
    @PutMapping("/mypage/{id}")
    public ResponseEntity<?> myPageEdit(@RequestBody  MemberUpdateRequest memberUpdateRequest, @PathVariable("id") String id){
        ResponseTemplate<?> body;
        Optional<Member> findMember = memberService.findOne(id);
        if(findMember.isPresent()){
            memberService.updateInfo(findMember.get(),memberUpdateRequest);
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("회원 수정 완료")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.OK);
        }
        else {
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("회원 수정 오류")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.BAD_REQUEST);
        }
    }

    //아이디 찾기
    @PostMapping("/findId")
    public ResponseEntity<?> findId(@RequestBody MemberFindIdRequest memberFindIdRequest){
        Optional<Member> findMember = memberService.findMemberByNameAndEmail(memberFindIdRequest);
        ResponseTemplate<?> body;
        if(findMember.isPresent()){
            String findId = findMember.get().getId();
            MemberFindIdResponse memberFindIdResponse = new MemberFindIdResponse(findId);
            body = ResponseTemplate.builder()
                    .result(true)
                    .data(memberFindIdResponse)
                    .build();
            return new ResponseEntity<>(body,HttpStatus.OK);
        }
        else{
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("가입한 정보가 없습니다. 다시 입력해주세요.")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.BAD_REQUEST);
        }
    }

    //비밀번호 찾기
    @PostMapping("/findPwd")
    public ResponseEntity<?> findPwd(@RequestBody MemberFindPwdRequest memberFindPwdRequest){
        Optional<Member> findMember = memberService.findMemberByIdAndEmail(memberFindPwdRequest);
        ResponseTemplate<?> body;
        if(findMember.isPresent()){
            memberService.findPwd(findMember.get(),memberFindPwdRequest);
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("임시비밀번호 이메일 발송 완료")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.OK);
        }
        else{
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("가입한 정보가 없습니다. 다시 입력해주세요.")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.BAD_REQUEST);
        }
    }

    //마이페이지 - 비밀번호 변경 전 현재 비밀번호 확인
    @PostMapping("/mypage/checkPwd")
    public ResponseEntity<?> checkPassword(@RequestBody MemberCheckPwdRequest memberCheckPwdRequest){
        Optional<Member> member = memberService.findOne(memberCheckPwdRequest.getId());
        ResponseTemplate<?> body;
        if(member.isPresent()){
            if(passwordEncoder.matches(memberCheckPwdRequest.getPwd(), member.get().getPwd())){
                body = ResponseTemplate.builder()
                        .result(true)
                        .msg("비밀번호 확인 완료")
                        .build();
                return new ResponseEntity<>(body,HttpStatus.OK);
            }
            else{
                body = ResponseTemplate.builder()
                        .result(false)
                        .msg("비밀번호가 틀렸습니다.")
                        .build();
                return new ResponseEntity<>(body,HttpStatus.BAD_REQUEST);
            }
        }
        else{
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("회원정보가 없습니다.")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.BAD_REQUEST);
        }
    }

    //마이페이지 비밀번호 변경
    @PostMapping("/mypage/changePwd")
    public ResponseEntity<?> changePassword(@RequestBody MemberCheckPwdRequest memberChangePwdRequest){
        Optional<Member> member = memberService.findOne(memberChangePwdRequest.getId());
        ResponseTemplate<?> body;
        if(member.isPresent()){
            Member checkMember = member.get();
            checkMember.updatePassword(passwordEncoder,memberChangePwdRequest.getPwd());
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("비밀번호 변경 완료")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.OK);
        }
        else{
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("비밀번호 변경 불가")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.BAD_REQUEST);
        }
    }
}
