import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import s from './App.module.css';
import style from './components/navigation/Navigation.module.css';
import { ReturnComponentType } from './types';

import {
  Popup,
  ConfirmPassword,
  CreateNewPassword,
  Login,
  Navigation,
  Preloader,
  SignUpContainer,
  PageError404,
  Cards,
} from 'components';
import { ProfileContainer } from 'components/profile/ProfileContainer';
import { Test } from 'components/Test';
import { PATH } from 'enum';
import { useAppSelector } from 'hooks';
import { initializeAppTC } from 'store';
import { getIsInitialized } from 'store/selectors';
import st from 'style/Common.module.css';

export const App = (): ReturnComponentType => {
  const [showMenu, setShowMenu] = useState(false);
  const isInitialized = useAppSelector(getIsInitialized);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAppTC());
  }, [dispatch]);
  if (!isInitialized) {
    return (
      <div className={s.preloaderWrap}>
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
        {showMenu ? <Navigation /> : <div className={style.nav} />}

        <div className={s.main}>
          <Routes>
            <Route path={PATH.LOGIN} element={<Login />} />
            <Route path={PATH.REGISTRATION} element={<SignUpContainer />} />
            <Route path={PATH.PROFILE} element={<ProfileContainer />} />
            <Route path={PATH.PAGE_404} element={<PageError404 />} />
            <Route path={PATH.CONFIRM_PASSWORD} element={<ConfirmPassword />} />
            <Route path={PATH.POPUP} element={<Popup />} />
            <Route path={PATH.CREATE_NEW_PASSWORD} element={<CreateNewPassword />} />
            <Route path={PATH.CARDS} element={<Cards />}>
              <Route path=":cardsPack_id" element={<Cards />} />
            </Route>
            <Route path="/" element={<Test />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
