import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import { AddNewPassType } from '../../api/forgotPasswordApi';
import { useAppSelector } from '../../hooks';
import { forgotPassAddEmailTC } from '../../store/middlewares/forgotPassAddEmailTC';
import {
  setErrorMessageNetworkAC,
  setErrorMessagePassAC,
} from '../../store/reducers/errorReducer';
import {
  getErrorNetworkMessage,
  getErrorValidMessage,
} from '../../store/selectors/confirmPassword';
import style from '../../style/Common.module.css';
import { isEmailValid } from '../../utils/emailValidation';
import { Preloader } from '../preloader/Preloader';

import { ReturnComponentType } from 'types';

export const ConfirmPassword = (): ReturnComponentType => {
  const [loading, setLoading] = useState(false);
  const [isShown, setShowMessage] = useState(false);
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const errorPassMessage = useAppSelector(getErrorValidMessage);
  const errorNetworkMessage = useAppSelector(getErrorNetworkMessage);

  const dataPayload: AddNewPassType = {
    email,
    from: 'test-front-admin <samutic40@gmail.com>',
    message: `<div style='background-color: #ffd500; 
padding: 15px; 
border-color: #ff9900; 
width: 250px;
height: 30px'> 
password recovery link: <a href='https://Or1ginald.github.io/gameCards/#/createNewPassword/$token$'> recovery link </a></div>`,
  };

  const onChangeEmailInputEnter = (e: any): void => {
    setEmail(e.currentTarget.value);
    dispatch(setErrorMessagePassAC(''));
    dispatch(setErrorMessageNetworkAC(''));
  };

  const onSendButtonClick = (): void => {
    if (isEmailValid(email)) {
      dispatch(forgotPassAddEmailTC(dataPayload, setLoading, setShowMessage));
      setEmail('');
    } else {
      dispatch(setErrorMessagePassAC('invalid email ;-('));
    }
  };

  if (isShown) {
    return <Navigate to="/popup" />;
  }

  return (
    <div className={style.mainContainer}>
      {loading ? (
        <Preloader />
      ) : (
        <div className={style.content}>
          <div className={style.contentWrap}>
            <h2>Forgot your password?</h2>
            {errorPassMessage && (
              <span style={{ color: 'red' }}> {errorPassMessage} </span>
            )}
            {errorNetworkMessage && (
              <span style={{ color: 'red' }}> {errorNetworkMessage} </span>
            )}
            <div className={style.inputCentering}>
              <input
                placeholder="Email"
                type="email"
                className={style.inputEmail}
                onChange={onChangeEmailInputEnter}
              />
            </div>
            <p> Enter your email and we will send you further instructions</p>
            <div>
              <button className={style.btn} onClick={onSendButtonClick}>
                send instructions
              </button>
            </div>
            <span>Did you remember your password?</span>
            <Link to="/login"> Try logging in </Link>
          </div>
        </div>
      )}
    </div>
  );
};
