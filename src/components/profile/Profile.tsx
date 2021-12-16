import React from 'react';

import { useSelector } from 'react-redux';

import { RootStoreType } from '../../store';
import { ReturnComponentType } from '../../types';

export const Profile: React.FC<ProfilePropsType> = (): ReturnComponentType => {
  const userName = useSelector<RootStoreType, any>(state => state.login.name);
  // const isAuthUser = useSelector<RootStoreType, boolean>(state => state.login.isAuth);
  // const dispatch = useDispatch();
  // const onClickLogOut = (): void => {
  //   dispatch(logOut());
  // };
  return (
    <div>
      <h1> Profile </h1>
      <span>{userName}</span>
      {/* {isAuthUser ? ( */}
      {/*  <div> */}
      {/*    <button onClick={onClickLogOut}>LOG OUT</button> */}
      {/*  </div> */}
      {/* ) : ( */}
      {/*  <NavLink to={PATH.LOGIN}>Login</NavLink> */}
      {/* )} */}
    </div>
  );
};

export type ProfilePropsType = {};
