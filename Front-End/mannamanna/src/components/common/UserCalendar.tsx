import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import moment from "moment";
import heart from "../../asset/image/calendarheart.png";
import api from "../../apis/Api";
import { idAtom, selectedDateAtom } from "../../Recoil/State";
import { useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";

const CalendarContainer = styled.div`
  // 달력 전체
  .react-calendar {
    // border: 3px solid blue;
    height: 100%;
    border-radius: 10%;
  }
  /* react-calendar__navigation 스타일 */
  // 달력 헤더
  .react-calendar__navigation {
    border-top-left-radius: 39px;
    border-top-right-radius: 39px;
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center; /* 가로 가운데 정렬 */
    align-items: center; /* 세로 가운데 정렬 */
    background: #ffcced;
    div {
      background: #ffcced;
    }
    span {
      font-size: 1.5rem;
      font-weight: bold;
      color: black;
    }
    button {
      background: #f8e3ea;
      border-radius: 0.5rem;
      border: 1px solid #ffffff;
      cursor: pointer;
      margin: 1.5%;
    }
    button:hover {
      border: 1px solid #d9cff4;
    }
  }
  // 달력 몸통
  .react-calendar__viewContainer {
    height: 85%;
  }

  .react-calendar__month-view {
    height: 90%;
  }
  /* react-calendar__navigation 버튼 스타일 */
  .react-calendar__navigation button:disabled {
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background: #f8e3ea;
    border-radius: 0.5rem;
  }

  /* react-calendar__month-view 스타일 */

  .react-calendar__month-view {
    // border: 1px solid red;
    padding: 1.5vh 2vw;
    abbr {
      color: black;
      font-size: 2vh;
      font-weight: normal;
    }
  }

  /* react-calendar__month-view__weekdays 스타일 */
  .react-calendar__month-view__weekdays abbr {
    color: #000000;
    font-size: 3vh;
    font-weight: normal;
    font-family: inherit;
    margin-left: 1.5rem; /* 요일을 오른쪽으로 이동 */
  }

  /* react-calendar__tile 스타일 */
  .react-calendar__tile {
    text-align: center;
    height: 6vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0.3rem;
    margin-right: 0.3rem;
    background: rgba(255, 255, 255, 0.35);
    border-radius: 0.5rem;
    border: solid 0.1rem black;
  }

  /* react-calendar__tile 선택됐을 시 스타일 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: #ffcced;
    border-radius: 0.5rem;
  }

  /* 현재 날짜 스타일 */
  .react-calendar__tile--now,
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #f8e3ea;
    border-radius: 0.5rem;
  }
`;

const MyCalendar = () => {
  const curDate = new Date();
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom); // recoil 상태 사용
  const activeDate: any = moment(selectedDate).format("YYYY-MM-DD");
  const [userId, setId] = useRecoilState(idAtom);

  const {
    data: scheduleList,
    isLoading,
    isError,
  } = useQuery<any>(["scheduleList"], async () => {
    const response = await api.get(`schedule/${userId}`);
    console.log(response.data);
    return response.data;
  });

  const offlineDates =
    scheduleList?.data.offlineSchedule.map((item: any) => item.date) || [];
  const onlineDates =
    scheduleList?.data.onlineSchedule.map((item: any) => item.date) || [];
  const dayList = [...offlineDates, ...onlineDates];
  const addContent = ({ date }: { date: Date }) => {
    if (dayList.find((day) => day === moment(date).format("YYYY-MM-DD"))) {
      return (
        // 하트 이모티콘
        <div
          key={moment(date).format("YYYY-MM-DD")}
          // style={{ border: "1px solid blue" }}
        >
          <img
            src={heart}
            className="diaryImg"
            width="26"
            height="26"
            alt="today is..."
          />
        </div>
      );
    }
    return null;
  };

  const getActiveMonth = (activeStartDate: Date) => {
    console.log("Active Start Date:", activeStartDate);
  };

  const handleDateChange = (value: any) => {
    if (value instanceof Date) {
      const date = value as Date;
      setSelectedDate(date);
    }
  };
  const handleActiveStartDateChange = ({
    activeStartDate,
  }: {
    activeStartDate: Date | null;
  }) => {
    if (activeStartDate) {
      getActiveMonth(activeStartDate);
    }
  };

  return (
    <CalendarContainer style={{ height: "100%" }}>
      <Calendar
        locale="kr"
        onChange={(value, event) => handleDateChange(value)}
        value={selectedDate}
        next2Label={null}
        prev2Label={null}
        formatDay={(locale, date) => moment(date).format("D")}
        tileContent={addContent}
        showNeighboringMonth={false}
        onActiveStartDateChange={handleActiveStartDateChange}
      />
    </CalendarContainer>
  );
};

export default MyCalendar;
