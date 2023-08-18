package com.ssafy.manna.meeting.repository;

import com.ssafy.manna.meeting.domain.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MeetingRepository extends JpaRepository<Meeting, Integer> {

}
