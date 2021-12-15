import React, { useEffect } from 'react';

import { NavLink, Route, Routes } from 'react-router-dom';

import { authAPI } from './api/loginApi';
import './App.css';
import { ConfirmPassword, Login } from './components';
import { CreateNewPassword } from './components/confirmPassword/CreateNewPassword';
import { Popup } from './components/confirmPassword/Popup';
import Test from './components/Test';
import { ReturnComponentType } from './types';

export const App = (): ReturnComponentType => {
  useEffect(() => {
    authAPI
      .register({ email: 'samutic40@gmail.com', password: '123456789' })
      .then(res => {
        console.log(res.data);
      });

    authAPI.me().then(res => {
      console.log(res.data);
    });
  }, []);
  return (
    <div className="app">
      <NavLink to="/createNewPassword/*"> create new password</NavLink>---
      <NavLink to="/confirmPassword"> confirm password</NavLink>---
      <NavLink to="/login"> login </NavLink>---
      <NavLink to="/registration"> registration </NavLink>---
      <NavLink to="/profile"> profile </NavLink>---
      <Routes>
        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        />
        <Route
          path="/registration"
          element={
            <div>
              <h1>registration</h1>
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div>
              <h1>profile</h1>
            </div>
          }
        />
        <Route
          path={'/*'}
          element={
            <div style={{ textAlign: 'center' }}>
              <h1>404:page NOT found</h1>
            </div>
          }
        />
        <Route path="/confirmPassword" element={<ConfirmPassword />} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/createNewPassword/*" element={<CreateNewPassword />} />
        <Route path="/" element={<Test />} />
      </Routes>
    </div>
  );
};
