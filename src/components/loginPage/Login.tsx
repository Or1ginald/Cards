import React, { ChangeEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import { PATH } from '../../enum/pathes';
import { RootStoreType, logInTC } from '../../store';
import style from '../../style/Common.module.css';
import { ReturnComponentType } from '../../types';
import { isEmailValid, isPasswordValid } from '../../utils';

import st from './Login.module.css';

export const Login = (): ReturnComponentType => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isDataLoaded = useSelector<RootStoreType, boolean>(state => state.login.isAuth);
  const errorMessage = useSelector<RootStoreType>(state => state.login.error);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void =>
    setEmail(e.currentTarget.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void =>
    setPassword(e.currentTarget.value);
  const onChangeCheckBox = (e: ChangeEvent<HTMLInputElement>): void =>
    setRememberMe(e.currentTarget.checked);

  const onClickHandlerLogin = (): void => {
    if (isEmailValid(email) && isPasswordValid(password)) {
      dispatch(logInTC({ email, password, rememberMe }));
    } else {
      console.log('error');
    }
  };
  if (isDataLoaded) {
    return <Navigate to={PATH.PROFILE} />;
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.content}>
        <div className={style.contentWrap}>
          <h2> Login </h2>
          {errorMessage ? <span style={{ color: 'red' }}> {errorMessage} </span> : ''}
          <input
            type="text"
            onChange={onChangeEmail}
            value={email}
            placeholder="Email"
            className={style.inputEmail}
          />
          <input
            type="password"
            onChange={onChangePassword}
            value={password}
            placeholder="Password"
            className={style.inputEmail}
          />
          <div className={st.rememberMeInput}>
            remember me
            <input type="checkbox" checked={rememberMe} onChange={onChangeCheckBox} />
          </div>
          <div>
            <Link to={PATH.CONFIRM_PASSWORD}> Forgot password </Link>
          </div>
          <button onClick={onClickHandlerLogin} className={style.btn}>
            Sign In
          </button>
          <p> Do not have an account? </p>
          <Link to={PATH.REGISTRATION}> Sign Up </Link>
        </div>
      </div>
    </div>
  );
};
