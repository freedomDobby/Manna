//Response 타입 정의

export interface ErrorResponse {
    message?: string;
    field?: string;
  }
  
  export interface LoginSuccess {
    gender:string;
    userName:string;
    accessToken: string;
    refreshToken: string;
  }

  export interface ErrorResponse {
    message?: string;
    field?: string;
  }