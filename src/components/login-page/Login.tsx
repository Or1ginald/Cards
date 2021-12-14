import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { authAPI } from '../../api/api';

export const Login: React.FC<LoginPagePropsType> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  /* const [rememberMe, setRememberMe] = useState<boolean>(false); */
  const data = { email, password, rememberMe: true };
  useEffect(() => {}, []);
  const onChangeEmail = (e: any): void => setEmail(e.currentTarget.value);
  const onChangePassword = (e: any): void => setPassword(e.currentTarget.value);
  /* const onChangeCheckBox = (e: any): void => setRememberMe(e.currentTarget.checked); */
  const onClickHandlerSignIn = (): void => {
    authAPI.login(data).then(res => {
      console.log(res.data);
    });
  };
  return (
    <div>
      Email
      <div>
        <input type="text" onChange={onChangeEmail} value={email} />
        {/*  <CustomInputText onChangeText={onChangeEmail} value={email} /> */}
      </div>
      Password
      <div>
        <input type="password" onChange={onChangePassword} value={password} />
        {/* <CustomInputText onChangeText={onChangePassword} value={password} /> */}
      </div>
      {/* <CustomCheckbox onChangeChecked={onChangeCheckBox} checked={rememberMe} /> remember
      me */}
      <div>
        <button onClick={onClickHandlerSignIn}>Sign In</button>
        {/* <CustomButton name={'Sign in'}/> */}
      </div>
      <Link to="/registration"> Sign Up </Link>
    </div>
  );
};

export type LoginPagePropsType = {};
