package com.ssafy.manna.member.domain;

import jakarta.persistence.Id;
import org.springframework.data.redis.core.RedisHash;

@RedisHash(value = "refreshToken", timeToLive = 1209600000)
public class RefreshToken {

    @Id
    private String refreshToken;

}
