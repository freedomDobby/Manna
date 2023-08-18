// import React from 'react';
import styled from "styled-components";

export const Schadeeeee = styled.div`
  border-radius: 5%;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 70%;
  flexdirection: column;
  display: flex;
  justifycontent: center;
  alignitems: center;
`;

export const HeadSpace = styled.div`
  // border: 1px solid red;
  height: 5vh;
`;

export const SideSpace = styled.div`
  // border: 1px solid red;
  height: 80vh;
`;

export const MidSpace = styled.div`
  // border: 4px solid blue;
  height: 80vh;
`;
//실제적 네모칸!!
export const ScheduleContainerBox = styled.div`
  border: solid 5px black;
  background-color: white;
  width: 140vh;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden; /* 스크롤 내용이 보이도록 추가 */
`;

// 왼쪽 박스
export const ShceduleCenterBox = styled.div`
  // border: 4px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55%;
  height: 100%;
  flex-direction: column;
`;

export const LeftInnerBox = styled.div`
  // border: 1px solid gold;
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const RightInnerBox = styled.div`
  // border: 1px solid green;
  width: 90%;
  height: 80%;
`;

// 달력 품은 박스
export const CalendarContainer = styled.div`
  border: solid 0.4vh black;
  border-radius: 0.5vh;
  width: 98%;
  height: 67 %;
`;

export const GoSogaeting = styled.div`
  color: white;
  fontsize: 4vh;
`;

export const ShceduleStyledButton = styled.button`
  border: solid 0.4vh #ffcced;
  margin: 1px;
  width: 20vh;
  height: 50%;
  color: #ffcced;
  background-color: #ffffff;
  border-radius: 1.5vh;
  font-size: 2.5vh;
  transition: border-color 0.3s, color 0.3s;

  &:hover {
    border-color: #d9cff4;
    color: #d9cff4;
    border: solid 0.3vh;
  }
`;

export const ScheduleContainerSpace = styled.div`
  // border: 4px solid blue;
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScheduleStateBox = styled.div`
  // border: 1px solid blue;
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScheduleState = styled.div`
  // border: 1px solid red;
  fontsize: 3vh;
  // height: 10%;
  // width: 100%;
`;

export const ScheuleListBox = styled.div`
  // border: 1px solid red;
  width: 100%;
  height: 80%;
  overflow: auto; /* 스크롤 속성 추가 */
  border-collapse: collapse;

  &::-webkit-scrollbar {
    width: 0.5vw;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.5vh;
    background: rgba(
      ${parseInt("#f8e3ea".slice(1, 3), 16)},
      ${parseInt("#f8e3ea".slice(3, 5), 16)},
      ${parseInt("#f8e3ea".slice(5, 7), 16)},
      0.7
    );
  }
`;

export const ScheduleUl = styled.table`
  margin-top: 2%;
  width: 100%;
  height: 100%;
`;

export const StyledTableCell = styled.td`
  // border: 1px solid #ffffff;
  font-size: 1.5rem;
  text-align: center;
  // padding: 1.5%;
`;

export const ScheduleCustomBox = styled.div`
  border: solid black 0.4vh;
  display: flex;
  width: 97%;
  height: 95.6%;
  // height: 100%;
  align-items: center;
  margin-bottom: 10px;
  font-size: 2.5vh;
  padding: 5px;
  flex-direction: column;
  background-color: #f8e3ea;
  border-radius: 3px;
  justify-content: space-between;
`;

export const SchelduleStyledButton = styled.button`
  margin: 1px;
  width: 80%;
  height: 5vh;
  color: #ffcced;
  border: solid 0.4vh;
  border-color: #ffcced;
  background-color: #ffffff;
  border-radius: 1.5vh;
  font-size: 2.5vh;
  transition: border-color 0.3s, color 0.3s;

  &:hover {
    border-color: #d9cff4;
    color: #d9cff4;
    border: solid 0.3vh;
  }
`;

export const CanlendarBody = styled.div`
  // border: 2px solid green;
  width: 90%;
  height: 90%;
`;
