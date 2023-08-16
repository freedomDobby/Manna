import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export interface MyPageDataType {
  name: string;
  height: number;
  job: string;
  isBlockingFriend: boolean;
  isSmoker: boolean;
  isDrinker: boolean;
  religion: string;
  mbti: string;
  introduction: string;
  mileage: number;
  sido: string;
  gugun: string;
  detail: string;
  latitude: number;
  longitude: number;
}

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "recoilPersistData",
  storage: sessionStorage,
});

export const MyPageDataState = atom<MyPageDataType>({
  key: "MyPageData", // key값은 다른 atom애들이랑 겹치면 안됨
  default: {
    name: "string",
    height: 0,
    job: "string",
    isBlockingFriend: true,
    isSmoker: true,
    isDrinker: true,
    religion: "string",
    mbti: "string",
    introduction: "string",
    mileage: 0,
    sido: "string",
    gugun: "string",
    detail: "string",
    latitude: 0,
    longitude: 0,
  },
});

export const MypageUserHeight = atom<number>({
  key: "MypageUserHeight",
  default: 177,
});

export const MyPageSelfIntro = atom<string>({
  key: "MyPageSelfIntro",
  default: "자기소개기본자기소개기본",
});

export const MyPageMBTI = atom<string>({
  key: "MyPageMBTI",
  default: "INFP",
});

export const MyPageReligion = atom<string>({
  key: "MyPageReligion",
  default: "무교",
});

export const MyPageJob = atom<string>({
  key: "MyPageJob",
  default: "무직",
});

export const IsSmoke = atom<boolean>({
  key: "IsSmoke",
  default: true,
});

export const IsDrink = atom<boolean>({
  key: "IsDrink",
  default: true,
});

export const IsBlock = atom<boolean>({
  key: "IsBlock",
  default: true,
});

export const NowPass = atom<string>({
  key: "NowPass",
  default: "",
});

export const ChangePass = atom<string>({
  key: "ChangePass",
  default: "",
});

export const WithdrawalPass = atom<string>({
  key: "WithdrawalPass",
  default: "",
});

export const MyPageProfilePicture1 = atom<any>({
  key: "MyPageProfilePicture1",
  default: "dummy.jpg",

});

export const MyPageProfilePicture2 = atom<any>({
  key: "MyPageProfilePicture2",
  default: "dummy.jpg",

});

export const MyPageProfilePicture3 = atom<any>({
  key: "MyPageProfilePicture3",
  default: "dummy.jpg",

});

export const MySido = atom<string>({
  key: "MySido",
  default: "서울특별시",
});

export const MyGuGun = atom<string>({
  key: "MyGuGun",
  default: "",
});
