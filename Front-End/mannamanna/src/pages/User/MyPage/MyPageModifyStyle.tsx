import styled from "styled-components";

export const SideBox = styled.div`
  // border: 1px solid blue;
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ProfileBox = styled.div`
  // border: 1px solid blue;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProFileStyle = styled.div`
  // border: 1px solid red;
  width: 45%;
  height: 90%;
  background: black;
  border-radius: 50%;
  opacity: 1;
  margin: 2vh;
  background-size: cover;
`;

export const NameBox = styled.div`
  // border: 1px solid blue;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BasicInformation = styled.div`
  // border: 1px solid red;
  width: 100%;
  height: 50%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BasicTitle = styled.div`
  // border: 1px solid red;
  width: 90%;
  height: 10%;
  margin: 1vh;
`;

export const ModifySpace = styled.div`
  // border: 1px solid blue;
  width: 100%;
  height: 25%;
  display: flex;
  justifycontent: space-around;
  alignitems: center;
`;

export const ModifyBox = styled.div`
  border: solid 0.5vh black;
  width: 90%;
  height: 90%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2vh;
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3vw;
`;

interface ModifyWhatProps {
  text: string;
}

export const ModifyWhat = ({ text }: ModifyWhatProps) => {
  return <ModifyTitle>{text}</ModifyTitle>;
};

export const ModifyTitle = styled.div`
  // border: 1px solid green;
  width: 20%;
  height: 100%;
  display: flex;
  padding-left: 2.5%;
  justify-content: start;
  align-items: center;
`;

export const DetailInfomation = styled.div`
  // border: 1px solid red;
  width: 100%;
  height: 35%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PictureInfomation = styled.div`
  // border: 1px solid red;
  // background-color: green;
  width: 100%;
  height: 50%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModifyModal = styled.div`
  // border: 1px solid red;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModifyModal1 = styled.div`
  // border: 1px solid red;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModifySelfPr = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModifySave = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailSpace = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin: 1vh;
`;

export const ChangePictureModal = styled.div`
  border-radius: 6%;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 60vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChangeBox = styled.div`
  // border: 1px solid blue;
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyPageImageForm = styled.form`
  // border: 1px solid gold;
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
`;

export const MyPageImageContainer = styled.div`
  border: 3px solid black;
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
`;
