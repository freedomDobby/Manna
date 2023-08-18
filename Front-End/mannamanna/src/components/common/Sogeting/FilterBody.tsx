import React from "react";
import styled from "styled-components";
import SelectionObj1 from "./Selection/Selection1";
import SelectionObj2 from "./Selection/Selection2";
import SelectionObj3 from "./Selection/Selection3";
import SelectionObj4 from "./Selection/Selection4";
import { StyledButton } from "../../../pages/User/Login/LoginStyle";

const FilterBody = styled.div`
  height: 55vh;
  width: 12vw;
  border: solid black 0.4rem;
  // background-color: white;
  border-radius: 5vh;
`;
const UpBar = styled.div`
  height: 3.5vh;
  width: 12vw;
  background-color: pink;
  border-top-right-radius: 5vw;
  border-top-left-radius: 5vw;
  border-bottom: solid black 0.4rem;
`;

const Box = styled.form`
  height: 46.7vh;
  width: 12vw;
  display: flex;
  flex-direction: column;
`;

const DownBar = styled.div`
  height: 3.5vh;
  width: 12vw;
  background-color: pink;
  border-bottom-right-radius: 5vw;
  border-bottom-left-radius: 5vw;
  border-top: solid black 0.4rem;
`;

const Filter = () => {
  return (
    <FilterBody>
      <UpBar></UpBar>
      <Box>
        <SelectionObj1 />
        <SelectionObj2 />
        <SelectionObj3 />
        <SelectionObj4 />
      </Box>
      <DownBar></DownBar>
    </FilterBody>
  );
};

export default Filter;
