import React, { useState } from 'react';

import { Link, Navigate } from 'react-router-dom';

import { authAPI } from '../../api/loginApi';
import style from '../confirmPassword/ConfirmPassword.module.css';

export const Login: React.FC<LoginPagePropsType> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  /* const [rememberMe, setRememberMe] = useState<boolean>(false); */
  const [isDataLoaded, setDataLoaded] = useState<boolean>(false);

  const data = { email, password, rememberMe: true };

  const onChangeEmail = (e: any): void => setEmail(e.currentTarget.value);
  const onChangePassword = (e: any): void => setPassword(e.currentTarget.value);
  /* const onChangeCheckBox = (e: any): void => setRememberMe(e.currentTarget.checked); */
  const onClickHandlerSignIn = (): void => {
    authAPI.login(data).then(() => {
      setEmail('');
      setPassword('');
      setDataLoaded(true);
    });
  };

  if (isDataLoaded) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.content}>
        <h1> LOGIN </h1>
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
          <Link to="/confirmPassword"> forgot password </Link>
        </div>
        <button onClick={onClickHandlerSignIn} className={style.btn}>
          Sign In
        </button>

        <Link to="/registration"> Sign Up </Link>
      </div>
    </div>
  );
};

export type LoginPagePropsType = {};
