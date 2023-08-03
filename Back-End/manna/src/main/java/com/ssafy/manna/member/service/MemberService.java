package com.ssafy.manna.member.service;

import com.ssafy.manna.global.common.dto.MailDto;
import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.domain.ProfilePicture;
import com.ssafy.manna.member.dto.request.MemberFindIdRequest;
import com.ssafy.manna.member.dto.request.MemberFindPwdRequest;
import com.ssafy.manna.member.dto.request.MemberSignUpRequest;
import com.ssafy.manna.member.dto.request.MemberUpdateRequest;
import com.ssafy.manna.member.dto.response.MemberFindPwdResponse;
import com.ssafy.manna.member.dto.response.MemberInfoResponse;
import com.ssafy.manna.member.dto.response.MemberLoginResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;
import javax.swing.text.html.Option;


public interface MemberService {
    //회원가입
    void signUp(MemberSignUpRequest memberSignUpRequest) throws Exception;

//    void signUp(MemberSignUpRequest memberSignUpRequest, MultipartFile[] multipartFiles) throws  Exception;
    //정보 수정
    void update(MemberUpdateRequest memberUpdateRequest, String id) throws Exception;

    //회원탈퇴
    void delete(String pwd, String id);

    //정보조회
//    Optional<Member> getInfo(String id);

    Optional<Member> findOne(String insertedUserId);

//    void signUp(String id, String pwd);

    //이름이랑 mail로 member 찾기
    Optional<Member> findMemberByNameAndEmail(MemberFindIdRequest memberFindIdRequest);

    Optional<Member> findMemberByIdAndEmail(MemberFindPwdRequest memberFindPwdRequest);

    String updatePwd(String findId);

    //임시 비밀번호 생성 , mail 보내기
    String createTempPwd();

    public MailDto createMail(String memberEmail, String memberEmailDomain, String tempPwd);

    void sendMail(MailDto mailDto);

//    Optional<ProfilePicture> findProfilePictureById(Integer id);

    //마이페이지 정보 조회
    MemberInfoResponse getInfo(Member member);
    void updateInfo(Member member,MemberUpdateRequest memberUpdateRequest);
    void findPwd(Member member,MemberFindPwdRequest memberFindPwdRequest);

    String storeFile(MultipartFile file) throws IOException;
}