import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  RegisterDataState,
  profilePicture1State,
  profilePicture2State,
  profilePicture3State,
  // profilePicture2State,
  // profilePicture3State,
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
  const [userInfo] = useRecoilState(RegisterDataState);

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

  if (profilePicture1State instanceof File) {
    formdata.append("profilePicture1", profilePicture1State);
  }

  if (profilePicture2State instanceof File) {
    formdata.append("profilePicture2", profilePicture2State);
  }

  if (profilePicture3State instanceof File) {
    formdata.append("profilePicture3", profilePicture3State);
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
        // axios를 사용하여 POST 요청 보내기
        const response = await api.post(
          "/user/regist",
          formdata
          // {
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // }
        );
        console.log(formdata);
        console.log("333333333333333");
        console.log(response.data.data);
        // alert("회원가입완료");
        setOpen(true);
      } catch (error) {
        console.error(error);
        console.log(formdata);
        // alert("회원가입실패");
        await setMessage("회원가입이 실패하였습니다.");
        setOpen(true);
      }
    } else {
      // alert("비밀번호가 다릅니다.");
      await setMessage("비밀번호가 다릅니다.");
      setOpen(true);
    }
  };

  return <StyledButton onClick={SaveInfo}>저장</StyledButton>;
};

export default Save;
