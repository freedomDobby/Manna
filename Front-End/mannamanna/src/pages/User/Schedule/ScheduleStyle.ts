// import React from 'react';
import { style } from "@mui/system";
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

export const ScheduleContainerBox = styled.div`
  border: solid 5px black;
  background-color: white;
  width: 140vh;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ShceduleCenterBox = styled.div`
  border: 1px solid purple;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

export const CalendarContainer = styled.div`
  border: solid 0.4vh purple;
  borderradius: 0.5vh;
  width: 76vh;
  height: 45vh;
`;

export const GoSogaeting = styled.div`
  color: white;
  fontsize: 4vh;
`;

export const ShceduleStyledButton = styled.button`
  margin: 1px;
  margintop: 1vh;
  width: 20vh;
  height: 7vh;
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

export const ScheduleState = styled.div`
  border: 1px solid red;
  fontsize: 3vh;
`;
