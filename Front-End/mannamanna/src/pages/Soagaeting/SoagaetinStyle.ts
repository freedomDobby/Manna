// import React from "react";
import styled from "styled-components";
import profile from "../../components/common/Sogeting/DummyImage.jpg";

const ProfileContaine = styled.div`
  // border: solid 2px red;
  height: 40vh;
  // margin:3vh;
  width: 20vw;
  padding: 0.5vw;
`;

const Profile = styled.div`
  height: 40vh;
  width: 20vw;
  // background-color: white;
  border-radius: 1.5vw;
  background-image: url(${profile});
  background-size: 40vh 20vw;
  position: relative;
  z-index: 3;
  &:hover {
    z-index: 0;
  }
`;
const UnderBar = styled.div`
  height: 7vh;
  width: 20vw;
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

  ${Profile}:hover & {
    display: none;
  }
`;

const DetailProfile = styled.div`
  border-radius: 1.5vw;
  height: 40vh;
  position: absolute;
  width: 20vw;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 2;
  text-align: center;
  align-item: center;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Profile}:hover & {
    z-index: 30000;
  }
`;

const DetailText = styled.div`
  border-radius: 1.5vw;
  height: 27vh;
  width: 13vw;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Online = styled.div`
  height: 5vh;
  width: 6vw;
  //   border: 1px solid black;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:3vh;
`;