import { AxiosResponse } from 'axios';

import { instance } from './apiConfig';

// api

export const authAPI = {
  login(params: LoginParamsType) {
    return instance.post<
      LoginParamsType,
      AxiosResponse<{
        /* 'сам объект сервераб который отправляет игнат' */
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
  register(data: dataType) {
    return instance.post<any>('auth/register', data);
  },
};

// types

export type LoginParamsType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
export type dataType = {
  email: string;
  password: string;
};
