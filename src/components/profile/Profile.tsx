import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import style from '../../style/Common.module.css';
import { ReturnComponentType } from '../../types';

import { PATH } from 'enum/pathes';
import { logOutTC, RootStoreType } from 'store';

export const Profile: React.FC<ProfilePropsType> = (): ReturnComponentType => {
  // const userName = useSelector<RootStoreType, any>(state => state.login.name);
  const isAuthUser = useSelector<RootStoreType, boolean>(state => state.login.isAuth);
  const dispatch = useDispatch();
  const onClickLogOut = (): void => {
    dispatch(logOutTC());
  };
  if (!isAuthUser) {
    return <Navigate to={PATH.LOGIN} />;
  }
  return (
    <div className={style.mainContainer}>
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
    </div>
  );
};

export type ProfilePropsType = {};
