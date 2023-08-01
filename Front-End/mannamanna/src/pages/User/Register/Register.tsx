import React, { useState } from "react";
import { StyledButton } from "../Login/LoginStyle";
import signup from "../../../asset/image/signup.png";
import GoBackIcon from "../../../components/common/GoBackIcon";
import Logo from "../../../components/common/Logo";
import {
  LogoBox,
  SmallInputBox,
  InnerBox,
  SideBox,
  MainBox,
  SideInnerBox,
  MainLogoBox,
  SignUP,
  MainMidBox,
  InputBox,
  AnswerBox,
  Answer,
} from "./RegisterStyle";
import MacBox from "../../../components/common/MacBox1";
import { useNavigate } from "react-router-dom";
import Question from "./AnswerBox";

const Register = () => {
  const [userName, setUserName] = useState<string>("");
  const [userTel, setUserTel] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [userPwd, setUserPwd] = useState<string>("");
  const [UserAddress, setUserAddress] = useState<string>("");

  const navigate = useNavigate();
  const GoRegisterDetail = () => {
    navigate("/registerDetail");
  };

  const handleInputChange = (name: string, value: string) => {
    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "userTel":
        setUserTel(value);
        break;
      case "userId":
        setUserId(value);
        break;
      case "userPwd":
        setUserPwd(value);
        break;
      case "UserAddress":
        setUserAddress(value);
        break;
      default:
        // 필요한 경우 다른 인풋 필드 처리
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 여기서 폼 데이터를 서버로 전송하거나 필요한 작업을 수행합니다.
    console.log("Form submitted:", {
      userName,
      userTel,
      userId,
      userPwd,
      UserAddress,
    });
    GoRegisterDetail(); // GoRegisterDetail 함수를 사용하여 페이지 이동
  };

  return (
    <div>
      <LogoBox>
        <Logo />
      </LogoBox>
      <InnerBox>
        <SideBox>
          <SideInnerBox>
            <GoBackIcon />
          </SideInnerBox>
          <SideInnerBox />
          <SideInnerBox />
        </SideBox>
        <MainBox>
          <MainLogoBox>
            <SignUP src={signup} />
          </MainLogoBox>
          <MainMidBox>
            <MacBox
              width="95%"
              height="95%"
              color1="#bcd3ff"
              color2="#ffffff"
              alignItems="center"
            >
              <InputBox onSubmit={handleSubmit} alignItems="center">
                <div
                  style={{
                    textAlign: "center",
                    marginLeft: "10%",
                    padding: "0%",
                  }}
                >
                  <SmallInputBox>
                    <AnswerBox>
                      <Answer>프로필사진 등록</Answer>
                      <StyledButton style={{ height: "100%" }}>
                        사진 등록하기
                      </StyledButton>
                    </AnswerBox>
                  </SmallInputBox>

                  <Question
                    question="이름을 입력해주세요"
                    Type="text"
                    Id="UserName"
                    placeholder="이름"
                    onChange={(value) => handleInputChange("userName", value)}
                  />
                  <Question
                    question="전화번호를 입력해주세요"
                    Type="text"
                    Id="UserNum"
                    placeholder="010-0000-0000"
                    onChange={(value) => handleInputChange("userTel", value)}
                  />
                  <Question
                    question="아이디를 입력해주세요"
                    Type="text"
                    Id="UserId"
                    placeholder="아이디"
                    onChange={(value) => handleInputChange("userId", value)}
                  />
                  <Question
                    question="비밀번호를 입력해주세요"
                    Type="text"
                    Id="UserPw"
                    placeholder="비밀번호"
                    onChange={(value) => handleInputChange("userPwd", value)}
                  />

                  <Question
                    question="비밀번호 확인"
                    Type="text"
                    Id="UserPw"
                    placeholder="비밀번호 확인"
                    onChange={(value) => handleInputChange("userPwd", value)}
                  />

                  <SmallInputBox>
                    <AnswerBox>
                      <Answer>사는 지역을 선택해주세요</Answer>
                      <StyledButton style={{ height: "100%" }}>
                        지역 찾기
                      </StyledButton>
                    </AnswerBox>
                  </SmallInputBox>
                </div>

                <StyledButton type="submit">다음</StyledButton>
              </InputBox>
            </MacBox>
          </MainMidBox>
        </MainBox>
        <SideBox></SideBox>
      </InnerBox>
    </div>
  );
};

export default Register;
