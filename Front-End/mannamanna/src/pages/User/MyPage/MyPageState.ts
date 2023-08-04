import { atom } from 'recoil';

// export interface MyPageDataType {
//     userPassword: string;
//     userHeight: number;
//     userAddress: string;
//     userJob: string;
//     userSmoke: string;
//     userDrink: string;
//     userReligion: string;
//     userMBTI: string;
//     userBlock: boolean;
//     userSelfIntro: string;
// }
export interface MyPageDataType {
    name: string,
    height: number,
    job: string,
    isBlockingFriend: boolean,
    isSmoker: boolean,
    isDrinker: boolean,
    religion: string,
    mbti: string,
    profilePictures: [
      {
        id: number,
        path: string,
        name: string,
        priority: number
      }
    ],
    introduction: string,
    mileage: number,
    sido: string,
    gugun: string,
    detail: string,
    latitude: number,
    longitude: number
}

// export const MyPageDataState = atom<MyPageDataType>({
//     key: 'MyPageData', // key값은 다른 atom애들이랑 겹치면 안됨
//     default: {
//         userPassword: '유저이름',
//         userHeight: 155,
//         userAddress: '유저 주소',
//         userJob: '유저 직업',
//         userSmoke: '유저 흡연',
//         userDrink: '유저 음주',
//         userReligion: '유저 종교',
//         userMBTI: '유저 성격',
//         userBlock: true,
//         userSelfIntro: '유저 자기소개자기소개',
//     }
// });

export const MyPageDataState = atom<MyPageDataType>({
    key: 'MyPageData', // key값은 다른 atom애들이랑 겹치면 안됨
    default: {
        name: "string",
        height: 0,
        job: "string",
        isBlockingFriend: true,
        isSmoker: true,
        isDrinker: true,
        religion: "string",
        mbti: "string",
        profilePictures: [
        {
            id: 0,
            path: "string",
            name: "string",
            priority: 0
        }
        ],
        introduction: "string",
        mileage: 0,
        sido: "string",
        gugun: "string",
        detail: "string",
        latitude: 0,
        longitude: 0
    }
});

export const MypageUserHeight = atom<number>({
    key: 'MypageUserHeight',
    default: 177,
});

export const MyPageSelfIntro = atom<string>({
    key: 'MyPageSelfIntro',
    default: '자기소개기본자기소개기본',
});

export const MyPageMBTI = atom<string>({
    key: 'MyPageMBTI',
    default: 'INFP',
});

export const MyPageReligion = atom<string>({
    key: 'MyPageReligion',
    default: '무교',
});

export const MyPageJob = atom<string>({
    key: 'MyPageJob',
    default: '무직',
});

export const IsSmoke = atom<boolean>({
    key: 'IsSmoke',
    default: true,
});

export const IsDrink = atom<boolean>({
    key: 'IsDrink',
    default: true,
});

export const IsBlock = atom<boolean>({
    key: 'IsBlock',
    default: true,
});

export const NowPass = atom<string>({
    key: 'NowPass',
    default: '',
});

export const ChangePass = atom<string>({
    key: 'ChangePass',
    default: '',
});