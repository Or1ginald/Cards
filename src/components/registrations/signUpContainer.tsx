import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootStoreType } from '../../store';
import { setErrorAC, signUpTC } from '../../store/reducers/signUp';

import { SignUp } from './signUp';

import { PATH } from 'enum/pathes';
import { useInput } from 'hooks';
import { ReturnComponentType } from 'types';
import { isEmailValid, isPasswordValid } from 'utils';

export const SignUpContainer = (): ReturnComponentType => {
  const { value: email, handleValue: handleEmail } = useInput('');
  const { value: password, handleValue: handlePassword } = useInput('');
  const { value: confirmPassword, handleValue: handleConfirmPassword } = useInput('');
  const error = useSelector<RootStoreType, null | string>(state => state.signUp.error);
  const isFetching = useSelector<RootStoreType, boolean>(
    state => state.signUp.isFetching,
  );
  const isSignUp = useSelector<RootStoreType, boolean>(state => state.signUp.isSignUp);
  const dispatch = useDispatch();

  const data: any = {
    email,
    password,
  };

  const onSendButtonClick = (): void => {
    if (password !== confirmPassword) {
      dispatch(setErrorAC(error));
    }
    if (isPasswordValid(password) && isEmailValid(email)) {
      dispatch(signUpTC(data));
    }
  };
  if (isSignUp) {
    return <Navigate to={PATH.LOGIN} />;
  }
  return (
    <SignUp
      email={email}
      handleEmail={handleEmail}
      password={password}
      handlePassword={handlePassword}
      handleConfirmPassword={handleConfirmPassword}
      // isLoadedData={isLoadedData}
      isFetching={isFetching}
      onSendButtonClick={onSendButtonClick}
      error={error}
    />
  );
};
