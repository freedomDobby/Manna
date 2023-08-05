import React, { useEffect } from "react";
import { ForgotPasswordLink } from "./LoginStyle";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Kakao: React.FC = () => {
  useEffect(() => {
    // Load and initialize Kakao SDK
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    script.onload = () => {
      window.Kakao.init("545883b1d8c45952d3fe010059bb3d4f");
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

  return (
    <div>
      <ForgotPasswordLink onClick={LoginKakao} style={{ color: "yellow" }}>
        카카오 로그인
      </ForgotPasswordLink>
    </div>
  );
};

export default Kakao;

// Define your actual REST_API_KEY, JAVASCRIPT_KEY, and REDIRECT_URI here
