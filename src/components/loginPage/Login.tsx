import React, { ChangeEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import { logIn, RootStoreType } from '../../store';
import { ReturnComponentType } from '../../types';
import style from '../confirmPassword/ConfirmPassword.module.css';

import st from './Login.module.css';

export const Login = (): ReturnComponentType => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isDataLoaded = useSelector<RootStoreType, boolean>(state => state.login.verified);
  const errorMessage = useSelector<RootStoreType>(state => state.login.error);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void =>
    setEmail(e.currentTarget.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void =>
    setPassword(e.currentTarget.value);
  const onChangeCheckBox = (e: ChangeEvent<HTMLInputElement>): void =>
    setRememberMe(e.currentTarget.checked);

  const onClickHandlerLogin = (): void => {
    dispatch(logIn({ email, password, rememberMe }));
  };
  //
  // useEffect(() => {
  //   // eslint-disable-next-line no-debugger
  //   debugger;
  //   authAPI
  //     .register({ email: 'helenaod.2021@gmail.com', password: 'free2021' })
  //     .then(res => {
  //       console.log(res);
  //     });
  // }, []);
  if (isDataLoaded) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.content}>
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
          <p>remember me</p>
          <input type="checkbox" checked={rememberMe} onChange={onChangeCheckBox} />
        </div>
        <div>
          <Link to="/confirmPassword"> Forgot password </Link>
        </div>
        <button onClick={onClickHandlerLogin} className={style.btn}>
          Sign In
        </button>
        <p> Do not have an account? </p>
        <Link to="/registration"> Sign Up </Link>
      </div>
    </div>
  );
};
