import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { PATH } from '../../enum';
import { useAppSelector } from '../../hooks';
import { logOutTC, RootStoreType } from '../../store';
import { getIsDataLoaded, getStatus } from '../../store/selectors';
import { Preloader } from '../preloader';

import { Profile } from './Profile';

import style from 'style/Common.module.css';
import { ReturnComponentType } from 'types';

export const ProfileContainer = (): ReturnComponentType => {
  // const userName = useSelector<RootStoreType, any>(state => state.login.name);

  const profileData = useSelector<RootStoreType, any>(state => state.profilePage.profile);
  const [editMode, setEditMode] = useState<boolean>(false);
  const activateEditMode = (): void => setEditMode(true);
  const deactivateEditMode = (): void => {
    setEditMode(false);
  };
  const dispatch = useDispatch();
  const isAuthUser = useAppSelector(getIsDataLoaded);
  const isLoading = useAppSelector(getStatus);

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
        <Profile
          email={profileData.email}
          editMode={editMode}
          activateEditMode={activateEditMode}
          deactivateEditMode={deactivateEditMode}
          name={profileData.name}
          avatar={profileData.avatar}
          isAuthUser={isAuthUser}
          onClickLogOut={onClickLogOut}
        />
      )}
    </div>
  );
};
