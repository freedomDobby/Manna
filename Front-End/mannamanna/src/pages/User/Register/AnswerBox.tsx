import React from "react";
import { useRecoilState } from "recoil";
import {
  SmallInputBox,
  AnswerBox,
  Answer,
  SmallInput,
} from "../Register/RegisterStyle";
import { RegisterDataType, RegisterDataState } from "./RegisterState";
interface QuestionProps {
  question: string;
  Type: string;
  Id: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  Type,
  Id,
  placeholder,
  onChange,
}) => {
  return (
    <SmallInputBox>
      <AnswerBox>
        <Answer>{question}</Answer>
        <SmallInput
          type={Type}
          id={Id}
          placeholder={placeholder}
          onChange={onChange}
        />
      </AnswerBox>
    </SmallInputBox>
  );
};

export default Question;
