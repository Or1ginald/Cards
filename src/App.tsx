import React from 'react';

import { Route, Routes } from 'react-router-dom';

import s from './App.module.css';
import { ConfirmPassword, Login } from './components';
import { Navigation } from './components/navigation/Navigation';
import { Profile } from './components/profile/Profile';
import { Registrations } from './components/registrations/Registrations';
import { PATH } from './enum/pathes';
import { ReturnComponentType } from './types';

import { CreateNewPassword, Popup } from 'components';
import { Test } from 'components/Test';

export const App = (): ReturnComponentType => (
  <div className={s.app}>
    <Navigation />
    {/*  <div className={s.wrap}> */}
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
  /*  </div> */
);
