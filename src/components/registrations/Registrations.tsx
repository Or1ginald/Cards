import React, { useState } from 'react';

import { Navigate } from 'react-router-dom';

import { CustomInput } from '../customInput';

import st from './Registrations.module.css';

import { authAPI } from 'api';
import { PATH } from 'enum/pathes';
import { useInput } from 'hooks';
import style from 'style/Common.module.css';
import { ReturnComponentType } from 'types';
import { isEmailValid, isPasswordValid } from 'utils';

export const Registrations = (): ReturnComponentType => {
  const { value: email, handleValue: handleEmail } = useInput('');
  const { value: password, handleValue: handlePassword } = useInput('');
  const { value: confirmPassword, handleValue: handleConfirmPassword } = useInput('');
  // const { value: isLoadedData, handleValue: handleIsLoadedData } = useInput('');

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoadedData, setLoadedData] = useState<boolean>(false);

  // const onEmailInputEnter = (e: any): void => {
  //   setEmail(e.currentTarget.value);
  // };

  // const onPasswordInputEnter = (e: any): void => {
  //   setPassword(e.currentTarget.value);
  // };
  // const onPasswordAgainInputEnter = (e: any): void => {
  //   setConfirmPassword(e.currentTarget.value);
  // };

  const data: any = {
    email,
    password,
  };

  const onSendButtonClick = (): void => {
    if (password !== confirmPassword) return;
    if (isPasswordValid(password) && isEmailValid(email)) {
      authAPI.register(data).then(() => {
        setLoadedData(true);
      });
    }
  };
  if (isLoadedData) {
    return <Navigate to={PATH.LOGIN} />;
  }
  // hello..,
  /// test 2
  /// git test commit
  /// git test commit 111
  return (
    <div className={style.mainContainer}>
      <div className={style.content}>
        <div className={style.contentWrap}>
          <h2>Registration</h2>
          <CustomInput
            placeholder="Email"
            typeInput="email"
            className={style.inputEmail}
            onChange={handleEmail}
            value={email}
          />
          <CustomInput
            placeholder="Password"
            typeInput="password"
            className={style.inputPassword}
            onChange={handlePassword}
            value={password}
          />
          <CustomInput
            placeholder="Confirm Password"
            typeInput="password"
            className={style.inputPassword}
            onChange={handleConfirmPassword}
            value={password}
          />
          <p> Have fun! </p>
          <div className={st.btns}>
            <button className={style.btn}>Cancel</button>
            <button className={style.btn} onClick={onSendButtonClick}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
