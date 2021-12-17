import React from 'react';

import { NavLink } from 'react-router-dom';

import { PATH } from '../../enum/pathes';
import { ReturnComponentType } from '../../types';

import style from './Navigation.module.css';

export const Navigation = (): ReturnComponentType => (
  <div className={style.nav}>
    <h3 className={style.menu}>Menu</h3>
    <ul>
      <li>
        <NavLink className={style.navElement} to={PATH.LOGIN}>
          login
        </NavLink>
      </li>

      <li>
        <NavLink className={style.navElement} to={PATH.REGISTRATION}>
          registration
        </NavLink>
      </li>

      <li>
        <NavLink className={style.navElement} to={PATH.PROFILE}>
          profile
        </NavLink>
      </li>

      <li>
        <NavLink className={style.navElement} to={PATH.CREATE_NEW_PASSWORD}>
          create new password
        </NavLink>
      </li>

      <li>
        <NavLink className={style.navElement} to={PATH.CONFIRM_PASSWORD}>
          confirm password
        </NavLink>
      </li>
    </ul>
  </div>
);
