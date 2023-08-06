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

  export interface findidRes{
    id:string;
  }

  export interface checkNote{
    result:boolean;
  }

  export interface ReceivedNotesRes {
    ReceivedNotes: Array<{
      sender: string;
      receiver: string;
      title: string;
      isRead: boolean;
      isLove: boolean;
      date: string;
    }>;
  }


  export interface SentNotesRes {
    SentNote: Array<{
      sender: string;
      receiver: string;
      title: string;
      isRead: boolean;
      isLove: boolean;
      date: string;
    }>;
  }
