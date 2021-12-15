import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { authAPI } from './api/api';
import s from './App.module.css';
import { Login } from './components';
import { ConfirmPassword } from './components/confirmPassword/ConfirmPassword';
import { CreateNewPassword } from './components/confirmPassword/CreateNewPassword';
import Test from './components/Test';
import { ReturnComponentType } from './types';

import { Popup } from 'components/confirmPassword/Popup';

const App = (): ReturnComponentType => {
  useEffect(() => {
    authAPI
      .login({ email: 'samutic40@gmail.com', password: '123456789', rememberMe: false })
      .then(res => {
        console.log(res.data);
      });

    authAPI.me().then(res => {
      console.log(res.data);
    });
  }, []);
  return (
    <div className={s.app}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<h1>registration</h1>} />
        <Route path="/profile" element={<h1>profile</h1>} />
        <Route path={'/*'} element={<h1>404:page NOT found</h1>} />
        <Route path="/confirmPassword" element={<ConfirmPassword />} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/createNewPassword/*" element={<CreateNewPassword />} />
        <Route path="/" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
