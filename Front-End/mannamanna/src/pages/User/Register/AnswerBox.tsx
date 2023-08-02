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
}

const Question: React.FC<QuestionProps> = ({
  question,
  Type,
  Id,
  placeholder,
}) => {
  const [registerData, setRegisterData] = useRecoilState(RegisterDataState);

  const { userName, userTel, userId, userPwd, userAddress } = registerData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(userName);
    console.log(userTel);
    console.log(userId);
    console.log(userPwd);
    console.log(userAddress);
  };

  return (
    <SmallInputBox>
      <AnswerBox>
        <Answer>{question}</Answer>
        <SmallInput
          type={Type}
          id={Id}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </AnswerBox>
    </SmallInputBox>
  );
};

export default Question;
