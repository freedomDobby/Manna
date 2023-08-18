/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import mainImage from "../../../components/common/mainImage.png";

const InnerBox = styled.div`
  // border: 2px solid red;
  height: 100%;
  width: 100%;
  display: flex;
`;

const MidBox = styled.div`
  // border: 3px solid red;
  display: flex;
  height: 100%;
  width: 50%;
`;

//section 4등분
const SmallBox = styled.div`
  // border: 1px solid blue;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SecondBox = styled.div`
  // border: 1px solid green;
  // background-color: #ece7f9;
  background-image: url(${mainImage});
  background-size: 100% 100%;
  height: 120%;
  width: 90%;
  margin-top: 10%;
`;

export const HalfBox = styled.div`
  // border: 1px solid black;
  height: 100%;
  width: 100%;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//메인페이지내 달력 담는 박스
const CanlendarBox = styled.div`
  border: 0.2rem solid #000000;
  height: 80%;
  width: 90%;
  border-radius: 1rem;
  background-color: #f5e3ec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainCanlendarBody = styled.div`
  border: 0.2rem solid #000000;
  background: #ffffff;
  border-radius: 1rem;
  width: 90%;
  height: 100%;
  margin-top: 10%;
`;

export const MainScheduleBody = styled.div`
  // border: 2px solid green;
  width: 50%;
  height: 90%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { InnerBox, SmallBox, MidBox, CanlendarBox, SecondBox };
