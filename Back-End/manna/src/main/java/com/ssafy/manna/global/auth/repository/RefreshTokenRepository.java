package com.ssafy.manna.global.auth.repository;

import com.ssafy.manna.global.auth.domain.RefreshToken;
import org.springframework.data.repository.CrudRepository;

public interface RefreshTokenRepository extends CrudRepository<RefreshToken, String> {


}
