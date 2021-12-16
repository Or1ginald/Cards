import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { RootStoreType } from '../../store';
import { logOutTC } from '../../store/reducers/login';
import { ReturnComponentType } from '../../types';

export const Profile: React.FC<ProfilePropsType> = (): ReturnComponentType => {
  const userName = useSelector<RootStoreType, any>(state => state.login.name);
  const isAuthUser = useSelector<RootStoreType, boolean>(state => state.login.verified);
  const dispatch = useDispatch();
  const onClickLogOut = (): void => {
    dispatch(logOutTC());
  };
  return (
    <div>
      <h2> Profile </h2>
      <span>{userName}</span>
      {isAuthUser ? (
        <div>
          <button onClick={onClickLogOut}>LOG OUT</button>
        </div>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </div>
  );
};

export type ProfilePropsType = {};
