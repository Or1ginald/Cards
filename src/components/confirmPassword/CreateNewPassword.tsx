import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import style from '../../style/Common.module.css';
import { isPasswordValid } from '../../utils';
import { CustomInput } from '../customInput';
import { Preloader } from '../preloader';

import { SetNewPassType } from 'api';
import { useAppSelector, useInput } from 'hooks';
import {
  setAppStatusAC,
  setErrorMessagePassAC,
  getErrorNetworkMessage,
  getErrorValidMessage,
  getStatus,
  forgotPassSetPassTC,
} from 'store';
import { ReturnComponentType } from 'types';

export const CreateNewPassword = (): ReturnComponentType => {
  const [isLoadedData, setLoadedData] = useState(false);
  const {
    value: newPassword,
    handleValue: handleNewPassword,
    resetValue: resetNewPassword,
  } = useInput('');

  const dispatch = useDispatch();

  const errorPassMessage = useAppSelector(getErrorValidMessage);
  const errorNetworkMessage = useAppSelector(getErrorNetworkMessage);
  const isLoading = useAppSelector(getStatus);

  const params = useParams<'token'>();
  const { token } = params as { token: string };

  const data: SetNewPassType = {
    password: newPassword,
    resetPasswordToken: token,
  };

  const timeOut = 2000;
  const onCreateButtonClick = (): void => {
    if (isPasswordValid(newPassword)) {
      dispatch(setAppStatusAC('loading'));
      dispatch(forgotPassSetPassTC(data, setLoadedData));
      dispatch(setAppStatusAC('succeeded'));
      resetNewPassword('');
    } else {
      dispatch(setErrorMessagePassAC('invalid password ;-('));
      setTimeout(() => {
        dispatch(setErrorMessagePassAC(''));
      }, timeOut);
    }
  };

  if (isLoadedData) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={style.mainContainer}>
      {isLoading === 'loading' ? (
        <Preloader />
      ) : (
        <div className={style.content}>
          <div className={style.contentWrap}>
            <h2>Create new password</h2>
            {errorPassMessage && (
              <span style={{ color: 'red' }}> {errorPassMessage} </span>
            )}
            {errorNetworkMessage && (
              <span style={{ color: 'red' }}> {errorNetworkMessage} </span>
            )}
            <div className={style.inputCentering}>
              <CustomInput
                placeholder="Password"
                typeInput="password"
                onChange={handleNewPassword}
                value={newPassword}
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
