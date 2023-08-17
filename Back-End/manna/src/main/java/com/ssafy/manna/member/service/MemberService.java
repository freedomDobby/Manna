package com.ssafy.manna.member.service;

import com.ssafy.manna.global.common.dto.MailDto;
import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.dto.request.*;
import com.ssafy.manna.member.dto.response.MemberFindIdResponse;
import com.ssafy.manna.member.dto.response.MemberInfoResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;


public interface MemberService {

    void signUp(MemberSignUpRequest memberSignUpRequest, MultipartFile[] multipartFiles) throws Exception;

    //회원탈퇴
    void delete(String pwd, String id);

    Optional<Member> findOne(String insertedUserId);

    //이름이랑 mail로 member 찾기
    Optional<Member> findMemberByNameAndEmail(MemberFindIdRequest memberFindIdRequest);

    Optional<Member> findMemberByIdAndEmail(MemberFindPwdRequest memberFindPwdRequest);

    String updatePwd(String findId);

    //임시 비밀번호 생성 , mail 보내기
    String createTempPwd();

    public MailDto createMail(String memberEmail, String memberEmailDomain, String tempPwd);

    void sendMail(MailDto mailDto);

    //마이페이지 정보 조회
    MemberInfoResponse getInfo(String id);

    void updateInfo(String id, MemberUpdateRequest memberUpdateRequest, MultipartFile[] multipartFiles);

    void findPwd(MemberFindPwdRequest memberFindPwdRequest);

    String storeFile(String memberId, MultipartFile file) throws IOException;

    void checkPassword(MemberCheckPwdRequest memberCheckPwdRequest);

    void changePassword(MemberCheckPwdRequest memberChangePwdRequest);

    MemberFindIdResponse findId(MemberFindIdRequest memberFindIdRequest);

}