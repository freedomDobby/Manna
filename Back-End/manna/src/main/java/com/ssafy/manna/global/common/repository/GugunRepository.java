package com.ssafy.manna.global.common.repository;

import com.ssafy.manna.global.common.domain.Gugun;
import com.ssafy.manna.global.common.domain.Sido;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GugunRepository extends JpaRepository<Gugun, Integer> {

    Optional<Gugun> findByNameAndSido(String gugun, Sido sido);
}
