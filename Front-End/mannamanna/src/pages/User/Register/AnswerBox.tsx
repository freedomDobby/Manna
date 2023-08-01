// import React from "react";
// import { Profile } from "../../../apis/Request/Request";
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
  onChange: (value: string) => void; // Add this line
}

const Question: React.FC<QuestionProps> = ({
  question,
  Type,
  Id,
  placeholder,
  onChange, // Add this line
}) => {
  // const [userName, setUserName] = React.useState<string>("");
  // const [userTel, setUserTel] = React.useState<string>("");
  // const [userId, setUserId] = React.useState<string>("");
  // const [userPwd, setUserPwd] = React.useState<string>("");
  // const [UserAddress, setUserAddress] = React.useState<string>("");
  // console.log(userName);
  // console.log(userTel);
  // console.log(userId);
  // console.log(userPwd);
  // console.log(UserAddress);

  // const enterInfo: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //   const { name, value } = event.target;

  //   switch (name) {
  //     case "userName":
  //       setUserName(value);
  //       break;
  //     case "userTel":
  //       setUserTel(value);
  //       break;
  //     case "userId":
  //       setUserId(value);
  //       break;
  //     case "userPwd":
  //       setUserPwd(value);
  //       break;
  //     case "UserAddress":
  //       setUserAddress(value);
  //       break;
  //     default:
  //       // 필요한 경우 다른 인풋 필드 처리
  //       break;
  //   }
  // };

  return (
    <SmallInputBox>
      <AnswerBox>
        <Answer>{question}</Answer>
        <SmallInput
          onChange={(event) => onChange(event.target.value)} // Add this line
          type={Type}
          id={Id}
          placeholder={placeholder}
        />
      </AnswerBox>
    </SmallInputBox>
  );
};

export default Question;
