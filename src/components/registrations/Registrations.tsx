import React from 'react';

import style from '../../style/Common.module.css';
import { ReturnComponentType } from '../../types';

import st from './Registrations.module.css';

const Registrations = (): ReturnComponentType => (
  <div className={style.mainContainer}>
    <div className={style.content}>
      <h2>Registration</h2>
      <input
        className={style.inputPassword}
        type="Email"
        placeholder="Email"
        /* value={email}
              onChange={onEmailInputEnter} */
        required
      />
      <input
        className={style.inputPassword}
        type="Password"
        placeholder="Password"
        /* value={password}
             onChange={onPasswordInputEnter} */
        required
      />
      <input
        className={style.inputPassword}
        type="Password"
        placeholder="Confirm Password"
        /*  value={passwordAgain}
             onChange={onPasswordAgainInputEnter} */
        required
      />

      <p> Have fun! </p>
      <div className={st.btns}>
        <button className={style.btn}>cancel</button>
        <button className={style.btn}>send</button>
      </div>
    </div>
  </div>
);

export default Registrations;
