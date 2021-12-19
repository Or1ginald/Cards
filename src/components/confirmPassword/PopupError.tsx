import React from 'react';

import { Link } from 'react-router-dom';

import errorSign from '../../assets/error.png';
import { PATH } from '../../enum/pathes';
import style from '../../style/Common.module.css';
import { ReturnComponentType } from '../../types';

import st from './ConfirmPassword.module.css';

type PopupErrorType = {
  error: boolean;
  setError: (error: boolean) => void;
};

export const PopupError = ({ error, setError }: PopupErrorType): ReturnComponentType => {
  const onLinkClick = (): void => setError(!error);
  return (
    <div>
      <div className={style.mainContainer}>
        <div className={style.content}>
          <img className={st.errorImg} src={errorSign} alt="error" />
          <h2>Try again</h2>
          <span>Something goes wrong</span>
          <Link to={PATH.CONFIRM_PASSWORD} onClick={onLinkClick}>
            Create new password again
          </Link>
        </div>
      </div>
    </div>
  );
};
