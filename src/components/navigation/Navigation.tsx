import React from 'react';

import { NavLink } from 'react-router-dom';

import { ReturnComponentType } from '../../types';

import style from './Navigation.module.css';

export const Navigation = (): ReturnComponentType => (
  <div className={style.nav}>
    <h3 className={style.menu}>Menu</h3>
    <ul>
      <li>
        <NavLink className={style.navElement} to="/login">
          login
        </NavLink>
      </li>

      <li>
        <NavLink className={style.navElement} to="/registration">
          registration
        </NavLink>
      </li>

      <li>
        <NavLink className={style.navElement} to="/profile">
          profile
        </NavLink>
      </li>

      <li>
        <NavLink className={style.navElement} to="/createNewPassword/*">
          create new password
        </NavLink>
      </li>

      <li>
        <NavLink className={style.navElement} to="/confirmPassword">
          confirm password
        </NavLink>
      </li>
    </ul>
  </div>
);
