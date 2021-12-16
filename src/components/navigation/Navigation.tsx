import React from 'react';

import { NavLink } from 'react-router-dom';

import { ReturnComponentType } from '../../types';

import style from './Navigation.module.css';

export const Navigation = (): ReturnComponentType => (
  <div className={style.nav}>
    <NavLink className={style.navElement} to="/login">
      {' '}
      login{' '}
    </NavLink>

    <NavLink className={style.navElement} to="/registration">
      {' '}
      registration{' '}
    </NavLink>

    <NavLink className={style.navElement} to="/profile">
      {' '}
      profile{' '}
    </NavLink>

    <NavLink className={style.navElement} to="/createNewPassword/*">
      {' '}
      create new password
    </NavLink>

    <NavLink className={style.navElement} to="/confirmPassword">
      {' '}
      confirm password
    </NavLink>
  </div>
);
