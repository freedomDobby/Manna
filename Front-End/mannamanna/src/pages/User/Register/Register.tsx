// import React from 'react';
import React, { useState, useRef } from "react";
import { StyledButton } from "../Login/LoginStyle";
import signup from "../../../asset/image/signup.png";
import GoBackIcon from "../../../components/common/GoBackIcon";
import Logo from "../../../components/common/Logo";
import IntroduceModal from "../Register/IntroduceModal";
import {
  LogoBox,
  SmallInput,
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
import InputSlider from "../../../components/common/slider";
import MacBox from "../../../components/common/MacBox1";
import { useNavigate } from "react-router-dom";
import Question from "./AnswerBox";
// import { Profile } from "../../../apis/Request/Request";

const Register = () => {
  const navigate = useNavigate();
  const GoRegisterDetail = () => {
    navigate("/registerDetail");
  };

  const handleNextButtonClick = () => {
    GoRegisterDetail();
    // RegisterFunction();
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
              <InputBox alignItems="center">
                <div
                  style={{
                    textAlign: "center",
                    marginLeft: "10%",
                    padding: "0%",
                  }}
                >
                  <Question
                    question="이름"
                    Type="text"
                    Id="UserName"
                    placeholder="이름"
                    checkBtn="이름 확인"
                  />

                  <Question
                    question="전화번호"
                    Type="text"
                    Id="UserNum"
                    placeholder="전화번호"
                    checkBtn="전화번호 확인"
                  />

                  <Question
                    question="태어난 년도"
                    Type="number"
                    Id="UserYear"
                    placeholder="태어난 년도"
                    checkBtn="태어난 해 확인"
                  />

                  <Question
                    question="아이디"
                    Type="text"
                    Id="UserId"
                    placeholder="아이디"
                    checkBtn="아이디 확인"
                  />

                  <SmallInputBox>
                    <AnswerBox>
                      <Answer>비밀번호를 적어주세요</Answer>
                      <SmallInput placeholder="비밀번호 입력칸"></SmallInput>
                    </AnswerBox>
                  </SmallInputBox>

                  <Question
                    question="비밀번호 확인"
                    Type="text"
                    Id="UserPw"
                    placeholder="비밀번호"
                    checkBtn="비밀번호 확인"
                  />

                  <SmallInputBox>
                    <AnswerBox>
                      <Answer>사는 지역을 선택해주세요</Answer>
                    </AnswerBox>
                    <StyledButton>지역 찾기</StyledButton>
                  </SmallInputBox>

                  <SmallInputBox>
                    <AnswerBox>
                      <Answer>키를 입력해주세요</Answer>
                    </AnswerBox>
                    <InputSlider />
                  </SmallInputBox>

                  <SmallInputBox>
                    <AnswerBox>
                      <Answer>자기소개를 작성해주세요</Answer>
                    </AnswerBox>
                    <IntroduceModal />
                  </SmallInputBox>
                </div>

                <StyledButton onClick={handleNextButtonClick}>
                  다음
                </StyledButton>
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
