import axios from 'axios';

const baseUrl = 'https://neko-back.herokuapp.com/2.0';

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export type addNewPassType = {
  email: string;
  from: string;
  message: string;
};

export type setNewPassType = {
  password: string;
  resetPasswordToken: string | undefined;
};

export const addNewPassAPI = {
  addNewPass(params: addNewPassType) {
    return instance.post<addNewPassType, any>('auth/forgot', params);
  },
  setNewPass(params: setNewPassType) {
    return instance.post<setNewPassType, any>('auth/set-new-password', params);
  },
};
