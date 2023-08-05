import React, { useEffect, useState } from "react";
import { ForgotPasswordLink } from "./LoginStyle";

declare global {
  interface Window {
    Kakao: any;
    Auth: any;
  }
}

const Kakao: React.FC = () => {
  const [isKakaoInitialized, setIsKakaoInitialized] = useState(false);

  useEffect(() => {
    // Load and initialize Kakao SDK
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    script.onload = () => {
      window.Kakao.init("dd25fb1ab1355cc42fcc658c13182ed6");
      setIsKakaoInitialized(true);
    };

    document.head.appendChild(script);
  }, []);

  const LoginKakao = () => {
    window.Kakao.Auth.login({
      scope: "account_email,gender,age_range,birthday",
      success: function (response: any) {
        console.log(response);
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res: any) => {
            const kakao_account = res.kakao_account;
            console.log(kakao_account);
          },
        });
      },
      fail: function (error: any) {
        console.log(error);
      },
    });
  };
  const LogoutKakao = () => {
    if (!isKakaoInitialized) {
      console.log("SDK not initialized.");
      return;
    }
    window.Kakao.API.request({
      url: "/v1/user/unlink",
      success: function (response: any) {
        console.log(response);
        //callback(); //연결끊기(탈퇴)성공시 서버에서 처리할 함수
        window.location.href = "/";
      },
      fail: function (error: any) {
        console.log("탈퇴 미완료");
        console.log(error);
      },
    });
  };

  return (
    <div>
      <ForgotPasswordLink onClick={LoginKakao} style={{ color: "yellow" }}>
        카카오 로그인
      </ForgotPasswordLink>
      <ForgotPasswordLink
        onClick={LogoutKakao}
        style={{ display: isKakaoInitialized ? "none" : "block" }}
      >
        카카오 로그아웃
      </ForgotPasswordLink>
    </div>
  );
};

export default Kakao;
