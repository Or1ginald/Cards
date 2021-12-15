import axios, { AxiosResponse } from 'axios';

import { Nullable } from '../types';

/* import { instance } from './apiConfig'; */

export type AddNewPassType = {
  email: Nullable<string>;
  from: Nullable<string>;
  message: Nullable<string>;
};

export type SetNewPassType = {
  password: Nullable<string>;
  resetPasswordToken: Nullable<string>;
};

const baseUrl = process.env.REACT_APP_BASE_URL; // Достаем базовый юрл из .env(ссылка на хироку)

export const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const addNewPassAPI = {
  addNewPass(params: AddNewPassType) {
    return instance.post<AddNewPassType, AxiosResponse<any>>('auth/forgot', params);
  },
  setNewPass(params: SetNewPassType) {
    return instance.post<SetNewPassType, AxiosResponse<any>>(
      'auth/set-new-password',
      params,
    );
  },
};
