import styled from "styled-components";
import { unknown } from "../../../asset/image/unknown.png";

const MostBiggestBox = styled.div`
  border-radius: 5%;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 70%;
  flexdirection: column;
  display: flex;
  justifycontent: center;
  alignitems: center;
`;

const Contain = styled.div`
  // border: 1px solid green;
  width: 100%;
  height: 95%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container2 = styled.div`
  // border: 3px solid red;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TitleBox = styled.div`
  // border: 1px solid purple;
  height: 10%;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageForm = styled.form`
  // border: 1px solid gold;
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
`;

export const EnterLocalBox = styled.div`
  // border: 1px solid blue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60%;
  width: 80%;
  margin: 3%;
`;
export const LocalLabel = styled.label`
  // border: 1px solid purple;
  text-align: center;
  width: 30%;
  font-size: 2.5rem;
`;

const ImageContainer = styled.div`
  border: 3px solid black;
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const ImageTitle = styled.div`
  // border: 1px solid blue;
  height: 10%;
  width: 100%;
  textalign: center;
  fontsize: 1.5rem;
`;

const ImageMirror = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 50%;
  background-image: url(${"unknown"});
  // align-itmes: center;
  // background-color: black;
`;

const InputImage = styled.input`
  // border: 1px solid red;
`;

const EnterImageBtnBox = styled.div`
  // border: 1px solid blue;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20%;
`;

export {
  MostBiggestBox,
  Contain,
  Container2,
  TitleBox,
  ImageForm,
  ImageContainer,
  ImageTitle,
  ImageMirror,
  InputImage,
  EnterImageBtnBox,
};
