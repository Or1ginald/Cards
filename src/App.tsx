import React from 'react';

import { Route, Routes } from 'react-router-dom';

import s from './App.module.css';
import { ConfirmPassword, Login } from './components';
import { Navigation } from './components/navigation/Navigation';
import { Profile } from './components/profile/Profile';
import { ReturnComponentType } from './types';

import { CreateNewPassword, Popup } from 'components';
import { Test } from 'components/Test';

export const App = (): ReturnComponentType => (
  <div className={s.app}>
    <Navigation />
    <div className={s.wrap}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<h1>registration</h1>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<h1>404:page NOT found</h1>} />
        <Route path="/confirmPassword" element={<ConfirmPassword />} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/createNewPassword/*" element={<CreateNewPassword />} />
        <Route path="/" element={<Test />} />
      </Routes>
    </div>
  </div>
);
