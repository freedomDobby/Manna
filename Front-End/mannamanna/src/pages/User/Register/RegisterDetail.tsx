// import React, { useState } from "react";
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
import {
  MBTISelectBox,
  ReligionSelectBox,
  JobSelectBox,
  UserHeightSlider,
} from "../Register/Selection";
import { EnterPr } from "./IntroduceModal";
import { EnterAge } from "./Question";
import Save from "./SaveBtn";

const Register = () => {
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
                <div
                  style={{
                    textAlign: "center",
                    marginLeft: "10%",
                    padding: "0%",
                  }}
                >
                  <EnterAge />
                  <SmallInputBox>
                    <AnswerBox>
                      <Answer>흡연을 하시나요?</Answer>
                      <SmokeCheck />
                    </AnswerBox>
                  </SmallInputBox>

                  <SmallInputBox>
                    <AnswerBox>
                      <Answer>음주를 하시나요?</Answer>
                      <DrinkCheck />
                    </AnswerBox>
                  </SmallInputBox>

                  <SmallInputBox>
                    <AnswerBox>
                      <Answer>키를 입력해주세요</Answer>
                      <UserHeightSlider />
                    </AnswerBox>
                  </SmallInputBox>

                  <SmallInputBox>
                    <AnswerBox>
                      <Answer>직업을 골라주세요</Answer>
                      <Select>
                        <JobSelectBox />
                      </Select>
                    </AnswerBox>
                  </SmallInputBox>

                  <SmallInputBox>
                    <AnswerBox>
                      <Answer>종교을 골라주세요</Answer>
                      <Select>
                        <ReligionSelectBox />
                      </Select>
                    </AnswerBox>
                  </SmallInputBox>

                  <SmallInputBox>
                    <AnswerBox>
                      <Answer>MBTI를 골라주세요</Answer>
                      <Select>
                        <MBTISelectBox />
                      </Select>
                    </AnswerBox>
                  </SmallInputBox>

                  <SmallInputBox>
                    <AnswerBox>
                      <Answer>자기소개를 작성해주세요</Answer>
                      <EnterPr>작성하기</EnterPr>
                    </AnswerBox>
                  </SmallInputBox>
                </div>
                <Save />
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
