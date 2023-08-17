import { atom } from "recoil";

export interface RegisterDataType {
  id: string;
  pwd: string;
  name: string;
  gender: string; //api
  tel: string;
  birth: string;
  emailId: string; //api
  emailDomain: string; //api
  height: number;
  job: string;
  isSmoker: boolean;
  isDrinker: boolean;
  mbti: string;
  religion: string;
  introduction: string;
  sido: string;
  gugun: string;
  detail: string;
  latitude: number; //api
  longitude: number; //api
  // blockingFriend: boolean;
}

export const RegisterDataState = atom<RegisterDataType>({
  key: "RegisterData",
  default: {
    id: "unknownId",
    pwd: "unknownPw",
    name: "unknownName",
    gender: "F",
    tel: "unknownTel",
    birth: "unknownBirth",
    emailId: "unknownEmail",
    emailDomain: "naver.com",
    height: 177,
    job: "unknownJob",
    isSmoker: false,
    isDrinker: false,
    mbti: "Mbti",
    religion: "unknown",
    introduction: "안녕하세요 ^^",
    sido: "대전광역시",
    gugun: "유성구",
    detail: "삼성화재연구원",
    latitude: 36.35,
    longitude: 127.29,
    // blockingFriend: true,
  },
});
export const latitudeState = atom<number>({
  key: "latitude",
  default: 36.35,
});
export const longitudeState = atom<number>({
  key: "longitude",
  default: 127.29,
});

export const userNameState = atom<string>({
  key: "userName",
  default: "UserKim",
});

export const userTelState = atom<string>({
  key: "userTel",
  default: "010-1234-1234",
});

export const userIdState = atom<string>({
  key: "userId",
  default: "UserId",
});

export const userPwdState = atom<string>({
  key: "userPwd",
  default: "User1234",
});

export const userPwdCheckState = atom<string>({
  key: "userPwdCheck",
  default: "User1234",
});

export const userAgeState = atom<string>({
  key: "userAge",
  default: "2000",
});

export const userSmokeState = atom<boolean>({
  key: "userSmoke",
  default: false,
});

export const userDrinkState = atom<boolean>({
  key: "userDrink",
  default: false,
});

export const userHeightState = atom<number>({
  key: "userHeight",
  default: 177,
});

export const userReligionState = atom<string>({
  key: " userReligion",
  default: "무교",
});

export const userMbtiState = atom<string>({
  key: "userMbti",
  default: "INTJ",
});

export const userPrState = atom<string>({
  key: "userPr",
  default: "안녕하세요 ^^",
});

export const userJobState = atom<string>({
  key: "userJob",
  default: "무직",
});

export const userSidoState = atom<string>({
  key: "userSido",
  default: "대전광역시",
});

export const userGuGunState = atom<string>({
  key: "userGuGun",
  default: "유성구",
});

export const userAddressDetailState = atom<string>({
  key: "userAddressDetail",
  default: "삼성화재연구원",
});

export const priority1State = atom<number>({
  key: "priority1",
  default: 0,
});

export const priority2State = atom<number>({
  key: "priority2",
  default: 1,
});
export const priority3State = atom<number>({
  key: "priority3",
  default: 2,
});

export const profilePicture1State = atom<File>({
  key: "profilePicture1",
  default: new File([], "dummy.jpg"),
});

export const profilePicture2State = atom<File>({
  key: "profilePicture2",
  default: new File([], "dummy.jpg"),
});

export const profilePicture3State = atom<File>({
  key: "profilePicture3",
  default: new File([], "dummy.jpg"),
});

export const profile_nicknameState = atom<string>({
  key: "profile_nickname",
  default: "unknow",
});

export const friendsState = atom<string>({
  key: "friends",
  default: "unknow",
});

export const account_emailState = atom<string>({
  key: "account_email",
  default: "unknow",
});

export const genderState = atom<string>({
  key: "Usergender",
  default: "unknown",
});

export const age_rangeState = atom<number | null>({
  key: "age_range",
  default: null,
});

export const birthdayState = atom<number | null>({
  key: "birthdat",
  default: null,
});

// export const []
