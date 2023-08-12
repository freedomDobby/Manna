import React, { ChangeEvent, useState } from "react";
import { ImageContainer, ImageTitle } from "../User/Register/ModalStyle";
import { useRecoilState } from "recoil";

interface EnterMission1Props {
  title: string;
  coment: string;
}
interface EnterMission2Props {
  title: string;
  coment: string;
}

export const EnterMission1: React.FC<EnterMission1Props> = ({
  title,
  coment,
}) => {
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

  const EnterMissionPic1 = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      readURL(event.target);
    }
  };

  return (
    <ImageContainer>
      <ImageTitle>{title}</ImageTitle>
      <img
        id="preview1"
        src=""
        alt="User1"
        style={{ maxWidth: "100%", maxHeight: "200px" }}
      />
      <input type="file" onChange={EnterMissionPic1} />
    </ImageContainer>
  );
};
export const EnterMission2: React.FC<EnterMission2Props> = ({
  title,
  coment,
}) => {
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

  const EnterMissionPic2 = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      readURL(event.target);
    }
  };

  return (
    <ImageContainer>
      <ImageTitle>{title}</ImageTitle>
      <img
        id="preview2"
        src=""
        alt="User2"
        style={{ maxWidth: "100%", maxHeight: "200px" }}
      />
      <input type="file" onChange={EnterMissionPic2} />
    </ImageContainer>
  );
};
