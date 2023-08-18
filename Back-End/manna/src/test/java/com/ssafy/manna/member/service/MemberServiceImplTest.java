package com.ssafy.manna.member.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
class MemberServiceImplTest {

    @Autowired
    private MemberServiceImpl memberService;

//    @Test
//    public void 유저_생성_테스트() {
//        MemberSignUpRequest.builder()
//            .id("test_bb1a270fbd2f")
//            .pwd("test_9b083be0ca24")
//            .name("test_5a69f4c0db45")
//            .gender("test_1ce44736841d")
//            .tel("test_78b7a54a00e0")
//            .birth("test_71c68140da0d")
//            .emailId("test_9d22282a8d0d")
//            .emailDomain("test_7a55cc62c1f0")
//            .height(16)
//            .job("test_37b266f0ab33")
//            .isSmoker(true)
//            .isDrinker(true)
//            .mbti("test_01bf4c3a1dd7")
//            .religion("test_3ad5dbf9ae92")
//            .introduction("test_01c6b2e477a9")
//            .isBlockingFriend(false)
//            .sido("test_b2097142876b")
//            "gugun": "test_3f483b37b36c",
//            "detail": "test_98874130efae",
//            "latitude": 17.74,
//            "longitude": 86.38
//        memberService.signUp();
//    }
}