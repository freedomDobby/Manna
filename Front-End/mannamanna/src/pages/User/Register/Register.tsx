// import React from 'react';
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
import MacBookBox from "../../../components/common/macbookBox";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const GoRegisterDetail = () => {
    navigate("/registerDetail");
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
                <SmallInputBox>
                  <AnswerBox>
                    <Answer>이름</Answer>
                    <SmallInput placeholder="이름"></SmallInput>
                  </AnswerBox>
                  <StyledButton>이름 확인</StyledButton>
                </SmallInputBox>

                <SmallInputBox>
                  <AnswerBox>
                    <Answer>전화번호</Answer>
                    <SmallInput placeholder="전화번호"></SmallInput>
                  </AnswerBox>
                  <StyledButton>전화번호 확인</StyledButton>
                </SmallInputBox>

                <SmallInputBox>
                  <AnswerBox>
                    <Answer>태어난 년도</Answer>
                    <SmallInput placeholder="태어난 년도"></SmallInput>
                  </AnswerBox>
                  <StyledButton>태어난 년도 확인</StyledButton>
                </SmallInputBox>

                <SmallInputBox>
                  <AnswerBox>
                    <Answer>아이디 적어주세요</Answer>
                    <SmallInput placeholder="아이디 입력칸"></SmallInput>
                  </AnswerBox>
                  <StyledButton>중복확인</StyledButton>
                </SmallInputBox>

                <SmallInputBox>
                  <AnswerBox>
                    <Answer>비밀번호를 적어주세요</Answer>
                    <SmallInput placeholder="비밀번호 입력칸"></SmallInput>
                  </AnswerBox>
                </SmallInputBox>

                <SmallInputBox>
                  <AnswerBox>
                    <Answer>비밀번호를 확인해주세요</Answer>
                    <SmallInput placeholder="비밀번호 입력칸"></SmallInput>
                  </AnswerBox>
                  <StyledButton>비밀번호 확인</StyledButton>
                </SmallInputBox>
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

                <StyledButton onClick={GoRegisterDetail}>다음</StyledButton>
              </InputBox>
            </MacBookBox>
          </MainMidBox>
        </MainBox>
        <SideBox></SideBox>
      </InnerBox>
    </div>
  );
};

export default Register;
