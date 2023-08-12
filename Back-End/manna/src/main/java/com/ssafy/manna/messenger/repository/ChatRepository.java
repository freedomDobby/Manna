package com.ssafy.manna.messenger.repository;

import com.ssafy.manna.messenger.domain.RedisChat;
import org.springframework.data.repository.CrudRepository;

public interface ChatRepository extends CrudRepository<RedisChat, String> {

}
