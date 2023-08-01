// Request 타입 정의

export interface LoginReq{
    id:string;
    pwd:string;
}

export interface FindidReq{
    name:string;
    emailId:string;
    emailDomain:string;
}