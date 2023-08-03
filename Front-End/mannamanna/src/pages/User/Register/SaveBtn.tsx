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
    mbti: userMbti,
    religion: userReligion,
    introduction: userPr,
    sido: userInfo.sido,
    gugun: userInfo.gugun,
    detail: userAddressDetail,
    latitude: userInfo.latitude, //api
    longitude: userInfo.longitude, //apiS
    isSmoker: userSmoke,
    isDrinker: userDrink,
    // priority1: priority1,
    // priority2: priority2,
    // priority3: priority3
  };

  // const formdata =new FormData();
  // formdata.append(
  //   'memberSignUpRequest',
  //   JSON.stringify(RegisterUser)
  // );
  // if (profilePicture1 instanceof File) {
  //   formdata.append("profilePicture1", profilePicture1);
  // }
  
  // if (profilePicture2 instanceof File) {
  //   formdata.append("profilePicture2", profilePicture2);
  // }
  
  // if (profilePicture3 instanceof File) {
  //   formdata.append("profilePicture3", profilePicture3);
  // }

  // function formDataToObject(formData: FormData) {
  //   const obj: { [key: string]: FormDataEntryValue } = {};
  //   formData.forEach((value, key) => {
  //     obj[key] = value;
  //   });
  //   return obj;
  // }
  

  const SaveInfo = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (userPwd === userPwdCheck) {
      try {
        console.log(RegisterUser);
        // console.log(formDataToObject(formdata)); 
        const response = await api.post("/user/regist", RegisterUser, {
          // headers: {
          //   'Content-Type': 'multipart/form-data', 
          // },
        });
        console.log(response.data.data);
        alert("회원가입완료");
      } catch (error) {
        console.log(RegisterUser);
        // console.log(formDataToObject(formdata)); 
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
