import React from "react";
import {
  ImageContainer,
  ImageTitle,
  ImageMirror,
  InputImage,
} from "../ModalStyle";
import { useRecoilState } from "recoil";
import {
  priority1State,
  priority2State,
  priority3State,
  profilePicture1State,
} from "../RegisterState";

interface EnterImage1Props {
  title: string;
  coment: string;
}
interface EnterImage2Props {
  title: string;
  coment: string;
}
interface EnterImage3Props {
  title: string;
  coment: string;
}
export const EnterImage1: React.FC<EnterImage1Props> = ({ title, coment }) => {
  const [priority1, setpriority1] = useRecoilState<number>(priority1State);
  const [profilePicture1, setprofilePicture1] = useRecoilState<File | null>(
    profilePicture1State
  );

  const EnterPic1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      setprofilePicture1(selectedFile);
      setpriority1(0);
    }
    // console.log(priority1);
    // console.log(selectedFile);
    // console.log(profilePicture1);
  };

  return (
    <ImageContainer>
      <ImageTitle>{title}</ImageTitle>
      <ImageMirror>{coment}</ImageMirror>
      <InputImage type="file" onChange={EnterPic1} />
    </ImageContainer>
  );
};

export const EnterImage2: React.FC<EnterImage2Props> = ({ title, coment }) => {
  const [priority2, setpriority2] = useRecoilState<number>(priority2State);
  const [profilePicture2, setprofilePicture2] = useRecoilState<File | null>(
    profilePicture1State
  );

  const EnterPic2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      setprofilePicture2(selectedFile);
      setpriority2(1);
    }
    // console.log(priority2);
    // console.log(profilePicture2);
  };

  return (
    <ImageContainer>
      <ImageTitle>{title}</ImageTitle>
      <ImageMirror>{coment}</ImageMirror>
      <InputImage type="file" onChange={EnterPic2} />
    </ImageContainer>
  );
};

export const EnterImage3: React.FC<EnterImage3Props> = ({ title, coment }) => {
  const [priority3, setpriority3] = useRecoilState<number>(priority3State); // Set the type to number
  const [profilePicture3, setprofilePicture3] = useRecoilState<File | null>(
    profilePicture1State
  );

  const EnterPic3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      setprofilePicture3(selectedFile);
      setpriority3(2);
    }
    // console.log(priority3);
    // console.log(profilePicture3);
  };

  return (
    <ImageContainer>
      <ImageTitle>{title}</ImageTitle>
      <ImageMirror>{coment}</ImageMirror>
      <InputImage type="file" onChange={EnterPic3} />
    </ImageContainer>
  );
};
