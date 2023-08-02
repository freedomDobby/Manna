// Request 타입 정의

export interface LoginReq {
  id: string;
  pwd: string;
}

export interface FindidReq{
  name:string;
  emailId:string;
  emailDomain:string;
}


//회원가입시 받는 회원 정보
export type Profile = {
  name: string;
  id: string;
  pwd: string;
  tel: string;
  birth: string;
  emailId: string;
  emailDomain: string;
  height: number;
  job: string;
  smoke: boolean;
  drink: boolean;
  mbti: string;
  religion: string;
  pr: string;
  banFriend: boolean;
  address: {
    sido: string;
    gugun: string;
    detail: string;
    latitude: number;
    longitude: number;
    createTime: number;
  };
};
