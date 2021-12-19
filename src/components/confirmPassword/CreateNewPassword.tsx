import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { SetNewPassType } from '../../api/forgotPasswordApi';
import { RootStoreType } from '../../store';
import { forgotPassSetPassTC } from '../../store/middlewares/forgotPassSetPassTC';
import style from '../../style/Common.module.css';
import { isPasswordValid } from '../../utils';

import { setErrorMessagePassAC } from './errorReducer';

import { Nullable, ReturnComponentType } from 'types';

export const CreateNewPassword = (): ReturnComponentType => {
  const [isLoadedData, setLoadedData] = useState(false);
  const [newPassword, setPassword] = useState('');

  const dispatch = useDispatch();

  const errorPassMessage = useSelector<RootStoreType, Nullable<string> | undefined>(
    state => state.errorMessage.errorValidation,
  );
  const errorNetworkMessage = useSelector<RootStoreType, Nullable<string> | undefined>(
    state => state.errorMessage.errorNetwork,
  );

  const location = useLocation();
  const lastElement = 1;
  const partPath = location.pathname.split('/');
  const token = partPath[partPath.length - lastElement];

  const data: SetNewPassType = {
    password: newPassword,
    resetPasswordToken: token,
  };
  const onChangePasswordInputEnter = (e: any): void => {
    setPassword(e.currentTarget.value);
    dispatch(setErrorMessagePassAC(''));
  };

  const onCreateButtonClick = (): void => {
    if (isPasswordValid(newPassword)) {
      dispatch(forgotPassSetPassTC(data, setLoadedData));
      setPassword('');
    } else {
      dispatch(setErrorMessagePassAC('mistaken password ;-('));
    }
  };

  if (isLoadedData) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.content}>
        <div className={style.contentWrap}>
          <h2>Create new password</h2>
          {errorPassMessage && <span style={{ color: 'red' }}> {errorPassMessage} </span>}
          {errorNetworkMessage && (
            <span style={{ color: 'red' }}> {errorPassMessage} </span>
          )}
          <div className={style.inputCentering}>
            <input
              placeholder="Password"
              type="password"
              className={style.inputPassword}
              onChange={onChangePasswordInputEnter}
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
    </div>
  );
};
