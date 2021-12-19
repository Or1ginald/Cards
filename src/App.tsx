import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import s from './App.module.css';
import { useAppSelector } from './hooks';
import { initializeAppTC } from './store';
import { getIsInitialized } from './store/selectors';
import { ReturnComponentType } from './types';

import {
  ConfirmPassword,
  CreateNewPassword,
  Login,
  Navigation,
  Popup,
  Preloader,
  Profile,
  Registrations,
} from 'components';
import { Test } from 'components/Test';
import { PATH } from 'enum';

export const App = (): ReturnComponentType => {
  const isInitialized = useAppSelector(getIsInitialized);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAppTC());
  }, []);
  if (!isInitialized) {
    return (
      <div style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
        <Preloader />
      </div>
    );
  }
  return (
    <div className={s.app}>
      <div className={s.layout}>
        <Navigation />
        {/*  <div className={s.wrap}> */}
        <div className={s.main}>
          <Routes>
            <Route path={PATH.LOGIN} element={<Login />} />
            <Route path={PATH.REGISTRATION} element={<Registrations />} />
            <Route path={PATH.PROFILE} element={<Profile />} />
            <Route path="/*" element={<h1>404:page NOT found</h1>} />
            <Route path={PATH.CONFIRM_PASSWORD} element={<ConfirmPassword />} />
            <Route path={PATH.POPUP} element={<Popup />} />
            <Route path={PATH.CREATE_NEW_PASSWORD} element={<CreateNewPassword />} />
            <Route path="/" element={<Test />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
