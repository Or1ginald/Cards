import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import { AddNewPassType } from '../../api/forgotPasswordApi';
import { useInput } from '../../hooks/useInput/useInput';
import { forgotPassAddEmailTC } from '../../store/middlewares/forgotPassAddEmailTC';
import style from '../../style/Common.module.css';
import { isEmailValid } from '../../utils/emailValidation';
import { CustomInput } from '../customInput';
import { Preloader } from '../preloader/Preloader';

import { PATH } from 'enum/pathes';
import { ReturnComponentType } from 'types';

export const ConfirmPassword = (): ReturnComponentType => {
  const [loading, setLoading] = useState(false);
  const [isShown, setShowMessage] = useState(false);

  const dispatch = useDispatch();
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');

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

  const onSendButtonClick = (): void => {
    if (isEmailValid(email)) {
      resetEmail('');
      setLoading(true);
      dispatch(forgotPassAddEmailTC(dataPayload, setLoading, setShowMessage));
    } else {
      console.log('ERROR EMAIL');
    }
  };

  if (isShown) {
    return <Navigate to={PATH.POPUP} />;
  }

  return (
    <div className={style.mainContainer}>
      {loading ? (
        <Preloader />
      ) : (
        <div className={style.content}>
          <div className={style.contentWrap}>
            <h2>Forgot your password?</h2>
            <div className={style.inputCentering}>
              <CustomInput
                bind={bindEmail}
                placeholder="Email"
                typeInput="email"
                className={style.inputEmail}
              />
            </div>
            <p> Enter your email and we will send you further instructions</p>
            <div>
              <button className={style.btn} onClick={onSendButtonClick}>
                send instructions
              </button>
            </div>
            <span>Did you remember your password?</span>
            <Link to={PATH.LOGIN}> Try logging in </Link>
          </div>
        </div>
      )}
    </div>
  );
};
