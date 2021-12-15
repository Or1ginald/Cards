import React, { ChangeEvent, useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import { LoginParamsType } from '../../api/loginApi';
import { RootStoreType, logIn } from '../../store';
import { ReturnComponentType } from '../../types';
import style from '../confirmPassword/ConfirmPassword.module.css';

export const Login = (): ReturnComponentType => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isDataLoaded = useSelector<RootStoreType, boolean>(state => state.login.verified);
  const errorMessage = useSelector<RootStoreType>(state => state.login.error);
  const data = { email, password, rememberMe: true };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void =>
    setEmail(e.currentTarget.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void =>
    setPassword(e.currentTarget.value);
  const onChangeCheckBox = (e: ChangeEvent<HTMLInputElement>): void =>
    setRememberMe(e.currentTarget.checked);

  const authLogin = useCallback(
    (dataItem: LoginParamsType): any => {
      dispatch(logIn(dataItem));
    },
    [dispatch],
  );
  const onClickHandlerSignIn = (): void => {
    if (data) {
      authLogin(data);
      // } else {
      //   setErrorMessage('Fill correct field');
    }
  };

  if (isDataLoaded) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.content}>
        <h3> LOGIN </h3>
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
        <div>
          remember me
          <input type="checkbox" checked={rememberMe} onChange={onChangeCheckBox} />
        </div>
        <div>
          <Link to="/confirmPassword"> forgot password </Link>
        </div>
        <button onClick={onClickHandlerSignIn} className={style.btn}>
          Sign In
        </button>
        <span> Don`t have an account? </span>
        <Link to="/registration"> Sign Up </Link>
      </div>
    </div>
  );
};
