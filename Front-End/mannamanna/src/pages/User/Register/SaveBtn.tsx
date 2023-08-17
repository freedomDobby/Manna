import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  RegisterDataState,
  account_emailState,
  genderState,
  latitudeState,
  longitudeState,
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
import { useNavigate } from "react-router-dom";

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

  const [profilePicture1, setprofilePicture1] =
    useRecoilState(profilePicture1State);
  const [profilePicture2, setprofilePicture2] =
    useRecoilState(profilePicture2State);
  const [profilePicture3, setprofilePicture3] =
    useRecoilState(profilePicture3State);
  const [accountEmail] = useRecoilState(account_emailState);
  const [UserEmailId, Userdomain] = accountEmail.split("@");
  const [gender, setGender] = useRecoilState(genderState);
  const [latitude, setlatitude] = useRecoilState(latitudeState);
  const [longitude, setlongitude] = useRecoilState(longitudeState);

  const RegisterUser: RegisterReq = {
    id: userId,
    pwd: userPwd,
    name: userName,
    gender: gender, //api
    tel: userTel,
    birth: userAge,
    emailId: UserEmailId, //api
    emailDomain: Userdomain, //api
    height: userHeight,
    job: userJob,
    mbti: userMbti,
    religion: userReligion,
    introduction: userPr,
    sido: userSido,
    gugun: userGuGun,
    detail: userAddressDetail,
    latitude: latitude, //api
    longitude: longitude, //api
    isSmoker: userSmoke,
    isDrinker: userDrink,
  };

  function formDataToObject(formData: FormData) {
    const obj: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }

  const [open, setOpen] = useRecoilState(RegisterModalAtom);
  const [message, setMessage] = useRecoilState(RegisterMessageAtom);
  const navigate = useNavigate();
  const GoLogin = () => {
    navigate("/login");
  };
  const SaveInfo = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (userPwd === userPwdCheck) {
      try {
        const formdata = new FormData();
        const json = JSON.stringify(RegisterUser);
        const blob = new Blob([json], { type: "application/json" });
        formdata.append("memberSignUpRequest", blob);

        if (profilePicture1 instanceof File) {
          formdata.append("profilePicture1", profilePicture1);
        }
        if (profilePicture2 instanceof File) {
          formdata.append("profilePicture2", profilePicture2);
        }
        if (profilePicture3 instanceof File) {
          formdata.append("profilePicture3", profilePicture3);
        }

        console.log(RegisterUser);
        console.log("FormData:", formDataToObject(formdata));
        const response = await api.post("/user/regist", formdata, {
          headers: {
            "Content-type": "multipart/form-data", // Set the correct content type
          },
        });
        console.log(response.data.data);
        // setOpen(true);
        alert("회원가입 성공");
        GoLogin();
      } catch (error: any) {
        console.error(error);
        await setMessage("회원가입이 실패하였습니다.");
        alert(error.response.data);
        setOpen(true);
      }
    } else {
      await setMessage("비밀번호가 다릅니다.");
      setOpen(true);
    }
    //navigate 추가
  };

  return <StyledButton onClick={SaveInfo}>저장</StyledButton>;
};

export default Save;
