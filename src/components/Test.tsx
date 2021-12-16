import React from 'react';

import style from '../style/Common.module.css';

import { ReturnComponentType } from 'types';

export const Test = (): ReturnComponentType => (
  <div className={style.mainContainer}>
    <div className={style.container}>
      <p style={{ color: 'white' }}> Test page </p>
    </div>
  </div>
);
