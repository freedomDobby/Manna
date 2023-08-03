import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  RegisterDataState,
  priority1State,
  priority2State,
  priority3State,
  profilePicture1State,
  profilePicture2State,
  profilePicture3State,
  userAddressDetailState,
  userAgeState,
  userDrinkState,
  userGuGunState,
  userHeightState,
  userIdState,
  userJobState,
  userMbtiState,
  userNameState,
  userPrState,
  userPwdCheckState,
  userPwdState,
  userReligionState,
  userSidoState,
  userSmokeState,
  userTelState,
} from "./RegisterState";
import { RegisterReq } from "../../../apis/Request/Request";
import api from "../../../apis/Api";

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
  const userSido = useRecoilValue(userSidoState);
  const userGuGun = useRecoilValue(userGuGunState);
  const userAddressDetail = useRecoilValue(userAddressDetailState);
  const priority1 = useRecoilValue(priority1State);
  const priority2 = useRecoilValue(priority2State);
  const priority3 = useRecoilValue(priority3State);
  const [userInfo] = useRecoilState(RegisterDataState);
  const profilePicture1 = useRecoilValue(profilePicture1State);
  const profilePicture2 = useRecoilValue(profilePicture2State);
  const profilePicture3 = useRecoilValue(profilePicture3State);

  console.log(profilePicture1);

  const RegisterUser: RegisterReq = {
    id: userId,
    pwd: userPwd,
    name: userName,
    gender: userInfo.gender, //api
    tel: userTel,
    birth: userAge,
    emailId: userInfo.emailId, //api
    emailDomain: userInfo.emailDomain, //api
    height: userHeight,
    job: userJob,
    isSmoke: userSmoke,
    isDrink: userDrink,
    mbti: userMbti,
    religion: userReligion,
    introduction: userPr,
    sido: userSido,
    gugun: userGuGun,
    detail: userAddressDetail,
    latitude: userInfo.latitude, //api
    longitude: userInfo.longitude, //api
    priority1: priority1,
    priority2: priority2,
    priority3: priority3,
  };

  const SaveInfo = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (userPwd === userPwdCheck) {
      try {
        const response = await api.post("/user/regist", RegisterUser);
        console.log(response.data.data);
        alert("회원가입완료");
      } catch (error) {
        console.error(error);
        alert("회원가입실패");
      }
    } else {
      alert("비밀번호가 다릅니다.");
    }
  };

  return <button onClick={SaveInfo}>저장</button>;
};

export default Save;
