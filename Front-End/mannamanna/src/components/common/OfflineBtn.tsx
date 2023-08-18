import React from "react";
import styled from "styled-components";
import Brightness1Icon from "@mui/icons-material/Brightness1";

const Offline = styled.div`
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

const OfflineBox = () => {
  return (
    <Offline>
      <Brightness1Icon sx={{ color: "#ff0000" }}></Brightness1Icon>
      <p style={{ color: "#ff0000" }}>오프라인</p>
    </Offline>
  );
};

export default OfflineBox;
