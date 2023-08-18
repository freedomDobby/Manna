package com.ssafy.manna.messenger.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.util.List;

@RedisHash
@Getter
@Builder
@AllArgsConstructor
@ToString
public class RedisChat {

    @Id
    private String roomId;
    private List<RedisChatHistory> redisChatHistories;

}

