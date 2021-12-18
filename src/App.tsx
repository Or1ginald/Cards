import React from 'react';

import { Route, Routes } from 'react-router-dom';

import s from './App.module.css';
import { ReturnComponentType } from './types';

import {
  ConfirmPassword,
  Login,
  Navigation,
  Registrations,
  Profile,
  CreateNewPassword,
  Popup,
} from 'components';
import { Test } from 'components/Test';
import { PATH } from 'enum';

// testE
export const App = (): ReturnComponentType => (
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
