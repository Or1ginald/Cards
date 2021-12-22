import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setDecksTC } from './table/decksTC';
import { Screen } from './table/Screen';

import { ReturnComponentType } from 'types';

export const Test = (): ReturnComponentType => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDecksTC());
  }, []);
  /* const isLoading = useAppSelector(getStatus); */
  return (
    <div>
      {/*  <Table /> */}
      <Screen />
    </div>
  );
};
