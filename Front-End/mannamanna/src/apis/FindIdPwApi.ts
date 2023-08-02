import { AxiosResponse } from 'axios';
import { FindidReq } from './Request/Request';
import api from './Api';

// Execute find ID
export const getId = (findData: FindidReq): Promise<AxiosResponse> => {
  return api.post('/user/findId', {
    data: findData,
  });
};