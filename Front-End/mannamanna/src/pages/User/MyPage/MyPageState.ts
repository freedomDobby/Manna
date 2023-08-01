import { atom } from 'recoil';

export interface MyPageDataType {
    userPassword: string;
    userHeight: number;
    userAddress: string;
    userJob: string;
    userSmoke: string;
    userDrink: string;
    userReligion: string;
    userMBTI: string;
    userBlock: boolean;
    userSelfIntro: string;
}

export const MyPageDataState = atom<MyPageDataType>({
    key: 'MyPageData', // key값은 다른 atom애들이랑 겹치면 안됨
    default: {
        userPassword: '유저이름',
        userHeight: 155,
        userAddress: '유저 주소',
        userJob: '유저 직업',
        userSmoke: '유저 흡연',
        userDrink: '유저 음주',
        userReligion: '유저 종교',
        userMBTI: '유저 성격',
        userBlock: true,
        userSelfIntro: '유저 자기소개자기소개',
    }
});
