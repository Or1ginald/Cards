import axios, { AxiosResponse } from 'axios';

// api

const baseUrl = process.env.REACT_APP_BASE_URL; // Достаем базовый юрл из .env(ссылка на хироку)

export const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

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
