package com.ssafy.manna.global.util;

import com.ssafy.manna.global.common.repository.RedisSessionRepository;
import com.ssafy.manna.global.common.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SessionServiceTest {

    @Autowired
    private SessionService sessionService;

    @Autowired
    private RedisSessionRepository redisSessionRepository;

//    @BeforeEach
//    public void dataSave() {
//        Session test1 = Session.builder()
//            .userId("test1")
//            .gender("male")
//            .userName("안규보")
//            .build();
//
//        Session test2 = Session.builder()
//            .userId("test2")
//            .gender("male")
//            .userName("최제혁")
//            .build();
//
//        Session test3 = Session.builder()
//            .userId("test3")
//            .gender("female")
//            .userName("박소현")
//            .build();
//
//        redisSessionRepository.save(test1);
//        redisSessionRepository.save(test2);
//        redisSessionRepository.save(test3);
//    }
//
//    @AfterEach
//    public void DataDelete() {
//        redisSessionRepository.deleteById("test1");
//        redisSessionRepository.deleteById("test2");
//        redisSessionRepository.deleteById("test3");
//    }
//
//
//    @Test
//    public void 모든_접속_유저_조회() {
//        List<Session> onlineMembers = sessionService.findOnlineMembers();
//
//        assertThat(onlineMembers.size() >= 3).isTrue();
//    }
//
//    @Test
//    public void 특정_유저_온라인여부_조회() {
//        Boolean test = sessionService.checkMemberIsOnline("test1");
//
//        assertThat(test).isTrue();
//    }
//
//    @Test
//    public void 모든_남자_조회() {
//        List<Session> onlineMaleMember = sessionService.findOnlineMaleMember();
//
//        assertThat(onlineMaleMember.size() >= 2).isTrue();
//    }
//
//    @Test
//    public void 모든_여자_조회() {
//        List<Session> onlineFemaleMember = sessionService.findOnlineFemaleMember();
//
//        assertThat(onlineFemaleMember.size() >= 1).isTrue();
//    }

}