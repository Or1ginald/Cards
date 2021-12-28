import React, { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

import { ReturnComponentType } from '../../types';
import { CustomButton } from '../customButton';

import { addDeckTC, setSearchDecksTC } from './decksTC';
import styleSearch from './Search.module.css';

export const Search = (): ReturnComponentType => {
  const enter = 13;

  const [title, setTitle] = useState('');
  const [searchWord, setSearchName] = useState('');
  /* const currentPage = useAppSelector(state => state.decks.page); */

  const dispatch = useDispatch();

  /*  useEffect(() => {
    dispatch(setSearchDecksTC(searchWord));
  }, [currentPage, dispatch]); */

  const onTitleEnterChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };
  const addButtonClick = (): void => {
    dispatch(addDeckTC({ name: title }));
    setTitle('');
  };
  const onKeyPressAddHandler = (e: any): void => {
    if (e.charCode === enter) {
      dispatch(addDeckTC({ name: title }));
      setTitle('');
    }
  };
  const onSearchNameHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchName(e.currentTarget.value);
  };

  const onKeyPressSearch = (e: any): void => {
    if (e.charCode === enter) {
      dispatch(setSearchDecksTC(searchWord));
      setSearchName('');
    }
  };

  return (
    <div className={styleSearch.wrapper}>
      <h3 className={styleSearch.header3}> Packs list </h3>

      <input
        className={styleSearch.inputSearch}
        size={40}
        placeholder="Search"
        type="search"
        value={searchWord}
        onChange={onSearchNameHandler}
        onKeyPress={onKeyPressSearch}
      />

      <input
        size={30}
        className={styleSearch.add}
        placeholder="add new pack"
        type="text"
        value={title}
        onChange={onTitleEnterChange}
        onKeyPress={onKeyPressAddHandler}
      />

      <CustomButton title=" Add new pack" onClick={addButtonClick} />
    </div>
  );
};
