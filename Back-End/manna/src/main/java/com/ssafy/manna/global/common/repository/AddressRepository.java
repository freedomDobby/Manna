package com.ssafy.manna.global.common.repository;

import com.ssafy.manna.global.common.domain.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Integer> {

}
