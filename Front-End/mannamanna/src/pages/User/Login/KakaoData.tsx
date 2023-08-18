import React, { useEffect, useState } from "react";
import { ForgotPasswordLink, StyledButton } from "./LoginStyle";
import { useRecoilState } from "recoil";
// import api from "../../../apis/Api";
import kakao from "../../../asset/image/kakao.png";

import {
  RegisterDataState,
  account_emailState,
  genderState,
  profile_nicknameState,
} from "../Register/RegisterState";

// import { RegisterReq } from "../../../apis/Request/Request";
import { RegisterMessageAtom, RegisterModalAtom } from "../../../Recoil/State";
import { Answer, AnswerBox, SmallInputBox } from "../Register/RegisterStyle";
import { EnterImage } from "../Register/Image/EnterImageModal";
import { Button } from "@mui/material";

declare global {
  interface Window {
    Kakao: any;
    Auth: any;
    kakao_account: any;
  }
}

const KaKaoData: React.FC = () => {
  const [userInfo] = useRecoilState(RegisterDataState);
  const [open, setOpen] = useRecoilState(RegisterModalAtom);
  const [message, setMessage] = useRecoilState(RegisterMessageAtom);

  const [isKakaoInitialized, setIsKakaoInitialized] = useState(false);
  const [profileNickname, setProfileNickname] = useRecoilState(
    profile_nicknameState
  );
  const [accountEmail, setAccountEmail] = useRecoilState(account_emailState);
  const [gender, setGender] = useRecoilState(genderState);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    const apiKey = "545883b1d8c45952d3fe010059bb3d4f";

    script.onload = () => {
      window.Kakao.init(apiKey);
      setIsKakaoInitialized(true);
    };

    document.head.appendChild(script);
  }, []);

  const handleLoginKakao = async () => {
    try {
      const response = await window.Kakao.Auth.login({
        scope:
          "profile_nickname,friends, account_email,gender,age_range,birthday",
      });
      console.log(response);

      const res = await window.Kakao.API.request({
        url: "/v2/user/me",
      });

      const kakao_account = res.kakao_account;
      console.log(kakao_account);

      setProfileNickname(kakao_account.profile.nickname);
      setAccountEmail(kakao_account.email);
      setGender(kakao_account.gender);

      console.log(gender);
      console.log(profileNickname);
      console.log(accountEmail);

      // Perform your additional asynchronous operations here
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AnswerBox>
      <Answer>카카오 연동</Answer>
      <Button
        sx={{
          margin: "1px",
          width: "10vw",
          height: " 7vh",
          color: "#ffcced",
          border: "solid 0.4vh",
          borderColor: "#ffcced",
          backgroundColor: "#ffffff",
          borderRadius: "1.5vh",
          fontSize: " 2.5vh",
          // transition: " border-color 0.3s color 0.3s",
          "&:hover": {
            borderColor: "#d9cff4",
            color: "#d9cff4",
            border: "solid 0.3vh",
            backgroundColor: "white",
          },
        }}
        variant="contained"
        onClick={handleLoginKakao}
      >
        연동
      </Button>
    </AnswerBox>
  );
};

export default KaKaoData;
