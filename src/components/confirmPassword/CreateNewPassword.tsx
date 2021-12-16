import React, { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { SetNewPassType } from '../../api/forgotPasswordApi';
import { forgotPassSetPassTC } from '../../store/middlewares/forgotPassSetPassTC';
import style from '../../style/Common.module.css';

import { PopupError } from './PopupError';

import { ReturnComponentType } from 'types';

export const CreateNewPassword = (): ReturnComponentType => {
  const [newPassword, setPassword] = useState('');
  const [isLoadedData, setLoadedData] = useState(false);
  const [isError, setError] = useState(false);

  const dispatch = useDispatch();

  const location = useLocation();
  const lastElement = 1;
  const token =
    location.pathname.split('/')[location.pathname.split('/').length - lastElement];

  const data: SetNewPassType = {
    password: newPassword,
    resetPasswordToken: token,
  };
  const onPasswordInputEnter = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const onCreateButtonClick = (): void => {
    dispatch(forgotPassSetPassTC(data, setLoadedData, setError));
  };

  if (isLoadedData) {
    return <Navigate to="/login" />;
  }
  console.log();

  return (
    <div className={style.mainContainer}>
      {isError ? (
        <PopupError error={isError} setError={setError} />
      ) : (
        <div className={style.content}>
          <h2>Create new password</h2>
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
