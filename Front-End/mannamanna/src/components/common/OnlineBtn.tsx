import React from "react";
import styled from "styled-components";
import Brightness1Icon from "@mui/icons-material/Brightness1";

const OnlineBtn = styled.div`
  // border: 1px solid black;
  height: 5vh;
  width: 6vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #f8e3ea;
  font-weight: bolder;
  //   -webkit-text-stroke: 1px #0cd820;
`;

const OnlineBox = () => {
  return (
    <OnlineBtn>
      <Brightness1Icon sx={{ color: "#0cd820" }}></Brightness1Icon>
      <p style={{ color: "#0cd820" }}>온라인</p>
    </OnlineBtn>
  );
};

export default OnlineBox;
