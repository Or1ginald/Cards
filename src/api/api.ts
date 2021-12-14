import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL; // Достаем базовый юрл из .env(ссылка на хироку)

const instance = axios.create({
  baseURL: baseUrl /* "http://localhost:7542/2.0/" */,
  withCredentials: true, // браузер разбирайся с куками сам
});

// api

export const authAPI = {
  login(params: LoginParamsType) {
    return instance.post<LoginParamsType>('auth/login', params);
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
