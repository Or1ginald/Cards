import React from 'react';

import { Link } from 'react-router-dom';

import errorSign from '../../assets/error.png';
import letter from '../../assets/letter.png';
import style from '../../style/Common.module.css';
import { ReturnComponentType } from '../../types';

import st from './ConfirmPassword.module.css';

export const Popup = (): ReturnComponentType => (
  <div>
    <div className={style.mainContainer}>
      <div className={style.content}>
        <div className={style.closeBtn}>
          <span className={style.spanClose}>it-incubator</span>
        </div>
        <img className={st.letterImg} src={letter} alt="letter" />
        <span>Check Email</span>
        <p>We have sent the Email with instructions to your email </p>
      </div>
    </div>
  </div>
);

type PopupErrorType = {
  error: boolean;
  setError: (error: boolean) => void;
};

export const PopupError = ({ error, setError }: PopupErrorType): ReturnComponentType => (
  <div>
    <div className={style.mainContainer}>
      <div className={style.content}>
        <span className={style.spanClose}>it-incubator</span>

        <img className={st.errorImg} src={errorSign} alt="error" />
        <span>Try again</span>
        <span>Something goes wrong</span>
        <Link
          to="/confirmPassword"
          onClick={() => {
            setError(!error);
          }}
        >
          Create new password again
        </Link>
      </div>
    </div>
  </div>
);
