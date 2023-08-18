package com.ssafy.manna.global.auth.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Getter
@AllArgsConstructor
@RedisHash(timeToLive = 1209600000)
public class RefreshToken {

    @Id
    private String refreshToken;
    private String memberId;

}
