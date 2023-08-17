package com.ssafy.manna.member.service;

import com.ssafy.manna.global.common.domain.Address;
import com.ssafy.manna.global.common.dto.MailDto;
import com.ssafy.manna.global.common.dto.ProfilePictureDto;
import com.ssafy.manna.member.Enums.UserRole;
import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.domain.MemberDetail;
import com.ssafy.manna.member.domain.ProfilePicture;
import com.ssafy.manna.member.dto.request.*;
import com.ssafy.manna.member.dto.response.MemberFindIdResponse;
import com.ssafy.manna.member.dto.response.MemberInfoResponse;
import com.ssafy.manna.member.repository.MemberDetailRepository;
import com.ssafy.manna.member.repository.MemberRepository;
import com.ssafy.manna.member.repository.ProfilePictureRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.ssafy.manna.member.Enums.MemberExceptionsEnum.*;
import static com.ssafy.manna.member.Enums.MemberInfoEnum.*;
@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final MemberDetailRepository memberDetailRepository;
    private final ProfilePictureRepository profilePictureRepository;
    private final PasswordEncoder passwordEncoder;
    private final JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String sender;

    @Value("${file.upload-dir}")
    private String uploadDir;

    @Value("${file.server-domain}")
    private String serverDomain;

    @Value("${file.url-path}")
    private String urlPath;

    @Override
    public void signUp(MemberSignUpRequest memberSignUpRequest, MultipartFile[] multipartFiles) throws Exception {
        Optional<Member> checkMember = memberRepository.findById(memberSignUpRequest.getId());
        if (checkMember.isPresent()) {
            //id가 존재하고, 탈퇴한 회원이 아닌 경우 회원가입 불가.
            if(checkMember.get().getRole().equals("USER")) {
                log.info(MEMBER_EXCEPTIONS_EXIST_MEMBER.getValue());
                throw new Exception(MEMBER_EXCEPTIONS_EXIST_MEMBER.getValue());
            }
        }
        Address address = Address.builder()
                .sido(memberSignUpRequest.getSido())
                .gugun(memberSignUpRequest.getGugun())
                .detail(memberSignUpRequest.getDetail())
                .latitude(memberSignUpRequest.getLatitude())
                .longitude(memberSignUpRequest.getLongitude())
                .build();

        Member member = Member.builder()
                .id(memberSignUpRequest.getId())
                .pwd(memberSignUpRequest.getPwd())
                .gender(memberSignUpRequest.getGender())
                .name(memberSignUpRequest.getName())
                .role(UserRole.USER)
                .build();

        member.passwordEncode(passwordEncoder);

        MemberDetail memberDetail = MemberDetail.builder()
                .id(member.getId())
                .member(member)
                .address(address)
                .tel(memberSignUpRequest.getTel())
                .birth(memberSignUpRequest.getBirth())
                .emailId(memberSignUpRequest.getEmailId())
                .emailDomain(memberSignUpRequest.getEmailDomain())
                .height(memberSignUpRequest.getHeight())
                .job(memberSignUpRequest.getJob())
                .isSmoker(memberSignUpRequest.isSmoker())
                .isDrinker(memberSignUpRequest.isDrinker())
                .mbti(memberSignUpRequest.getMbti())
                .religion(memberSignUpRequest.getReligion())
                .introduction(memberSignUpRequest.getIntroduction())
                .isBlockingFriend(false)
                .mileage(1000)
                .build();
        memberDetailRepository.save(memberDetail);

        List<ProfilePicture> profilePictures = Arrays.stream(multipartFiles)
                .limit(3)
                .map(file->{
                    String memberId = memberSignUpRequest.getId();
                    try {
                        String path = storeFile(memberId,file);
                        int priority = Arrays.asList(multipartFiles).indexOf(file)+1;
                        return ProfilePicture.builder()
                                .member(member)
                                .path(path)
                                .name(memberId+"_"+file.getOriginalFilename())
                                .priority(priority)
                                .build();
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }

                })
                .collect(Collectors.toList());
        profilePictureRepository.saveAll(profilePictures);
    }

    @Override
    public void delete(String pwd, String id) {
        Member delMember = memberRepository.findById(id).orElseThrow(() -> new RuntimeException(MEMBER_EXCEPTIONS_NONE_MEMBER.getValue()));
        if (passwordEncoder.matches(pwd, delMember.getPwd())) {
            //입력한 비밀번호가 같으면 삭제 진행 - User role 을 Deleted로 변경
            delMember.updateRole(String.valueOf(UserRole.DELETED));

        } else {
            //입력한 비밀번호가 틀리면 throw Error
            throw new RuntimeException(MEMBER_EXCEPTIONS_WRONG_PASSWORD.getValue());
        }
    }

    @Override
    public Optional<Member> findOne(String insertedUserId) {
        return memberRepository.findById(insertedUserId);
    }

    @Override
    public Optional<Member> findMemberByNameAndEmail(MemberFindIdRequest memberFindIdRequest) {
        //아이디 찾기 - 이름, emailId, emailDomain 으로 찾기
        String name = memberFindIdRequest.getName();
        String emailId = memberFindIdRequest.getEmailId();
        String emailDomain = memberFindIdRequest.getEmailDomain();
        return memberRepository.findByNameAndMemberDetailEmailIdAndMemberDetailEmailDomain(name, emailId, emailDomain);

    }

    @Override
    public Optional<Member> findMemberByIdAndEmail(MemberFindPwdRequest memberFindPwdRequest) {
        return memberRepository.findById(memberFindPwdRequest.getId());
    }


    @Override
    public String updatePwd(String findId) {
        Optional<Member> findMember = memberRepository.findById(findId);
        if (findMember.isPresent()) {
            // 임시 비밀번호 생성
            Member member = findMember.get();
            String encodedPassword = this.createTempPwd();
            member.updatePassword(passwordEncoder, encodedPassword);

            memberRepository.save(member);

            return encodedPassword;
        } else {
            throw new RuntimeException(MEMBER_EXCEPTIONS_NONE_MEMBER.getValue());
        }
    }

    @Override
    public String createTempPwd() {
        char[] charSet = new char[]{
                '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        };

        String str = "";

        //문자 배열 길이의 값을 랜덤으로 10개 뽑아 구문 작성
        int idx = 0;
        for (int i = 0; i < 10; i++) {
            idx = (int) (charSet.length * Math.random());
            str += charSet[idx];
        }
        return str;
    }

    @Override
    public MailDto createMail(String memberEmail, String memberEmailDomain, String tempPwd) {
        MailDto dto = new MailDto();
        String email = memberEmail.concat("@" + memberEmailDomain);
        dto.setAddress(email);
        dto.setTitle(MEMBER_INFO_ENUM_PASSWORD_TITLE.getValue());
        dto.setMessage(MEMBER_INFO_ENUM_PASSWORD_MESSAGE_ONE.getValue()+ tempPwd +MEMBER_INFO_ENUM_PASSWORD_MESSAGE_TWO.getValue());
        return dto;
    }


    @Override
    public void sendMail(MailDto mailDto) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(mailDto.getAddress());
        message.setSubject(mailDto.getTitle());
        message.setText(mailDto.getMessage());
        message.setFrom(sender);
        javaMailSender.send(message);
    }

    @Override
    public MemberInfoResponse getInfo(String id) {
        Member member = memberRepository.findById(id).orElseThrow(()-> new RuntimeException(MEMBER_SEARCH_FAIL.getValue()));
        MemberDetail memberDetail = member.getMemberDetail();
        Address memberAddress = memberDetail.getAddress();
        List<ProfilePicture> profilePictures = member.getProfilePictures();
        List<ProfilePictureDto> profilePictureDtos = new ArrayList<>();

        for (ProfilePicture profilePicture : profilePictures) {
            ProfilePictureDto profilePictureDto = new ProfilePictureDto().builder()
                    .id(profilePicture.getId())
                    .path(serverDomain + urlPath + profilePicture.getName())
                    .name(profilePicture.getName())
                    .priority(profilePicture.getPriority())
                    .build();
            profilePictureDtos.add(profilePictureDto);
        }

        MemberInfoResponse memberInfoResponse = new MemberInfoResponse().builder()
                .name(member.getName())
                .height(memberDetail.getHeight())
                .job(memberDetail.getJob())
                .isBlockingFriend(memberDetail.isBlockingFriend())
                .isSmoker(memberDetail.isSmoker())
                .isDrinker(memberDetail.isDrinker())
                .religion(memberDetail.getReligion())
                .mbti(memberDetail.getMbti())
                .profilePictures(profilePictureDtos)
                .introduction(memberDetail.getIntroduction())
                .mileage(memberDetail.getMileage())
                .sido(memberAddress.getSido())
                .age(2023 - Integer.parseInt(memberDetail.getBirth()))
                .gugun(memberAddress.getGugun())
                .detailAddress(memberAddress.getDetail())
                .build();
        return memberInfoResponse;
    }

    @Override
    public void updateInfo(String id, MemberUpdateRequest memberUpdateRequest, MultipartFile[] multipartFiles)
    {
        Member member = memberRepository.findById(id).orElseThrow(()-> new RuntimeException(MEMBER_MODIFY_FAIL.getValue()));
        MemberDetail memberDetail = member.getMemberDetail();
        Address address = memberDetail.getAddress();
        memberDetail.updateHeight(memberUpdateRequest.getHeight());
        memberDetail.updateIntroduction(memberUpdateRequest.getIntroduction());
        memberDetail.updateJob(memberUpdateRequest.getJob());
        memberDetail.updateMbti(memberUpdateRequest.getMbti());
        memberDetail.updateIsDrinker(memberUpdateRequest.getIsDrinker());
        memberDetail.updateIsSmoker(memberUpdateRequest.getIsSmoker());
        memberDetail.updateReligion(memberUpdateRequest.getReligion());
        memberDetail.updateIsBlockingFriend(memberUpdateRequest.getIsBlockingFriend());


        for (int i = 0; i < 3; i++) {
            String path = "";
            if (multipartFiles[i] != null) {
                log.info(i+"번째 사진은 null이 아니다."+multipartFiles[i]);
                path = storeFile(id, multipartFiles[i]);
            } else {
                log.info(i+"번째 사진은 null이다.");
                ProfilePicture existingPicture = profilePictureRepository.findByMemberAndPriority(member, i + 1)
                        .orElseThrow(() -> new RuntimeException(PROFILE_PICTURE_NOT_EXIST.getValue()));
                path = existingPicture.getPath();
            }

            ProfilePicture updatePicture = profilePictureRepository.findByMemberAndPriority
                    (member, i + 1).orElseThrow(() -> new RuntimeException(PROFILE_PICTURE_NOT_EXIST.getValue()));

            if (multipartFiles[i] != null) {
                updatePicture.updatePath(path);
                updatePicture.updateName(member.getId() + "_" + multipartFiles[i].getOriginalFilename());
                profilePictureRepository.save(updatePicture);
            }
        }

        //주소 update
        String detail = memberUpdateRequest.getDetail();
        String sido = memberUpdateRequest.getSido();
        String gugun = memberUpdateRequest.getGugun();
        Double latitude = memberUpdateRequest.getLatitude();
        Double longitude = memberUpdateRequest.getLongitude();

        address.updateAddress(sido, gugun, detail, latitude, longitude);

        memberRepository.save(member);
    }

    @Override
    public void findPwd(MemberFindPwdRequest memberFindPwdRequest) {
        //비밀번호 찾기
        Member member = memberRepository.findById(memberFindPwdRequest.getId()).orElseThrow(()->new RuntimeException(MEMBER_EXCEPTIONS_WRONG_INFO.getValue()));
        String findId = member.getId();
        String emailId = memberFindPwdRequest.getEmailId();
        String emailDomain = memberFindPwdRequest.getEmailDomain();
        //디비 업데이트
        String tempPwd = this.updatePwd(findId);
        //이메일 만들기
        MailDto mailDto = this.createMail(emailId, emailDomain, tempPwd);
        //이메일 발송
        this.sendMail(mailDto);
    }

    @Override
    public String storeFile(String memberId, MultipartFile file) {
        String originalFileName = file.getOriginalFilename();
        String fileName = memberId + "_" + originalFileName;

        File directory = new File(uploadDir);
        String filePath = uploadDir + fileName;
        File destFile = new File(filePath);

        if (!directory.exists()) {
            boolean mkdirsResult = directory.mkdirs();
            if (mkdirsResult) {
                log.info(DIRECTORY_SUCCESS_MESSAGE.getValue());
            } else {
                log.info(DIRECTORY_FAIL_MESSAGE.getValue());
            }
        }
        try {
            file.transferTo(destFile);
        } catch (IOException e) {
            throw new RuntimeException(PROFILE_PICTURE_SAVE_FAIL.getValue());
        }
        log.info(PROFILE_PICTURE_SAVE_SUCCESS+ filePath);
        return filePath;
    }

    @Override
    public void checkPassword(MemberCheckPwdRequest memberCheckPwdRequest) {
        Member member = memberRepository.findById(memberCheckPwdRequest.getId()).orElseThrow(()-> new RuntimeException(MEMBER_EXCEPTIONS_WRONG_INFO.getValue()));
        if (!passwordEncoder.matches(memberCheckPwdRequest.getPwd(), member.getPwd())) {
            throw new RuntimeException(MEMBER_EXCEPTIONS_WRONG_PASSWORD.getValue());
        }
    }

    @Override
    public void changePassword(MemberCheckPwdRequest memberChangePwdRequest) {
        Member member = memberRepository.findById(memberChangePwdRequest.getId()).orElseThrow(()->new RuntimeException(MEMBER_PASSWORD_MODIFY_FAIL.getValue()));
        member.updatePassword(passwordEncoder, memberChangePwdRequest.getPwd());
        memberRepository.save(member);

    }

    @Override
    public MemberFindIdResponse findId(MemberFindIdRequest memberFindIdRequest) {
        Member member = memberRepository.findByNameAndMemberDetailEmailIdAndMemberDetailEmailDomain(
          memberFindIdRequest.getName(), memberFindIdRequest.getEmailId(), memberFindIdRequest.getEmailDomain()
        ).orElseThrow(()->new RuntimeException(MEMBER_EXCEPTIONS_NONE_MEMBER.getValue()));

        MemberFindIdResponse memberFindIdResponse = MemberFindIdResponse.builder()
                .id(member.getId())
                .build();
        return memberFindIdResponse;
    }


}
