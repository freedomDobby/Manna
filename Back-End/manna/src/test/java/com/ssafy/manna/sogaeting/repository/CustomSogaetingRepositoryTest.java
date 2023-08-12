package com.ssafy.manna.sogaeting.repository;

import com.ssafy.manna.global.common.repository.RedisSessionRepository;
import com.ssafy.manna.global.common.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CustomSogaetingRepositoryTest {

    @Autowired
    private CustomSogaetingRepository customSogaetingRepository;
    @Autowired
    private SessionService sessionService;

    @Autowired
    private RedisSessionRepository redisSessionRepository;

//    @Test
//    public void 테스트() {
//        Session session = Session.builder()
//            .gender("male")
//            .userName("gyubo")
//            .userId("gyubotest2")
//            .offset(0)
//            .build();
//
//        redisSessionRepository.save(session);
//
//        Integer offset = sessionService.getOffset("gyubotest2");
//
//        List<SogaetingMemberResponse> memberByCondition = customSogaetingRepository.findMemberByCondition(
//            offset, new SogaetingFilteringRequest("gyubotest2", "male", null, null, null, null));
//
//        for (SogaetingMemberResponse sogaetingMemberResponse : memberByCondition) {
//            System.out.println(sogaetingMemberResponse);
//        }
//
//    }
}