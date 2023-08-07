import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  RegisterDataState,
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
import { RegisterMessageAtom, RegisterModalAtom } from "../../../Recoil/State";
import { StyledButton } from "../Login/LoginStyle";

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
  // const priority1 = useRecoilValue(priority1State);
  // const priority2 = useRecoilValue(priority2State);
  // const priority3 = useRecoilValue(priority3State);
  const [userInfo] = useRecoilState(RegisterDataState);
  // const Usergender = useRecoilValue(genderState);
  const profilePicture1 = useRecoilValue(profilePicture1State);
  const profilePicture2 = useRecoilValue(profilePicture2State);
  const profilePicture3 = useRecoilValue(profilePicture3State);

  const RegisterUser: RegisterReq = {
    id: userId,
    pwd: userPwd,
    name: userName,
    gender: userInfo.gender, //api => 자체회원가입땐 없어.
    tel: userTel,
    birth: userAge,
    emailId: userId, //api
    emailDomain: userInfo.emailDomain, //api
    height: userHeight,
    job: userJob,
    mbti: userMbti,
    religion: userReligion,
    introduction: userPr,
    sido: userSido,
    gugun: userGuGun,
    detail: userAddressDetail,
    latitude: userInfo.latitude, //api
    longitude: userInfo.longitude, //apiS
    isSmoker: userSmoke,
    isDrinker: userDrink,
  };

  const formdata = new FormData();
  formdata.append("memberSignUpRequest", JSON.stringify(RegisterUser));
  if (profilePicture1 instanceof File) {
    formdata.append("profilePicture1", profilePicture1);
  }

  if (profilePicture2 instanceof File) {
    formdata.append("profilePicture2", profilePicture2);
  }

  if (profilePicture3 instanceof File) {
    formdata.append("profilePicture3", profilePicture3);
  }

  function formDataToObject(formData: FormData) {
    const obj: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }
  const [open, setOpen] = useRecoilState(RegisterModalAtom);
  const [message, setMessage] = useRecoilState(RegisterMessageAtom);
  const SaveInfo = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (userPwd === userPwdCheck) {
      try {
        console.log(RegisterUser);
        // console.log(formDataToObject(formdata));
        const response = await api.post("/user/regist", RegisterUser, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        // console.log(response.data.data);
        alert("회원가입완료");
        setOpen(true);
      } catch (error) {
        // console.log(RegisterUser);
        // console.log(formDataToObject(formdata));
        console.error(error);
        alert("회원가입실패");
        await setMessage("회원가입이 실패하였습니다.");
        setOpen(true);
      }
    } else {
      alert("비밀번호가 다릅니다.");
      await setMessage("비밀번호가 다릅니다.");
      setOpen(true);
    }
  };

  return <StyledButton onClick={SaveInfo}>저장</StyledButton>;
};

export default Save;
