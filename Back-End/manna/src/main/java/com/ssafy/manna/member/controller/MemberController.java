package com.ssafy.manna.member.controller;

import com.ssafy.manna.global.util.ResponseTemplate;
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

    //임시매핑
//    @PostMapping("/hello")
//    public ResponseEntity<String> imsi(){
//        return ResponseEntity.ok("success");
//    }

    //회원가입
//    @PostMapping(value="/regist")
//    public ResponseEntity<?> join(@RequestBody MemberSignUpRequest memberSignUpRequest) {
//        try {
//            // 회원가입 시 카카오 인증
//            memberService.signUp(memberSignUpRequest);
//            return ResponseEntity.ok("join success");
//        } catch (Exception e) {
//            return ResponseEntity.badRequest().body(e.getMessage());
//        }
//    }

    //회원가입(이미지 포함)


    @PostMapping(value = "/regist", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> join(
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
            return ResponseEntity.ok("join success");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

//    @GetMapping("{imgname}")
//    public ResponseEntity<String> getProfileImg(@PathVariable("imgname") String imgname){
//        String img = "https://i9b205.p.ssafy.io/"+
//    }


//    @PostMapping("/upload")
//    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file) {
//
//        try {
//            String fileName = file.getOriginalFilename();
//            String filePath = uploadDir + File.separator + fileName;
//            File destFile = new File(filePath);
//            file.transferTo(destFile);
//            return ResponseEntity.ok("File uploaded successfully.");
//        } catch (IOException e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload file: " + e.getMessage());
//        }
//    }

    //회원탈퇴
    @DeleteMapping("/delete")
    public ResponseEntity<?> delete(@RequestBody MemberDeleteRequest memberDeleteRequest) {
        ResponseTemplate<?> body;
        try {
            //회원 탈퇴시 비밀번호 입력받고 일치하면 회원 탈퇴.(DB Role을 DELETED로 바꿔주기)
            memberService.delete(memberDeleteRequest.getPwd(), memberDeleteRequest.getId());
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("회원 탈퇴가 완료되었습니다.")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.OK);
        } catch (Exception e) {
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("비밀번호가 틀렸습니다. 다시 입력해주세요.")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
        }
    }

    //마이페이지 정보 조회
    @GetMapping("/mypage/{id}")
    public ResponseEntity<?> myPage(@Validated @PathVariable("id") String id) throws Exception {
        ResponseTemplate<?> body;
        try {
            Member findMember = memberService.findOne(id).orElseThrow(() -> new Exception("회원 정보가 없습니다."));
            MemberInfoResponse memberInfoResponse = memberService.getInfo(findMember);
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("회원 조회 완료")
                    .data(memberInfoResponse)
                    .build();
            return new ResponseEntity<>(body, HttpStatus.OK);
        } catch (Exception e) {
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("회원 조회 실패")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
        }
    }

    //마이페이지 정보수정
    @PutMapping("/mypage/{id}")
    public ResponseEntity<?> myPageEdit(@RequestPart("memberUpdateRequest") MemberUpdateRequest memberUpdateRequest,
                                        @PathVariable("id") String id,
                                        @RequestPart("profilePicture1") MultipartFile profilePicture1,
                                        @RequestPart("profilePicture2") MultipartFile profilePicture2,
                                        @RequestPart("profilePicture3") MultipartFile profilePicture3) {
        ResponseTemplate<?> body;
        Member findMember = null;
        try {
            findMember = memberService.findOne(id).orElseThrow(() -> new Exception("회원 정보가 없습니다."));
            MultipartFile[] multipartFiles = new MultipartFile[3];
            multipartFiles[0] = profilePicture1;
            multipartFiles[1] = profilePicture2;
            multipartFiles[2] = profilePicture3;
            memberService.updateInfo(findMember, memberUpdateRequest, multipartFiles);
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("회원 수정 완료")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.OK);
        } catch (Exception e) {
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("회원 수정 오류")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
        }

    }

    //아이디 찾기
    @PostMapping("/findId")
    public ResponseEntity<?> findId(@RequestBody MemberFindIdRequest memberFindIdRequest) {
        Optional<Member> findMember = memberService.findMemberByNameAndEmail(memberFindIdRequest);
        ResponseTemplate<?> body;
        if (findMember.isPresent()) {
            String findId = findMember.get().getId();
            MemberFindIdResponse memberFindIdResponse = new MemberFindIdResponse(findId);
            body = ResponseTemplate.builder()
                    .result(true)
                    .data(memberFindIdResponse)
                    .build();
            return new ResponseEntity<>(body, HttpStatus.OK);
        } else {
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("가입한 정보가 없습니다. 다시 입력해주세요.")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
        }
    }

    //비밀번호 찾기
    @PostMapping("/findPwd")
    public ResponseEntity<?> findPwd(@RequestBody MemberFindPwdRequest memberFindPwdRequest) {
        Optional<Member> findMember = memberService.findMemberByIdAndEmail(memberFindPwdRequest);
        ResponseTemplate<?> body;
        if (findMember.isPresent()) {
            memberService.findPwd(findMember.get(), memberFindPwdRequest);
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("임시비밀번호 이메일 발송 완료")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.OK);
        } else {
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("가입한 정보가 없습니다. 다시 입력해주세요.")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
        }
    }

    //마이페이지 - 비밀번호 변경 전 현재 비밀번호 확인
    @PostMapping("/mypage/checkPwd")
    public ResponseEntity<?> checkPassword(@RequestBody MemberCheckPwdRequest memberCheckPwdRequest) {
        Optional<Member> member = memberService.findOne(memberCheckPwdRequest.getId());
        ResponseTemplate<?> body;
        if (member.isPresent()) {
            if (passwordEncoder.matches(memberCheckPwdRequest.getPwd(), member.get().getPwd())) {
                body = ResponseTemplate.builder()
                        .result(true)
                        .msg("비밀번호 확인 완료")
                        .build();
                return new ResponseEntity<>(body, HttpStatus.OK);
            } else {
                body = ResponseTemplate.builder()
                        .result(false)
                        .msg("비밀번호가 틀렸습니다.")
                        .build();
                return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
            }
        } else {
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("회원정보가 없습니다.")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
        }
    }

    //마이페이지 비밀번호 변경
    @PostMapping("/mypage/changePwd")
    public ResponseEntity<?> changePassword(@RequestBody MemberCheckPwdRequest memberChangePwdRequest) {
        Optional<Member> member = memberService.findOne(memberChangePwdRequest.getId());
        ResponseTemplate<?> body;
        if (member.isPresent()) {
            Member checkMember = member.get();
            checkMember.updatePassword(passwordEncoder, memberChangePwdRequest.getPwd());
            memberRepository.save(checkMember);
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("비밀번호 변경 완료")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.OK);
        } else {
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("비밀번호 변경 불가")
                    .build();
            return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
        }
    }
//    @GetMapping("/member/img/{fileName}")
//    public ResponseEntity<Resource> getImage(@PathVariable String fileName) throws IOException {
//        // 이미지 파일의 실제 경로
//        String imagePath = "/home/ubuntu/manna/upload/images/member" + "/" + fileName;
//        // 이미지 파일을 Resource 객체로 읽어옴
//        Resource imageResource = (Resource) new FileSystemResource(imagePath);
//        // 파일을 읽어올 수 없는 경우 404 Not Found 응답
//        // 이미지 파일의 Content-Type을 추론하여 설정
//        String contentType = Files.probeContentType(Paths.get(imagePath));
//
//        // Response에 이미지 파일을 담아서 반환
//        return ResponseEntity.ok()
//                .contentType(MediaType.parseMediaType(contentType))
//                .body(imageResource);
//    }
}
