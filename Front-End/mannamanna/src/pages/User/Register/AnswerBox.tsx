import React, { useState } from "react";
import { StyledButton } from "../Login/LoginStyle";
import { Profile } from "../../../apis/Request/Request";
import {
  SmallInputBox,
  AnswerBox,
  Answer,
  SmallInput,
} from "../Register/RegisterStyle";

interface QuestionProps {
  question: string;
  Type: string;
  Id: string;
  placeholder: string;
  checkBtn: string;
}

const Question: React.FC<QuestionProps> = ({
  question,
  Type,
  Id,
  placeholder,
  checkBtn,
}) => {
  const [UserInfo, setUserInfo] = useState<Profile | null>(null);

  return (
    <SmallInputBox>
      <AnswerBox>
        <Answer>{question}</Answer>
        <SmallInput type={Type} id={Id} placeholder={placeholder}></SmallInput>
      </AnswerBox>
      <StyledButton>{checkBtn}</StyledButton>
    </SmallInputBox>
  );
};

export default Question;
