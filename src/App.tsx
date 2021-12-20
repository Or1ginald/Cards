import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import s from './App.module.css';
import { PageError404 } from './components/404/Page_error_404';
import style from './components/navigation/Navigation.module.css';
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
  SignUpContainer,
} from 'components';
import { Test } from 'components/Test';
import { PATH } from 'enum';
import st from 'style/Common.module.css';

export const App = (): ReturnComponentType => {
  const [showMenu, setShowMenu] = useState(false);
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

  // 1

  const showMenuHandler = (): void => {
    setShowMenu(!showMenu);
  };
  return (
    <div className={s.app}>
      <div className={s.layout}>
        <div>
          <button className={st.btn} onClick={showMenuHandler}>
            Show menu
          </button>
        </div>
        {showMenu === true ? <Navigation /> : <div className={style.nav} />}

        <div className={s.main}>
          <Routes>
            <Route path={PATH.LOGIN} element={<Login />} />
            <Route path={PATH.REGISTRATION} element={<SignUpContainer />} />
            <Route path={PATH.PROFILE} element={<Profile />} />
            <Route path={PATH.PAGE_404} element={<PageError404 />} />
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
