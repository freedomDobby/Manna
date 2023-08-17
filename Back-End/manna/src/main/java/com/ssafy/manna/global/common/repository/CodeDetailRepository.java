package com.ssafy.manna.global.common.repository;

import com.ssafy.manna.global.common.domain.CodeDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CodeDetailRepository extends JpaRepository<CodeDetail, Long> {

    @Query("SELECT cd FROM CodeDetail cd JOIN cd.code c WHERE c.id = 'M' ORDER BY RAND() LIMIT 6")
    List<CodeDetail> findRandomTop6ById(String id);

    @Query("SELECT cd FROM CodeDetail cd JOIN cd.code c WHERE c.id = 'T' ORDER BY RAND() LIMIT 1")
    CodeDetail findRandomById(String id);


}
