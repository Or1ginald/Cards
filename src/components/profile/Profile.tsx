import React from 'react';

import { useDispatch } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import { getIsDataLoaded, getStatus } from '../../store/selectors';
import { Preloader } from '../preloader';

import { PATH } from 'enum/pathes';
import { logOutTC } from 'store';
import style from 'style/Common.module.css';
import { ReturnComponentType } from 'types';

export const Profile = (): ReturnComponentType => {
  // const userName = useSelector<RootStoreType, any>(state => state.login.name);
  const isAuthUser = useAppSelector(getIsDataLoaded);
  const isLoading = useAppSelector(getStatus);
  const dispatch = useDispatch();
  const onClickLogOut = (): void => {
    dispatch(logOutTC());
  };
  if (!isAuthUser) {
    return <Navigate to={PATH.LOGIN} />;
  }
  return (
    <div className={style.mainContainer}>
      {isLoading === 'loading' ? (
        <Preloader />
      ) : (
        <div className={style.content}>
          <h2> Profile </h2>
          {isAuthUser ? (
            <div>
              <button className={style.btn} onClick={onClickLogOut}>
                Log out
              </button>
            </div>
          ) : (
            <NavLink to={PATH.LOGIN}>Login</NavLink>
          )}
        </div>
      )}
    </div>
  );
};
