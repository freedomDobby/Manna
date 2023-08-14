import { useState, ChangeEvent } from "react";
import { ImageContainer, ImageTitle } from "../../Register/ModalStyle";
import { MyPageImageContainer } from "../MyPageModifyStyle";
import { useRecoilState } from "recoil";
import { ChangePicIndexAtom } from "../../../../Recoil/State";
import {
  profilePicture1State,
  profilePicture2State,
  profilePicture3State,
} from "../../Register/RegisterState";

interface ChangeImage1Props {
  title: string;
  coment: string;
}
interface ChangeImage2Props {
  title: string;
  coment: string;
}
interface ChangeImage3Props {
  title: string;
  coment: string;
}

export const ChangeImage1: React.FC<ChangeImage1Props> = ({
  title,
  coment,
}) => {
  const [profilePicture1, setProfilePicture1] =
    useRecoilState(profilePicture1State);
  const [profilePicture2, setProfilePicture2] =
    useRecoilState(profilePicture2State);
  const [profilePicture3, setProfilePicture3] =
    useRecoilState(profilePicture3State);
  const [ChangePicIndex, setChangePicIndex] =
    useRecoilState(ChangePicIndexAtom);

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

  console.log(ChangePicIndex);

  const ChangePic = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      if (ChangePicIndex === 0) {
        setProfilePicture1(selectedFile);
        readURL(event.target);
      } else if (ChangePicIndex === 1) {
        setProfilePicture2(selectedFile);
        readURL(event.target);
      } else {
        setProfilePicture3(selectedFile);
        readURL(event.target);
      }
    }
  };

  return (
    <MyPageImageContainer>
      <ImageTitle>{title}</ImageTitle>
      <img
        id="preview1"
        src=""
        alt="사진"
        style={{ maxWidth: "100%", maxHeight: "200px" }}
      />
      <input type="file" onChange={ChangePic} />
    </MyPageImageContainer>
  );
};
