import styled from "styled-components";
import { MyPageDataState } from "./MyPageState";
import { useRecoilState, useRecoilValue } from "recoil";

export const MileageBox = styled.div`
  width: 70%;
  height: 70%;
  background: white;
  border: solid 0.5vh black;
  border-radius: 2vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3vw;
`;

export const LeftStyle = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  margin: 1vh 3vw;
`;

export const RightStyle = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-end;
  margin: 1vh 3vw;
`;

export const MyPageContainerBox = styled.div`
  border: solid 5px black;
  background-color: white;
  width: 140vh;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ModifyPic = styled.div`
  border: solid 0.5vh black;
  width: 90%;
  height: 90%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2vh;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.3vw;
`;

export const PictureBox = styled.div`
  border: solid 1px black;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-size: cover;
  background-position: center;
`;

export const PictureContainer = styled.div`
  // border: 1px solid red;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
