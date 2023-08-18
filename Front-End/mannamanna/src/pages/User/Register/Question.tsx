import React, { useEffect } from "react";
import { Question, Question2, QuestionTel } from "./AnswerBox";
import { useRecoilState } from "recoil";
import {
  userAgeState,
  userNameState,
  userTelState,
  userIdState,
  userPwdState,
  userPwdCheckState,
} from "./RegisterState";
import { RegisterMessageAtom, RegisterModalAtom } from "../../../Recoil/State";

//// 회원 나이////
const EnterAge = () => {
  const [userAge, setUserAge] = useRecoilState(userAgeState);

  const EnterAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAge(String(event.target.value));
    // console.log(userAge); // 이 부분은 비동기적으로 업데이트되므로 최신값이 아닐 수 있습니다.
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
    if (event.target.value.length > 13) {
      alert("전화번호의 최대 길이는 13글자입니다. ")
      setUserTel("");
      return
    }else{
      setUserTel(event.target.value);
    }
    // console.log(userTel); // 이 부분은 비동기적으로 업데이트되므로 최신값이 아닐 수 있습니다.
  };
  useEffect(() => {
    if (userTel.length === 10) {
      setUserTel(userTel.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (userTel.length === 13) {
      setUserTel(userTel.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [userTel]);



  return (
    <div>
          <QuestionTel
      question="전화번호를 입력해주세요 (양식을 지켜주세요)"
      Type="text"
      Id="UserNum"
      placeholder="010-1234-5678"
      onChange={EnterTelChange}
      value={userTel}
    />
    </div>

  );
};

////회원 아이디////
const EnterId = () => {
  const [userId, setUserId] = useRecoilState(userIdState);

  const EnterIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 20) {
      alert("아이디의 최대 길이는 20글자입니다. ")
      setUserId("");
      return
    }else{
      setUserId(event.target.value);
    }
  };

  return (
    <QuestionTel
      question="아이디를 입력해주세요"
      Type="text"
      Id="UserId"
      placeholder="아이디(최대 20글자)"
      onChange={EnterIdChange}
      value={userId}
    />
  );
};

////회원 비밀번호////
const EnterPwd = () => {
  const [userPwd, setUserPwd] = useRecoilState(userPwdState);

  const EnterPwdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPwd(event.target.value);
    // console.log(userPwd); // 이 부분은 비동기적으로 업데이트되므로 최신값이 아닐 수 있습니다.
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
  const [open, setOpen] = useRecoilState(RegisterModalAtom);
  const [message, setMessage] = useRecoilState(RegisterMessageAtom);

  const EnterPwdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPwdCheck(event.target.value);
    if (userPwd === event.target.value) {
      // console.log("check");
    } else {
      // alert("비밀번호를 확인해 주세요.");
      setMessage("비밀번호를 확인해 주세요.");
      setOpen(true);
      // alert(userPwdCheck);
    }
    // console.log(userPwdCheck);
  };

  return (
    <Question2
      question="비밀번호 확인"
      Type="password"
      Id="UserPw"
      placeholder="비밀번호 확인"
      onBlur={EnterPwdChange}
    />
  );
};

export { EnterAge, EnterName, EnterTel, EnterId, EnterPwd, EnterPwdCheck };
