import React, { useEffect } from 'react';

import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';

import { authAPI } from './api/api';
import { ConfirmPassword } from './components/ConfirmPassword/ConfirmPassword';
import { CreateNewPassword } from './components/ConfirmPassword/CreateNewPassword';
import Test from './components/Test';
import { ReturnComponentType } from './types';

import { Popup } from 'components/ConfirmPassword/Popup';

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
    <div>
      <NavLink to="/createNewPassword/*"> create new password</NavLink>---
      <NavLink to="/confirmPassword"> confirm password</NavLink>---
      <Routes>
        <Route
          path="/login"
          element={
            <div>
              <h1>login</h1>
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
        <Route
          path="/confirmPassword"
          element={
            <div>
              <ConfirmPassword />
            </div>
          }
        />
        <Route
          path="/popup"
          element={
            <div>
              <Popup />
            </div>
          }
        />
        <Route
          path="/createNewPassword/*"
          element={
            <div>
              <CreateNewPassword />
            </div>
          }
        />
        <Route path="/" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
