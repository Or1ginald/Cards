import { instance } from './apiConfig';

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
