import styled from "styled-components";

const ModalContent = styled.div`
  border-radius: 5%;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25vw;
  height: 70%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 30%;
`;

const ProfileContainer = styled.div`
  // border: 1px solid red;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
`;

const ProfileBox = styled.div`
  border: 2px solid black;
  width: 37%;
  height: 100%;
  border-radius: 50%;
`;
const InfoContainer = styled.div`
  border: 1px solid green;
  width: 100%;
  height: 55%;
`;
const BtnContainer = styled.div`
  // border: 1px solid green;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  ModalContent,
  ModalContainer,
  ProfileContainer,
  InfoContainer,
  BtnContainer,
  ProfileBox,
};
