import React from "react";
import { useNavigate } from "react-router-dom";
import { CenteredDiv, Content } from "./LandingStyle";
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
          height: "90vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Content>
          부담없이 만나는 <br />
          새로운 인연의 시작
          <br />
          맞나?만나!
        </Content>
        <img
          src={start}
          alt="Start"
          style={{ marginTop: "10vh", maxWidth: "80vh", maxHeight: "100vh" }}
          onClick={GoLogin}
        ></img>
      </CenteredDiv>
    </div>
  );
};

export default LandingPage;
