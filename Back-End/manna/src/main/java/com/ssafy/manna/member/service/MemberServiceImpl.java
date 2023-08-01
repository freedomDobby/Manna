package com.ssafy.manna.member.service;

import com.ssafy.manna.global.common.dto.MailDto;
import com.ssafy.manna.global.common.domain.Address;
import com.ssafy.manna.global.common.domain.Gugun;
import com.ssafy.manna.global.common.domain.Sido;
import com.ssafy.manna.global.common.repository.GugunRepository;
import com.ssafy.manna.global.common.repository.SidoRepository;
import com.ssafy.manna.member.Enums.UserRole;
import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.domain.MemberDetail;
import com.ssafy.manna.member.domain.ProfilePicture;
import com.ssafy.manna.member.dto.request.MemberFindIdRequest;
import com.ssafy.manna.member.dto.request.MemberFindPwdRequest;
import com.ssafy.manna.member.dto.request.MemberSignUpRequest;
import com.ssafy.manna.member.dto.request.MemberUpdateRequest;
import com.ssafy.manna.member.dto.response.MemberFindIdResponse;
import com.ssafy.manna.member.dto.response.MemberInfoResponse;
import com.ssafy.manna.member.dto.response.MemberLoginResponse;
import com.ssafy.manna.member.repository.MemberDetailRepository;
import com.ssafy.manna.member.repository.MemberRepository;
import java.util.Optional;

import com.ssafy.manna.member.repository.ProfilePictureRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final MemberDetailRepository memberDetailRepository;
    private final SidoRepository sidoRepository;
    private final GugunRepository gugunRepository;
    private final ProfilePictureRepository profilePictureRepository;
    private final PasswordEncoder passwordEncoder;

    private final JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String sender;
    @Override
    public void signUp(MemberSignUpRequest memberSignUpRequest) throws Exception {
        if (memberRepository.findById(memberSignUpRequest.getId()).isPresent()) {
            log.info("이미 있는 회원입니다.");
            throw new Exception("이미 존재하는 이메일입니다.");
        }

        Sido sido = sidoRepository.findByName(memberSignUpRequest.getSido())
            .orElseThrow(() -> new Exception("일치하는 시도가 없습니다."));

        Gugun gugun = gugunRepository.findByNameAndSido(memberSignUpRequest.getGugun(), sido)
            .orElseThrow(() -> new Exception("일치하는 구군이 없습니다."));

        Address address = new Address(sido, gugun, memberSignUpRequest.getDetail(),
            memberSignUpRequest.getLatitude(), memberSignUpRequest.getLongitude());

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
            .isBlockingFriend(memberSignUpRequest.isBlockingFriend())
            .mileage(0)
            .build();

        memberDetailRepository.save(memberDetail);
    }

    @Override
    public void update(MemberUpdateRequest memberUpdateRequest, String id) throws Exception {

        //해당 id를 가진 member를 찾아서 return
        Member member = memberRepository.findById(id).orElseThrow(()->new RuntimeException("Member not found"));
        MemberDetail memberDetail = member.getMemberDetail();



    }

//    @Override
//    public void update(MemberUpdateRequest memberUpdateRequest, String id) throws Exception {
//
//    }

    @Override
    public void delete(String pwd, String id) {
        Member delMember = memberRepository.findById(id).orElseThrow(()-> new RuntimeException("Member not found"));
        if(delMember.getPwd().equals(pwd)){
            //입력한 비밀번호가 같으면 삭제 진행
            memberRepository.delete(delMember);
        }
        else{
            //입력한 비밀번호가 틀리면 throw Error
            throw new RuntimeException("Password Incorrect");

        }
    }

    @Override
    public Optional<Member> getInfo(String id) {

        return memberRepository.findById(id);
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
        return memberRepository.findByNameAndMemberDetailEmailIdAndMemberDetailEmailDomain(name,emailId,emailDomain);

    }

    @Override
    public Optional<Member> findMemberByIdAndEmail(MemberFindPwdRequest memberFindPwdRequest) {
        return memberRepository.findById(memberFindPwdRequest.getId());
    }


    @Override
    public String updatePwd(String findId) {
        Optional<Member> findMember = memberRepository.findById(findId);
        if(findMember.isPresent()){
            // 임시 비밀번호 생성
            Member member= findMember.get();
            String encodedPassword = this.createTempPwd();
            member.updatePassword(passwordEncoder,encodedPassword);

            memberRepository.save(member);

            return encodedPassword;
        }
        else{
            throw new RuntimeException("Member not found");
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
            idx = (int) (charSet.length*Math.random());
            str+=charSet[idx];
        }
        return str;
    }

    @Override
    public MailDto createMail(String memberEmail, String memberEmailDomain, String tempPwd) {
        MailDto dto = new MailDto();
        String email = memberEmail.concat("@"+memberEmailDomain);
        dto.setAddress(email);
        dto.setTitle("맞나만나 임시비밀번호 안내 이메일 입니다.");
        dto.setMessage("안녕하세요. 맞나만나 임시비밀번호 안내 관련 이메일입니다."+" 회원님의 임시 비밀번호는 "+tempPwd+ "입니다."
        +"로그인 후에 비밀번호를 변경해주세요.");
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
    public Optional<ProfilePicture> findProfilePictureById(Integer id) {
        return profilePictureRepository.findById(id);
    }
}
