import React from "react";
import Question from "./AnswerBox";
import { useRecoilState } from "recoil";
import {
  userAgeState,
  userNameState,
  userTelState,
  userIdState,
  userPwdState,
  userPwdCheckState,
} from "./RegisterState";

//// 회원 나이////
const EnterAge = () => {
  const [userAge, setUserAge] = useRecoilState(userAgeState);

  const EnterAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAge(String(event.target.value));
    console.log(userAge); // 이 부분은 비동기적으로 업데이트되므로 최신값이 아닐 수 있습니다.
  };

  return (
    <Question
      question="태어난 년도를 입력해주세요"
      Type="string"
      Id="UserYear"
      placeholder="2002"
      onChange={EnterAgeChange}
    />
  );
};

////회원 이름////
const EnterName = () => {
  const [userName, setUserName] = useRecoilState(userNameState);
  const EnterNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return (
    <Question
      question="이름을 입력해주세요"
      Type="text"
      Id="UserName"
      placeholder="이름"
      onChange={EnterNameChange}
    />
  );
};

////회원 전화번호 ////
const EnterTel = () => {
  const [userTel, setUserTel] = useRecoilState(userTelState);

  const EnterTelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserTel(event.target.value);
    console.log(userTel); // 이 부분은 비동기적으로 업데이트되므로 최신값이 아닐 수 있습니다.
  };

  return (
    <Question
      question="전화번호를 입력해주세요"
      Type="text"
      Id="UserNum"
      placeholder="010-1234-4570"
      onChange={EnterTelChange}
    />
  );
};

////회원 아이디////
const EnterId = () => {
  const [userId, setUserId] = useRecoilState(userIdState);

  const EnterIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
    console.log(userId); // 이 부분은 비동기적으로 업데이트되므로 최신값이 아닐 수 있습니다.
  };

  return (
    <Question
      question="아이디를 입력해주세요"
      Type="text"
      Id="UserId"
      placeholder="아이디"
      onChange={EnterIdChange}
    />
  );
};

////회원 비밀번호////
const EnterPwd = () => {
  const [userPwd, setUserPwd] = useRecoilState(userPwdState);

  const EnterPwdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPwd(event.target.value);
    console.log(userPwd); // 이 부분은 비동기적으로 업데이트되므로 최신값이 아닐 수 있습니다.
  };

  return (
    <Question
      question="비밀번호를 입력해주세요"
      Type="password"
      Id="UserPw"
      placeholder="비밀번호"
      onChange={EnterPwdChange}
    />
  );
};

////회원 비밀번호확인////
const EnterPwdCheck = () => {
  const [userPwd, setUserPwd] = useRecoilState(userPwdState);
  const [userPwdCheck, setUserPwdCheck] = useRecoilState(userPwdCheckState);

  const EnterPwdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPwdCheck(event.target.value);
    if (userPwd === event.target.value) {
      console.log("check");
    } else {
      alert("비밀번호를 확인해 주세요.");
    }
  };

  return (
    <Question
      question="비밀번호 확인"
      Type="text"
      Id="UserPw"
      placeholder="비밀번호 확인"
      onChange={EnterPwdChange}
    />
  );
};

export { EnterAge, EnterName, EnterTel, EnterId, EnterPwd, EnterPwdCheck };
