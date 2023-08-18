import styled from "styled-components";
import React, { ReactNode } from "react";

interface InputBoxProps {
  children: ReactNode;
  width: string;
  height: string;
  color1: string;
  color2: string;
  flexDirection: string;
}

function CustomBox({
  children,
  width,
  height,
  color1,
  color2,
  flexDirection,
}: InputBoxProps) {
  let CustomInputBox = styled.div`
    display: flex;
    border: solid ${color1} 0.4vh;
    width: ${width};
    height: ${height};
    align-items: center;
    margin-top: 2vh;
    margin-bottom: 10px;
    font-size: 2.5vh;
    padding: 5px;
    flex-direction: ${flexDirection};
    background-color: ${color2};
    background-color: rgba(
      ${parseInt(color2.slice(1, 3), 16)},
      ${parseInt(color2.slice(3, 5), 16)},
      ${parseInt(color2.slice(5, 7), 16)},
      0.68
    );
    border-radius: 3px;
    justify-content: space-between; /* 두 개의 요소가 양쪽 끝에 배치되도록 설정 */
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.5vw;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 0.5vh;
      background: rgba(
        ${parseInt(color2.slice(1, 3), 16)},
        ${parseInt(color2.slice(3, 5), 16)},
        ${parseInt(color2.slice(5, 7), 16)},
        0.7
      );
    }
  `;

  return <CustomInputBox>{children}</CustomInputBox>;
}

export default CustomBox;
