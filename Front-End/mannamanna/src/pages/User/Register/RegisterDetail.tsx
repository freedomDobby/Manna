import React, { useState } from "react";
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
import {
  MBTISelectBox,
  ReligionSelectBox,
  JobSelectBox,
  UserHeightSlider,
} from "../Register/Selection";
import { useNavigate } from "react-router-dom";
import Question from "./AnswerBox";
import IntroduceModal from "./IntroduceModal";

const Register = () => {
  const navigate = useNavigate();

  const GoMain = () => {
    navigate("/main");
  };
  const [userAge, setUserAge] = useState<number | undefined>(undefined);
  const handleInputChange = (name: string, value: string | number) => {
    switch (name) {
      case "userAge":
        setUserAge(value as number);
        break;
      // ... (other cases)
      default:
        // 필요한 경우 다른 인풋 필드 처리
        break;
    }
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
                <div
                  style={{
                    textAlign: "center",
                    marginLeft: "10%",
                    padding: "0%",
                  }}
                >
                  {/* 사진 입력 받기 */}
                  <Question
                    question="몇 살이세요?"
                    Type="number"
                    Id="UserYear"
                    placeholder="만 나이"
                    onChange={(value) => handleInputChange("userAge", value)}
                  />

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
                      <IntroduceModal />
                    </AnswerBox>
                  </SmallInputBox>
                </div>
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
