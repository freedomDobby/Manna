import { atom } from "recoil";

export interface RegisterDataType {
  userPicture: {
    Picture1: {
      path: string;
      name: string;
      priority: number;
    };
    Picture2: {
      path: string;
      name: string;
      priority: number;
    };
    Picture3: {
      path: string;
      name: string;
      priority: number;
    };
  };
  userName: string;
  userTel: string;
  userId: string;
  userPwd: string;
  userAddress: {
    sido: string;
    gugun: string;
    detail: string;
    latitude: number;
    longitude: number;
    createTime: number;
  };
  userAge: number;
  userSmoke: boolean;
  userDrink: boolean;
  userHeight: number;
  userJob: string;
  userReligion: string;
  userMbti: string;
  userPr: string;
}

export const RegisterDataState = atom<RegisterDataType>({
  key: "RegisterData",
  default: {
    userPicture: {
      Picture1: {
        path: "src/asset/image/unknown.png",
        name: "userProfile1",
        priority: 1,
      },
      Picture2: {
        path: "src/asset/image/unknown.png",
        name: "userProfile1",
        priority: 2,
      },
      Picture3: {
        path: "src/asset/image/unknown.png",
        name: "userProfile1",
        priority: 3,
      },
    },
    userName: "User",
    userTel: "010-1234-1234",
    userId: "UserId",
    userPwd: "User1234",
    userAddress: {
      sido: "대전광역시",
      gugun: "유성구",
      detail: "삼성화재연구원",
      latitude: 36.354946759143,
      longitude: 127.29980994578,
      createTime: 20230801,
    },
    userAge: 20,
    userSmoke: false,
    userDrink: false,
    userHeight: 177,
    userJob: "무직",
    userReligion: "무교",
    userMbti: "INTJ",
    userPr: "안녕하세요 ^^",
  },
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
