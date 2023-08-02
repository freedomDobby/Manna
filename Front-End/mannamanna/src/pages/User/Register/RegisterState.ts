import { atom } from "recoil";

export interface RegisterDataType {
  userPicture: {
    Picture1: string;
    Picture2: string;
    Picture3: string;
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
      Picture1: "src/asset/image/unknown.png",
      Picture2: "src/asset/image/unknown.png",
      Picture3: "src/asset/image/unknown.png",
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
