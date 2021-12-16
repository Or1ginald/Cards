import { AxiosResponse } from 'axios';

import { instance } from './apiConfig';

export const authAPI = {
  login(params: LoginParamsType) {
    return instance.post<
      LoginParamsType,
      AxiosResponse<{
        /* 'сам объект сервера который отправляет игнат' */
        /* AxiosResponse нужен только у методов put и post */
      }>
    >('auth/login', params);
  },
  logOut() {
    return instance.delete<any>('auth/login');
  },
  me() {
    return instance.post<any>('auth/me');
  },
  register(data: DataType) {
    return instance.post<any>('auth/register', data);
  },
};

// types

export type LoginParamsType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
export type DataType = {
  email: string;
  password: string;
};
