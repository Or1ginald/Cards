import React from 'react';

import { NavLink } from 'react-router-dom';

import { appNavigationShort } from '../../constants/Navigation/appNavigation';
import { ReturnComponentType } from '../../types';
import style from '../navigation/Navigation.module.css';

export const Header = (): ReturnComponentType => (
  <div className={style.nav}>
    <div className={style.wrap}>
      <div className={style.navList}>
        {appNavigationShort.map(({ id, title, link }) => (
          <NavLink className={style.listItem} to={link} key={id}>
            <div className={style.navElement}>{title}</div>
          </NavLink>
        ))}
      </div>
    </div>
  </div>
);
