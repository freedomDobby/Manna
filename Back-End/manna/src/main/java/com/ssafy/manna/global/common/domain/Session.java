package com.ssafy.manna.global.common.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Getter
@AllArgsConstructor
@RedisHash
@Builder
public class Session {

    @Id
    private String userId;
    private String gender;
    private String userName;
    private Integer offset;
}
