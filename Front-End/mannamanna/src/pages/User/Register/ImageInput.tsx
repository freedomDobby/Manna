import React from "react";
import {
  ImageContainer,
  ImageTitle,
  ImageMirror,
  InputImage,
} from "./ModalStyle";

interface EnterImageBoxProps {
  title: string;
}

const EnterImageBox: React.FC<EnterImageBoxProps> = ({ title }) => {
  return (
    <ImageContainer>
      <ImageTitle>{title}</ImageTitle>
      <ImageMirror>사진미리보기</ImageMirror>
      <InputImage type="file" />
    </ImageContainer>
  );
};

export default EnterImageBox;
