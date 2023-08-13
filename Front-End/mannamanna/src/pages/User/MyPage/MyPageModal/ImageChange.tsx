import { useState, ChangeEvent } from "react";
import { ImageContainer, ImageTitle } from "../../Register/ModalStyle";
import { MyPageImageContainer } from "../MyPageModifyStyle";

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

  const ChangePic1 = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setProfilePicture1(selectedFile);
      readURL(event.target);
    }
  };

  return (
    <MyPageImageContainer>
      <ImageTitle>{title}</ImageTitle>
      <img
        id="preview1"
        src=""
        alt="사진1"
        style={{ maxWidth: "100%", maxHeight: "200px" }}
      />
      <input type="file" onChange={ChangePic1} />
    </MyPageImageContainer>
  );
};
