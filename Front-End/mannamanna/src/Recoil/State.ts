import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
// import Register from './../pages/User/Register/Register';
import { MessageReq, SogaetingRecommandReq, SogaetingReq } from '../apis/Request/Request';
import Schedule from './../pages/User/Schedule/Schedule';

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


// 로그인 
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
  
 // 쪽지s

 export const sendNoteAtom = atom<MessageReq>({
  key: 'sendnoteAtom', 
  default: {
    receiver: '',
    sender: '',
    subject: '',
    content: '',
    isSogae: false,
    date:'',
  },
});

export const sendNoteReceiverAtom = atom<string>({
  key: 'sendNoteReceiverAtom', 
  default:'',
});

export const sendNoteIdAtom = atom<number>({
  key: 'sendNoteIdAtom', 
  default:0,
});


export const sogaetingNoteAtom = atom<SogaetingReq>({
  key: 'sogaetingNoteAtom', 
  default: {
    receiver: '',
    sender: '',
    date:'',
  },
});

export const sogaetingNoteReceiverAtom = atom<string>({
  key: 'sogaetingNoteReceiverAtom', 
  default:'',
});
  // 이메일 
  
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

  
  

  // Modal 모음 
  export const LoginErrorModalAtom = atom<boolean>({
    key: 'LoginErrorModalAtom',
    default: false,
  });

  export const ForgotIdErrorModalAtom = atom<boolean>({
    key: 'ForgotIdErrorModalAtom',
    default: false,
  });



  export const RegisterModalAtom = atom<boolean>({
    key: 'RegisterModalAtom',
    default: false,
  });

  export const RegisterMessageAtom = atom<string>({
    key: 'RegisterMessageAtom',
    default: '회원가입이 성공하였습니다.',
  });

  export const SendNoteModalAtom=atom<boolean>({
    key: 'SendNoteModalAtom',
    default: false,
  });

  export const SogaeNoteModalAtom=atom<boolean>({
    key: 'SogaeNoteModalAtom',
    default: false,
  });

  

  export const NoteAlarmAtom=atom<boolean>({
    key: 'NoteAlarmAtom',
    default: false,
  });

  export const SogaeResultNoteAtom=atom<boolean>({
    key: 'SogaeResultNoteAtom',
    default: false,
  });


  export const DeleteNoteAtom=atom<boolean>({
    key: 'DeleteNoteAtom',
    default: false,
  });

  export const SogaetingFilterAtom = atom<SogaetingRecommandReq>({
    key: "SogaetingFilterAtom",
    default: {
      mbti: null,
      religion: null,
      isDrinker: null,
      isSmoker: null,
    },
  });

  // 달력 

  export const selectedDateAtom = atom<Date | null>({
    key: 'selectedDate',
    default: new Date(), // 현재 날짜로 초기화 또는 null로 초기화할 수 있습니다.
  });

  export const scheduleIdAtom = atom<number | null>({
    key: 'scheduleIdAtom',
    default: null, // 현재 날짜로 초기화 또는 null로 초기화할 수 있습니다.
  });

  export const inputValueState = atom({
    key: 'inputValueState',
    default: '',
  });