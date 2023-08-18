import React from "react";
import styled from "styled-components";

const ChooseBtn = styled.div`
  height: 3vh;
  width: 3vw;
  background-color: white;
  border-radius: 6vw;
  text-align: center;
  line-height: 3vh;
  cursor: pointer;
  //   color: #f8e3ea;
  //   font-weight: bolder;
  -webkit-text-stroke: 0.2px #ffcced;

  &:hover {
    color: #ffcced;
    border: 1px solid #ffcced;
  }
`;

export default ChooseBtn;
