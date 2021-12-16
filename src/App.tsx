import React from 'react';

import { NavLink, Route, Routes } from 'react-router-dom';

import s from './App.module.css';
import { ConfirmPassword, Login } from './components';
import { Profile } from './components/profile/Profile';
import Test from './components/Test';
import { ReturnComponentType } from './types';

import { Popup, CreateNewPassword } from 'components';

// const PATH = {
//   LOGIN: '/login',
//   PROFILE: '/profile',
// };
export const App = (): ReturnComponentType => (
  // useEffect(() => {
  //   authAPI
  //     .register({ email: 'samutic40@gmail.com', password: '123456789' })
  //     .then(res => {
  //       console.log(res.data);
  //     });
  //
  //   authAPI.me().then(res => {
  //     console.log(res.data);
  //   });
  // }, []);
  <div className={s.app}>
    <NavLink to="/createNewPassword/*"> create new password</NavLink>---
    <NavLink to="/confirmPassword"> confirm password</NavLink>---
    <NavLink to="/login"> login </NavLink>---
    <NavLink to="/registration"> registration </NavLink>---
    <NavLink to="/profile"> profile </NavLink>---
    <div className={s.wrap}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<h1>registration</h1>} />
        <Route path="/profile" element={<Profile />} />
        <Route path={'/*'} element={<h1>404:page NOT found</h1>} />
        <Route path="/confirmPassword" element={<ConfirmPassword />} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/createNewPassword/*" element={<CreateNewPassword />} />
        <Route path="/" element={<Test />} />
      </Routes>
    </div>
  </div>
);
