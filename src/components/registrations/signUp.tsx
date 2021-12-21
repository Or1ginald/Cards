import React from 'react';

import st from './Registrations.module.css';

import { CustomButton, CustomInput } from 'components';
import style from 'style/Common.module.css';
import { ReturnComponentType } from 'types/ReturnComponentType';

type PropsType = {
  email: string;
  handleEmail: () => void;
  // onChangeEmail: (value: string) => void;
  // emailError: null | string
  password: string;
  handlePassword: () => void;
  handleConfirmPassword: () => void;
  // onChangePassword: (value: string) => void;
  // isLoadedData: boolean;
  // passwordError: null | string
  isFetching: boolean;
  onSendButtonClick: () => void;
  error: null | string;
};

export const SignUp = (props: PropsType): ReturnComponentType => {
  const {
    email,
    handleEmail,
    error,
    password,
    handlePassword,
    handleConfirmPassword,
    onSendButtonClick,
    // isLoadedData,
    isFetching,
  } = props;
  return (
    <div className={style.mainContainer}>
      <div className={style.content}>
        <div className={style.contentWrap}>
          <h2>Registration</h2>
          <span>{error}</span>
          <CustomInput
            placeholder="Email"
            typeInput="email"
            // className={style.inputEmail}
            onChange={handleEmail}
            value={email}
            name="user[email]"
          />
          <CustomInput
            placeholder="Password"
            typeInput="password"
            // className={style.inputPassword}
            onChange={handlePassword}
            value={password}
            name="user[password]"
          />
          <CustomInput
            placeholder="Confirm Password"
            typeInput="password"
            // className={style.inputPassword}
            onChange={handleConfirmPassword}
            value={password}
            name="user[password]"
          />
          <p> Have fun! </p>
          <div className={st.btns}>
            <button className={style.btn}>Cancel</button> {/* И шо, и где онклик???? */}
            <CustomButton
              title="Create"
              onClick={onSendButtonClick}
              disabled={isFetching}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
