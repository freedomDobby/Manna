import React, { useEffect, useState } from "react";
import { ForgotPasswordLink } from "./LoginStyle";
import { useRecoilState } from "recoil";
import api from "../../../apis/Api";

import {
  RegisterDataState,
  account_emailState,
  genderState,
  profile_nicknameState,
} from "../Register/RegisterState";
// import { useNavigate } from "react-router-dom";
import { RegisterReq } from "../../../apis/Request/Request";
import { RegisterMessageAtom, RegisterModalAtom } from "../../../Recoil/State";
import { JavaScriptKey } from "./ApiKey";

declare global {
  interface Window {
    Kakao: any;
    Auth: any;
    kakao_account: any;
  }
}

const Kakao: React.FC = () => {
  const [userInfo] = useRecoilState(RegisterDataState);
  // const navigate = useNavigate();

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
    const apiKey = JavaScriptKey;

    script.onload = () => {
      window.Kakao.init(apiKey); // Replace with your Kakao App Key
      setIsKakaoInitialized(true);
    };

    document.head.appendChild(script);
  }, []);

  const handleLoginKakao = () => {
    window.Kakao.Auth.login({
      scope:
        "profile_nickname,friends, account_email,gender,age_range,birthday",
      success: (response: any) => {
        console.log(response); // 토큰 정보 받아오기
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res: any) => {
            const kakao_account = res.kakao_account;
            // console.log(kakao_account); // 회원 정보 받아오기
            setProfileNickname(kakao_account.profile.nickname);
            setAccountEmail(kakao_account.email);
            setGender(kakao_account.gender);
            console.log(gender);
            console.log(profileNickname);
            console.log(accountEmail);

            // console.log(gender);
            //로그인 정보 Post보내기
            try {
            } catch (error) {
              console.error(error);
            }
            //   // 로그인이 끝나면 main으로 보내기
            //   // navigate("/main");
          },
          fail: (error: any) => {
            console.log(error);
          },
        });
      },
      fail: (error: any) => {
        console.log(error);
      },
    });
  };
  // const LogoutKakao = () => {
  //   if (!window.Kakao.Auth.getAccessToken()) {
  //     console.log("Already logged out.");
  //     return;
  //   }

  //   window.Kakao.Auth.logout({
  //     success: () => {
  //       window.Kakao.Auth.setAccessToken(null); // 토큰 제거
  //       sessionStorage.clear(); // 세션 제거
  //       localStorage.clear(); // 로컬스토리지 제거
  //       console.log("로그아웃 성공");
  //     },
  //     fail: (error: any) => {
  //       alert("로그아웃 실패: " + error.message);
  //     },
  //   });
  // };

  return (
    <ForgotPasswordLink
      onClick={handleLoginKakao}
      style={{
        color: "yellow",
        // border: "1px solid red",
      }}
    >
      카카오 연동(두번 눌러주세요)
    </ForgotPasswordLink>
  );
};

export default Kakao;
