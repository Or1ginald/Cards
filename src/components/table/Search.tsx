import React, { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

import { ReturnComponentType } from '../../types';
import { CustomButton } from '../customButton';

import { addDeckTC } from './decksTC';
import style from './TableGrid.module.css';

export const Search = (): ReturnComponentType => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const onTitleEnterChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };
  const addButtonClick = (): void => {
    dispatch(addDeckTC({ name: title }));
    setTitle('');
  };

  return (
    <div className={style.rightBlock}>
      <div className={style.searchInputSection}>
        <input
          className={style.inputSearch}
          id="decks"
          placeholder="Search"
          type="search"
        />
        <input
          className={style.textArea}
          placeholder="name pack"
          value={title}
          onChange={onTitleEnterChange}
        />
        <CustomButton title=" Add new pack" onClick={addButtonClick} />
      </div>
    </div>
  );
};
