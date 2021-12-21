import React from 'react';

import SuperRange from '../table/Range';

import s from './tableSidebar.module.css';

import { CustomButton } from 'components';

export const TableSidebar = React.memo(() => {
  const onFilterMyPacksClick = (): void => {}; // Напоминалка использовать useCallback
  const onAllButtonClick = (): void => {}; // Напоминалка использовать useCallback
  return (
    <div className={s.tableSidebar}>
      <div className={s.pickBlock}>
        <h3 className={s.header3}>Show cards packs</h3>
        <div className={s.buttonsContainer}>
          <CustomButton title="My" onClick={onFilterMyPacksClick} />
          <CustomButton title="All" onClick={onAllButtonClick} />
        </div>
      </div>
      <div className={s.pickBlock}>
        <div>Number of cards</div>
        <SuperRange />
      </div>
    </div>
  );
});
