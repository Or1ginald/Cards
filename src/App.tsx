import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Preloader } from './components';
import { Header } from './components/Header/Header';
import { RoutesPart } from './components/Routes/Routes';
import { requestStatus } from './enum';
import { useAppSelector } from './hooks';
import { ReturnComponentType } from './types';

import { getStatus, initializeAppTC } from 'store';

export const App = (): ReturnComponentType => {
  const isLoading = useAppSelector(getStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAppTC());
  }, [dispatch]);

  return (
    <div>
      {isLoading === requestStatus.loading ? (
        <Preloader />
      ) : (
        <div>
          <Header />
          <RoutesPart />
        </div>
      )}
    </div>
  );
};

/*
<div className={s.app}>
  <Header />
  <div className={s.layout}>
    <div className={s.main}>
      <RoutesPart />
    </div>
  </div>
</div>
*/
