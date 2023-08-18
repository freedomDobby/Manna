package com.ssafy.manna.global.auth.repository;

import com.ssafy.manna.global.auth.domain.RefreshToken;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class RefreshTokenRepositoryTest {

    @Autowired
    private RefreshTokenRepository refreshTokenRepository;

    @Test
    void 리프레시토큰_저장_테스트() {
        RefreshToken refreshToken = new RefreshToken("123", "456");
        refreshTokenRepository.save(refreshToken);

        RefreshToken SavedrefreshToken = refreshTokenRepository.findById(refreshToken.getRefreshToken()).get();

        Assertions.assertThat(SavedrefreshToken.getRefreshToken()).isEqualTo("123");
        Assertions.assertThat(SavedrefreshToken.getMemberId()).isEqualTo("456");
    }


}