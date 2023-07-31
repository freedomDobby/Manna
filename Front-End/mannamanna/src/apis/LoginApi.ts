import { AxiosResponse } from 'axios';
import { LoginReq } from './Request/Request';
import api from './Api';

// 로그인 실행
export const postLogin=(loginData:LoginReq):Promise<AxiosResponse>=>{
    return api.post('/user/login', loginData);
}
