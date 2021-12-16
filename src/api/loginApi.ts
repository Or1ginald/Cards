import { AxiosResponse } from 'axios';

import { instance } from './apiConfig';

export const authAPI = {
  login(params: LoginParamsType) {
    return instance.post<
      LoginParamsType,
      /* 'сам объект сервера который отправляет игнат' */
      /* AxiosResponse нужен только у методов put и post */
      AxiosResponse<ResponseType>
    >('auth/login', params);
  },
  logOut() {
    return instance.delete<ResponseType>('auth/login');
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

export type ResponseType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  token: string;
  publicCardPacksCount: number;
  created: Date;
  updated: Date;
  verified: boolean;
  rememberMe: boolean;
};
