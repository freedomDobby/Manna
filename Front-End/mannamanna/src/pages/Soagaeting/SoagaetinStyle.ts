// import React from "react";
import styled from "styled-components";
import profile from "../../components/common/Sogeting/DummyImage.jpg";

const ProfileContaine = styled.div`
  // border: solid 2px red;
  height: 40vh;
  // margin:3vh;
  width: 18vw;
  padding: 0.5vw;
`;

const Profile = styled.div`
  // background-image: url(${profile});
  height: 40vh;
  width: 18vw;
  // background-color: white;
  border-radius: 1.5vw;
  background-size: 40vh 20vw;
  position: relative;
  z-index: 3;
  &:hover {
    z-index: 0;
  }
`;
const UnderBar = styled.div`
  height: 7vh;
  width: 18vw;
  // background-color: red;
  background-color: rgba(255, 255, 255, 0.6);
  border-bottom-right-radius: 1.5vw;
  border-bottom-left-radius: 1.5vw;
  // border-top: solid black 0.4rem;
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   &:hover {
  //     height: 40vh;
  //     border-top-right-radius: 1.5vw;
  //     border-top-left-radius: 1.5vw;
  //   }

  // ${Profile}:hover & {
  //   display: none;
  // }
`;

const DetailProfile = styled.div`
  // border: 1px solid red;
  border-top-left-radius: 1.5vw;
  border-top-right-radius: 1.5vw;
  height: 33%;
  position: absolute;
  width: 18vw;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 2;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Profile}:hover & {
    z-index: 30000;
  }
`;

const DetailText = styled.div`
  // border: 1px solid red;
  border-radius: 1.5vw;
  height: 60%;
  width: 13vw;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const DetailBox1 = styled.div`
  // border: 1px solid red;
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DetailBox2 = styled.div`
  // border: 1px solid red;
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DetailInfo = styled.div`
  // border: 1px solid red;
`;

const Online = styled.div`
  //   border: 1px solid black;
  height: 5vh;
  width: 6vw;
  display: flex;
`;

export {
  DetailText,
  ProfileContaine,
  UnderBar,
  Profile,
  Online,
  DetailProfile,
};

export const ImageContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
`;

export const BtnContainer = styled.div`
  // border: solid 1px orange;
  height: 87vh;
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NearPeople = styled.div`
  // border: solid 3px black;
  height: 87vh;
  width: 45vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 0%;
`;

export const MidSpace = styled.div`
  // border: solid 1px red;
  height: 87vh;
  width: 13vw;
`;

export const SelectPeople = styled.div`
  // border: solid 1px green;
  height: 87vh;
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SelectSpace = styled.div`
  // border: solid 1px red;
  height: 87vh;
`;
