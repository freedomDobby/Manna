import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BigContainer,
  CenteredDiv,
  Content,
  ContentBlue,
  ContentLogo,
  //   textandBtnContainer,
} from "./LandingStyle";

import Logo from "../../components/common/Logo";
import start from "../../asset/image/start.png";

const LandingPage = () => {
  const navigate = useNavigate();

  const GoLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <div style={{ height: "10vh", alignItems: "center" }}>
        <Logo />
      </div>

      <CenteredDiv
        style={{
          border: "1px solid blue",
          height: "90vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ border: "1px solid black" }}>
            <BigContainer>
              <ContentBlue>부담</ContentBlue>
              <Content>없이 만나는</Content>
            </BigContainer>
            <Content>새로운 인연의 시작</Content>
            <ContentLogo>맞나?만나!</ContentLogo>
          </div>
          <div>
            <img
              src={start}
              alt="Start"
              style={{
                marginTop: "10vh",
                maxWidth: "80vh",
                maxHeight: "100vh",
                cursor: "pointer",
              }}
              onClick={GoLogin}
            />
          </div>
        </div>
      </CenteredDiv>
    </div>
  );
};

export default LandingPage;
