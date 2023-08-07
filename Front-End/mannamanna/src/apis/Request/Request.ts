// Request 타입 정의

export interface LoginReq {
  id: string;
  pwd: string;
}

export interface FindidReq {
  name: string;
  emailId: string;
  emailDomain: string;
}

export interface FindidReq {
  name: string;
  emailId: string;
  emailDomain: string;
}

export interface FindpwReq {
  id: string;
  emailId: string;
  emailDomain: string;
}

//회원가입시 받는 회원 정보
export type RegisterReq = {
  id: string;
  pwd: string;
  name: string;
  gender: any; //api
  tel: string;
  birth: string;
  emailId: string; //api
  emailDomain: string; //api
  height: number;
  job: string;
  isSmoker: boolean;
  isDrinker: boolean;
  mbti: string;
  religion: string;
  introduction: string;
  sido: string;
  gugun: string;
  detail: string;
  latitude: number; //api
  longitude: number; //api
  priority1: number;
  priority2: number;
  priority3: number;
};


export interface MessageReq {
  receiver: string;
  sender: string;
  subject: string;
  content: string;
  isSogae: boolean;
  date:string;
}