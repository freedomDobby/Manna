import React, { ChangeEvent, useState } from "react";
import {
  ImageContainer,
  ImageTitle,
  ImageMirror,
  InputImage,
} from "../ModalStyle";
import { useRecoilState } from "recoil";
import {
  priority3State,
  profilePicture1State,
  profilePicture2State,
  profilePicture3State,
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
  const [profilePicture1, setProfilePicture1] = useState<File | null>(null);

  const readURL = (input: HTMLInputElement) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const previewElement = document.getElementById(
          "preview1"
        ) as HTMLImageElement;
        if (previewElement) {
          previewElement.src = e.target?.result as string;
        }
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      const previewElement = document.getElementById(
        "preview1"
      ) as HTMLImageElement;
      if (previewElement) {
        previewElement.src = "";
      }
    }
  };

  const EnterPic1 = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setProfilePicture1(selectedFile);
      readURL(event.target);
    }
  };

  return (
    <ImageContainer>
      <ImageTitle>{title}</ImageTitle>
      <img
        id="preview1"
        src=""
        alt="베스트 사진"
        style={{ maxWidth: "100%", maxHeight: "200px" }}
      />
      <input type="file" onChange={EnterPic1} />
    </ImageContainer>
  );
};

export const EnterImage2: React.FC<EnterImage2Props> = ({ title, coment }) => {
  const [profilePicture2, setProfilePicture2] = useState<File | null>(null);

  const readURL = (input: HTMLInputElement) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const previewElement = document.getElementById(
          "preview2"
        ) as HTMLImageElement;
        if (previewElement) {
          previewElement.src = e.target?.result as string;
        }
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      const previewElement = document.getElementById(
        "preview2"
      ) as HTMLImageElement;
      if (previewElement) {
        previewElement.src = "";
      }
    }
  };

  const EnterPic2 = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setProfilePicture2(selectedFile);
      readURL(event.target);
    }
  };

  return (
    <ImageContainer>
      <ImageTitle>{title}</ImageTitle>
      <img
        id="preview2"
        src=""
        alt="사진 2"
        style={{ maxWidth: "100%", maxHeight: "200px" }}
      />
      <input type="file" onChange={EnterPic2} />
    </ImageContainer>
  );
};
export const EnterImage3: React.FC<EnterImage3Props> = ({ title, coment }) => {
  const [profilePicture3, setProfilePicture3] = useState<File | null>(null);

  const readURL = (input: HTMLInputElement) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const previewElement = document.getElementById(
          "preview3"
        ) as HTMLImageElement;
        if (previewElement) {
          previewElement.src = e.target?.result as string;
        }
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      const previewElement = document.getElementById(
        "preview3"
      ) as HTMLImageElement;
      if (previewElement) {
        previewElement.src = "";
      }
    }
  };

  const EnterPic3 = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setProfilePicture3(selectedFile);
      readURL(event.target);
    }
  };

  return (
    <ImageContainer>
      <ImageTitle>{title}</ImageTitle>
      <img
        id="preview3"
        src=""
        alt="사진 3"
        style={{ maxWidth: "100%", maxHeight: "200px" }}
      />
      <input type="file" onChange={EnterPic3} />
    </ImageContainer>
  );
};
