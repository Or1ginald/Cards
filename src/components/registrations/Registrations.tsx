import React, { useState } from 'react';

import { Navigate } from 'react-router-dom';

import { authAPI } from '../../api/loginApi';
import style from '../../style/Common.module.css';

import st from './Registrations.module.css';

import { PATH } from 'enum/pathes';
import { ReturnComponentType } from 'types';

export const Registrations = (): ReturnComponentType => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoadedData, setLoadedData] = useState<boolean>(false);

  const onEmailInputEnter = (e: any): void => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordInputEnter = (e: any): void => {
    setPassword(e.currentTarget.value);
  };
  const onPasswordAgainInputEnter = (e: any): void => {
    setConfirmPassword(e.currentTarget.value);
  };

  const data: any = {
    email,
    password,
  };

  const onSendButtonCLick = (): void => {
    if (password === confirmPassword) {
      authAPI.register(data).then(() => {
        setLoadedData(true);
      });
    }
  };
  if (isLoadedData) {
    return <Navigate to={PATH.LOGIN} />;
  }
  return (
    <div className={style.mainContainer}>
      <div className={style.content}>
        <div className={style.contentWrap}>
          <h2>Registration</h2>
          <input
            className={style.inputPassword}
            type="Email"
            placeholder="Email"
            value={email}
            onChange={onEmailInputEnter}
            required
          />
          <input
            className={style.inputPassword}
            type="Password"
            placeholder="Password"
            value={password}
            onChange={onPasswordInputEnter}
            required
          />
          <input
            className={style.inputPassword}
            type="Password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={onPasswordAgainInputEnter}
            required
          />
          <p> Have fun! </p>
          <div className={st.btns}>
            <button className={style.btn}>cancel</button>
            <button className={style.btn} onClick={onSendButtonCLick}>
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
