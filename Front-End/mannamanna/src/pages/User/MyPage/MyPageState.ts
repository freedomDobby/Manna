import { atom } from 'recoil';
import { Profile } from '../../../apis/Request/Request';

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

export const MyPageDataState = atom<Profile>({
    key: 'MyPageData', // key값은 다른 atom애들이랑 겹치면 안됨
    default: {
        name: 'string',
        id: 'string',
        pwd: 'string',
        tel: 'string',
        birth: 'string',
        emailId: 'string',
        emailDomain: 'string',
        height: 150,
        job: 'string',
        smoke: false,
        drink: false,
        mbti: 'string',
        religion: 'string',
        pr: 'string',
        banFriend: false,
        address: {
            sido: 'string',
            gugun: 'string',
            detail: 'string',
            latitude: 151,
            longitude: 152,
            createTime: 153,
        },
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

export const OriginPass = atom<string>({
    key: 'originPass',
    default: '1234',
});

export const NowPass = atom<string>({
    key: 'NowPass',
    default: '',
});

export const ChangePass = atom<string>({
    key: 'ChangePass',
    default: '',
});