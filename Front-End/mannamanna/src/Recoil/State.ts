import { atom } from 'recoil';

// 사용할 타입 정의
export interface LoginDataType {
    name: string;
    gender:string;
    accessToken: string;
    message: string;
}

// atom으로 이거 사용할거야 정의함! 
export const LoginDataState = atom<LoginDataType>({
    key: 'loginData', // key값은 다른 atom애들이랑 겹치면 안됨
    default: {
        name: '김아무개',
        gender: 'unknown',
        accessToken:'geqioneqoignioqngoqenoign',
        message: '로그인 시작 전입니다.'
    }
});

export const genderAtom = atom<string | null>({
    key: 'genderAtom',
    default: null,
  });
  
  export const nameAtom = atom<string | null>({
    key: 'nameAtom',
    default: null,
  });
  
  
  
  
  
  