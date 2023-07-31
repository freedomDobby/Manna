// import React, {useState} from 'react';
import { StyledButton } from "../Login/LoginStyle";
import GoBackIcon from "../../../components/common/GoBackIcon";
import signup from "../../../asset/image/signup.png";
import Logo from "../../../components/common/Logo";
import SmokeCheck from "./SmokeCheck";
import DrinkCheck from "./DrinkCheck";
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
  Select,
} from "./RegisterStyle";
import MacBookBox from "../../../components/common/macbookBox";
import { Religion, Mbti, Job } from "../Register/Selection";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const GoMain = () => {
    navigate("/main");
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
            <MacBookBox
              width="95%"
              height="95%"
              color1="#bcd3ff"
              color2="#ffffff"
              alignItems="center"
            >
              <InputBox>
                {/* 사진 입력 받기 */}

                <SmallInputBox>
                  <AnswerBox>
                    <Answer>직업을 골라주세요</Answer>
                  </AnswerBox>
                  <Select>
                    <Job />
                  </Select>
                </SmallInputBox>

                <SmallInputBox>
                  <AnswerBox>
                    <Answer>흡연을 하시나요?</Answer>
                  </AnswerBox>
                  <SmokeCheck />
                </SmallInputBox>

                <SmallInputBox>
                  <AnswerBox>
                    <Answer>음주를 하시나요?</Answer>
                  </AnswerBox>
                  <DrinkCheck />
                </SmallInputBox>

                <SmallInputBox>
                  <AnswerBox>
                    <Answer>종교을 골라주세요</Answer>
                  </AnswerBox>
                  <Select>
                    <Religion />
                  </Select>
                </SmallInputBox>

                <SmallInputBox>
                  <AnswerBox>
                    <Answer>MBTI를 골라주세요</Answer>
                  </AnswerBox>
                  <Select>
                    <Mbti />
                  </Select>
                </SmallInputBox>

                <StyledButton onClick={GoMain}>완료</StyledButton>
              </InputBox>
            </MacBookBox>
          </MainMidBox>
        </MainBox>
        <SideBox />
      </InnerBox>
    </div>
  );
};

export default Register;
