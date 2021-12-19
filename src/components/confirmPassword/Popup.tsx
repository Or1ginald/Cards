import React from 'react';

import letter from '../../assets/letter.png';
import style from '../../style/Common.module.css';
import { ReturnComponentType } from '../../types';

import st from './ConfirmPassword.module.css';

export const Popup = (): ReturnComponentType => (
  <div>
    <div className={style.mainContainer}>
      <div className={style.content}>
        <img className={st.letterImg} src={letter} alt="letter" />
        <h2>Check Email</h2>
        <p>We have sent the Email with instructions to your email </p>
        <br />
        <br />
      </div>
    </div>
  </div>
);
