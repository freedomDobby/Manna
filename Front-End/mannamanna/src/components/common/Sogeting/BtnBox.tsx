import React from "react";
import styled from "styled-components";
import ChooseBtn from "../Sogeting/button/chooseBtn";

const BtnContainer = styled.div`
  height: 5vh;
  width: 12vw;
  //   border: 1px solid red;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ClickCheck = () => {
  console.log("dd");
};

const BtnBox = () => {
  return (
    <BtnContainer>
      <ChooseBtn onClick={ClickCheck}>신청</ChooseBtn>
      <ChooseBtn>신고</ChooseBtn>
      <ChooseBtn>쪽지</ChooseBtn>
    </BtnContainer>
  );
};

export default BtnBox;
