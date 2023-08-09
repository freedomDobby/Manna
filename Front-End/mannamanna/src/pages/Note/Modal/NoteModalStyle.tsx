import styled from "styled-components";
/////////////////삭제모달

const RemoveModalContent = styled.div`
  border-radius: 6%;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 23vw;
  height: 50%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RemoveModalContainer = styled.div`
  // border: 1px solid red
  // background-color: red;
  width: 25%;
`;

const RemoveProfileContainer = styled.div`
  // border: 1px solid red;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-top: 3%;
`;

const RemoveInfoContainer = styled.div`
  // border: 1px solid green;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center; // 쪽지삭제땐 없어야함
`;
const RemoveBtnContainer = styled.div`
  // border: 1px solid green;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//////////////////////////////////////////////////////////////////////
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
  // margin-top: 3%;
`;

const ProfileBox = styled.div`
  border: 2px solid black;
  width: 37%;
  height: 100%;
  border-radius: 50%;
`;
const InfoContainer = styled.div`
  // border: 1px solid green;
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center; // 쪽지삭제땐 없어야함
`;

//이름 담는 큰 컨테이너
const NameInfo = styled.div`
  border: 1px silid black;
  width: 100%;
  height: 25%;
`;
// 키, 나이
const Info1 = styled.div`
  border: 1px silid black;
  width: 100%;
  height: 25%;
`;
//직업 mbti
const Info2 = styled.div`
  border: 1px silid black;
  width: 100%;
  height: 25%;
`;
//자기소개
const SelfPrInfo = styled.div`
  border: 1px silid black;
  width: 100%;
  height: 25%;
`;

const BtnContainer = styled.div`
  // border: 1px solid green;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: top;
`;

export {
  ModalContent,
  ModalContainer,
  ProfileContainer,
  InfoContainer,
  BtnContainer,
  ProfileBox,
  RemoveModalContent,
  RemoveModalContainer,
  RemoveProfileContainer,
  RemoveInfoContainer,
  RemoveBtnContainer,
  NameInfo,
  Info1,
  Info2,
  SelfPrInfo,
};
