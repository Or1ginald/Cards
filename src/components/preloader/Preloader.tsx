import React from 'react';

import { ReturnComponentType } from '../../types';

import style from './Preloader.module.css';

import loader from 'assets/loader.gif';

export const Preloader = (): ReturnComponentType => (
  <div>
    <img className={style.loader} src={loader} alt="preloader" />
  </div>
);
