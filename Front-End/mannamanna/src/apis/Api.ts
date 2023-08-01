import axios, { AxiosError } from 'axios';
import { LOCAL_STORAGE_KEY } from '../apis/utils/Storage';
import { getLocalStorageItem, removeLocalStorageItem } from './utils/LocalStrorage';
import { API_BASE_URL } from './Url';
import { ErrorResponse } from './Response/Response';
import { useNavigate } from 'react-router-dom';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

// api.interceptors.request.use(
//   (config:any) => {
//     const token = getLocalStorageItem({
//       key: LOCAL_STORAGE_KEY.ACCESS_TOKEN,
//       defaultValue: '',
//     });

//     if (typeof token !== 'string' || !token) return config;

//     config.headers = {
//       'Content-type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     };

//     return config;
//   },

//   (error) => {
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },

//   (error: AxiosError<ErrorResponse>) => {
//     if (error?.response?.status === 401) {
//       removeLocalStorageItem({ key: LOCAL_STORAGE_KEY.ACCESS_TOKEN });
//       const navigate=useNavigate();
//       navigate('/login');
//     }

//     return Promise.reject(error);
//   }
// );

export default api;
