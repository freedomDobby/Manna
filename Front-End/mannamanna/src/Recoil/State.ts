import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// Persist 설정을 위한 storage 설정
const sessionStorage=
typeof window!=='undefined'? window.sessionStorage:undefined

const { persistAtom } = recoilPersist({
    key: 'recoilPersistData',
    storage: sessionStorage,
  });


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
    effects_UNSTABLE: [persistAtom],
  });
  
  export const nameAtom = atom<string | null>({
    key: 'nameAtom',
    default: null,
    effects_UNSTABLE: [persistAtom]
  });

  export const idAtom=atom<string|null>({
    key:'idAtom',
    default:null,
    effects_UNSTABLE: [persistAtom],
  });

  export const accessTokenAtom=atom<string|null>({
    key:'accessTokenAtom',
    default:null,
    effects_UNSTABLE: [persistAtom],
  });
  
  export const refreshTokenAtom=atom<string|null>({
    key:'refreshTokenAtom',
    default:null,
    effects_UNSTABLE: [persistAtom],
  });
  
  
  export const findEmailNameAtom = atom<string>({
    key: 'findEmailNameAtom',
    default: '',
  });
  

  export const findEmailDomainAtom = atom<string>({
    key: 'findEmailDomainAtom',
    default: '',
  });

  export const findIdModalAtom = atom<boolean>({
    key: 'findIdModalAtom',
    default: false,
  });

  export const findIdCheckIdAtom = atom<string>({
    key: 'findIdCheckIdAtom',
    default: "떴냐아아",
  });
  
  export const findPwModalAtom = atom<boolean>({
    key: 'findPwModalAtom',
    default: false,
  });

  
  
  