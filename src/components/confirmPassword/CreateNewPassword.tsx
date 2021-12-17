import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { SetNewPassType } from '../../api/forgotPasswordApi';
import { useInput } from '../../hooks/useInput/useInput';
import { forgotPassSetPassTC } from '../../store/middlewares/forgotPassSetPassTC';
import style from '../../style/Common.module.css';
import { isPasswordValid } from '../../utils';
import { CustomInput } from '../customInput';

import { PopupError } from './PopupError';

import { ReturnComponentType } from 'types';

export const CreateNewPassword = (): ReturnComponentType => {
  const [isLoadedData, setLoadedData] = useState(false);
  const [isError, setError] = useState(false);

  const dispatch = useDispatch();
  const { value: newPassword, bind: bindPassword, reset: resetPassword } = useInput('');

  const location = useLocation();
  const lastElement = 1;
  const token =
    location.pathname.split('/')[location.pathname.split('/').length - lastElement];

  const data: SetNewPassType = {
    password: newPassword,
    resetPasswordToken: token,
  };

  const onCreateButtonClick = (): void => {
    if (isPasswordValid(newPassword)) {
      resetPassword('');
      dispatch(forgotPassSetPassTC(data, setLoadedData, setError));
    } else {
      console.log('error password');
    }
  };

  if (isLoadedData) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={style.mainContainer}>
      {isError ? (
        <PopupError error={isError} setError={setError} />
      ) : (
        <div className={style.content}>
          <div className={style.contentWrap}>
            {' '}
            <h2>Create new password</h2>
            <div className={style.inputCentering}>
              <CustomInput
                placeholder="Password"
                typeInput="password"
                className={style.inputPassword}
                bind={bindPassword}
              />
            </div>
            <p> Create new password and we will send you further instructions to email</p>
            <div>
              <button className={style.btn} onClick={onCreateButtonClick}>
                Create new password
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
