import React, { ChangeEvent, useState } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { addNewPassAPI, SetNewPassType } from '../../api/forgotPasswordApi';

import style from './ConfirmPassword.module.css';
import { PopupError } from './Popup';

import { ReturnComponentType } from 'types';

export const CreateNewPassword = (): ReturnComponentType => {
  const [newPassword, setPassword] = useState('');
  const [isData, setData] = useState(false);
  const [isError, setError] = useState(false);

  const onPasswordInputEnter = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const location = useLocation();
  const lastElement = 1;
  const token =
    location.pathname.split('/')[location.pathname.split('/').length - lastElement];

  const data: SetNewPassType = {
    password: newPassword,
    resetPasswordToken: token,
  };

  const onCreateButtonClick = (): void => {
    addNewPassAPI
      .setNewPass(data)
      .then(() => {
        setData(true);
      })
      .catch(() => {
        setError(true);
      });
  };

  if (isData) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={style.mainContainer}>
      {isError ? (
        <PopupError error={isError} setError={setError} />
      ) : (
        <div className={style.content}>
          <span>it-incubator</span>
          <span>Create new password</span>
          <input
            className={style.inputPassword}
            type="password"
            placeholder="Password"
            value={newPassword}
            onChange={onPasswordInputEnter}
            required
          />

          <p> Create new password and we will send you further instructions to email</p>
          <div>
            <button className={style.btn} onClick={onCreateButtonClick}>
              create new password
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
