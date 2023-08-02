import React from "react";
import { useRecoilValue } from "recoil";
import {
  userAgeState,
  userDrinkState,
  userHeightState,
  userIdState,
  userJobState,
  userMbtiState,
  userNameState,
  userPrState,
  userPwdCheckState,
  userPwdState,
  userReligionState,
  userSmokeState,
  userTelState,
} from "./RegisterState";

const Save = () => {
  const userName = useRecoilValue(userNameState);
  const userTel = useRecoilValue(userTelState);
  const userId = useRecoilValue(userIdState);
  const userPwd = useRecoilValue(userPwdState);
  const userPwdCheck = useRecoilValue(userPwdCheckState);
  const userAge = useRecoilValue(userAgeState);
  const userSmoke = useRecoilValue(userSmokeState);
  const userDrink = useRecoilValue(userDrinkState);
  const userHeight = useRecoilValue(userHeightState);
  const userReligion = useRecoilValue(userReligionState);
  const userMbti = useRecoilValue(userMbtiState);
  const userPr = useRecoilValue(userPrState);
  const userJob = useRecoilValue(userJobState);

  const SaveInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    console.log(userName);
    console.log(userTel);
    console.log(userId);
    console.log(userPwd);
    console.log(userPwdCheck);
    if (userPwd === userPwdCheck) {
      console.log("비밀번호 일치");
    } else {
      console.log("비밀번호 불일치");
    }
    console.log(userAge);
    console.log(userSmoke);
    console.log(userDrink);
    console.log(userHeight);
    console.log(userReligion);
    console.log(userMbti);
    console.log(userPr);
    console.log(userJob);
  };

  return <button onClick={SaveInfo}>저장</button>;
};

export default Save;
