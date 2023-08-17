import React, { ChangeEvent, useEffect, useState } from "react";
import { ImageContainer, ImageTitle } from "../User/Register/ModalStyle";
import { useRecoilState } from "recoil";
import { missionPicture1State, missionPicture2State,missionPicture1Url,missionPicture2Url, } from "../../Recoil/State";

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
  const [missionPicture1, setMissionPicture1] = useRecoilState(missionPicture1State);

  const [picture1Url, setPicture1Url] = useRecoilState(missionPicture1Url);
 

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
    console.log("첫번째 사진 올리는중 ");
    if (selectedFile) {
      setMissionPicture1(selectedFile);
      readURL(event.target);
    }
  }
  return (
    <ImageContainer>
      <ImageTitle>{title}</ImageTitle>
      <img
        id="preview1"
        src={picture1Url}
        alt="User1"
        style={{ maxWidth: "100%", maxHeight: "200px" }}
      />
      {picture1Url.substring(picture1Url.lastIndexOf("/") + 1) == "null" ? <input type="file" onChange={EnterMissionPic1} />: <span></span>}
    </ImageContainer>
  );
};
export const EnterMission2: React.FC<EnterMission2Props> = ({
  title,
  coment,
}) => {
  const [missionPicture2, setMissionPicture2] = useRecoilState(missionPicture2State);
  const [picture2Url, setPicture2Url] = useRecoilState(missionPicture2Url);

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
    console.log("두번째 사진 올리는중")
    if (selectedFile) {
      setMissionPicture2(selectedFile);
      readURL(event.target);
    }
  };

  return (
    <ImageContainer>
      <ImageTitle>{title}</ImageTitle>
      <img
        id="preview2"
        src={picture2Url}
        alt="User2"
        style={{ maxWidth: "100%", maxHeight: "200px" }}
      />
    </ImageContainer>
  );
};
