package com.ssafy.manna.schedule.repository;

import com.ssafy.manna.schedule.domain.ReservePlace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ReservePlaceRepository extends JpaRepository<ReservePlace, Integer> {


    //reserve address id로 가져오기
    Optional<ReservePlace> findById(Integer id);

    List<ReservePlace> findAllBySidoAndGugunAndCategory(String sido, String gugun, String category);

    @Query("SELECT rp FROM ReservePlace rp " +
            "WHERE rp.latitude BETWEEN :minLat AND :maxLat " +
            "AND rp.longitude BETWEEN :minLon AND :maxLon")
    List<ReservePlace> findNearbyReservePlaces(@Param("minLat") double minLat,
                                               @Param("maxLat") double maxLat,
                                               @Param("minLon") double minLon,
                                               @Param("maxLon") double maxLon);
}
