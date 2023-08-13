import { atom } from 'recoil';

// 유저의 SessionId를 저장
export const userSessionId = atom<string>({
    key: 'userSessionId',
    default: 'hellohello',
});

// 유저의 이름 저장
export const sogaeUserName = atom<string>({
    key: 'userName',
    default: 'helloworld',
});

// 상대방의 이름 저장
export const dateName = atom<string>({
    key: 'dateName',
    default: 'helloworld',
});

// 유저의 카메라 On/Off를 조절
export const isVideo = atom<boolean>({
    key: 'isVideo',
    default: true,
});

// 유저의 마이크 On/Off를 조절
export const isAudio = atom<boolean>({
    key: 'isAudio',
    default: true,
});

// 유저가 가지고 있는 타이머 시간
export const timerTime = atom<any>({
    key: 'timerTime',
    default: 1800,
});
