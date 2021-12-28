import React from 'react';

import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../../hooks';
import { ReturnComponentType } from '../../../types';
import { setSortDecksTC } from '../decksTC';

const one = 1;
const zero = 0;

export const Sort = (): ReturnComponentType => {
  const currentPage = useAppSelector(state => state.decks.page);
  const perPage = useAppSelector(state => state.decks.pageCount);
  const dispatch = useDispatch();
  const sortUp = (): void => {
    dispatch(setSortDecksTC(one, perPage, currentPage));
  };
  const sortDown = (): void => {
    dispatch(setSortDecksTC(zero, perPage, currentPage));
  };

  return (
    <div>
      <button onClick={sortUp}>up</button>
      <button onClick={sortDown}>down</button>
    </div>
  );
};
