import React, { ChangeEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import noneAvatarImage from '../../assets/103781_profile_edit_user_icon.png';
import { RootStoreType } from '../../store';
import { InitialStateProfileType } from '../../store/reducers/profile';

import { Preloader } from 'components/preloader/Preloader';
import { PATH } from 'enum/pathes';
import { useAppSelector } from 'hooks/useAppSelector';
import { logOutTC } from 'store/reducers/login';
import { getStatus } from 'store/selectors/app/appSelectors';
import { getIsDataLoaded } from 'store/selectors/login/loginSelectors';
import style from 'style/Common.module.css';
import { ReturnComponentType } from 'types';

export const Profile = (): ReturnComponentType => {
  // const userName = useSelector<RootStoreType, any>(state => state.login.name);
  const userData = useSelector<RootStoreType, InitialStateProfileType>(
    state => state.profilePage,
  );
  const dispatch = useDispatch();
  const isAuth = useAppSelector(getIsDataLoaded);
  const isLoading = useAppSelector(getStatus);

  const { avatar } = userData.profile;

  const [name, setName] = useState(userData.profile.name);
  const [email, setEmail] = useState(userData.profile.email);

  const [editMode, setEditMode] = useState<boolean>(false);

  const onChangeHandlerName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };
  const onChangeHandlerEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };

  const activateEditForm = (): void => setEditMode(true);
  const hideEditForm = (): void => {
    setEditMode(false);
  };
  const onPhotoSelected = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      // updateProfileTC(event.target.files[0]);
    }
  };

  const onClickLogOut = (): void => {
    dispatch(logOutTC());
  };

  if (!isAuth) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <div className={style.mainContainer}>
      {isLoading === 'loading' ? (
        <Preloader />
      ) : (
        <div className={style.content}>
          <h2> Profile </h2>
          <img
            alt="avatar_image"
            className={style.avatar}
            src={avatar !== null ? avatar : noneAvatarImage}
          />
          <input type="file" className={style.avatar} onChange={onPhotoSelected} />
          {isAuth ? (
            <div>
              <button className={style.btn} onClick={onClickLogOut}>
                Log out
              </button>
            </div>
          ) : (
            <NavLink to={PATH.LOGIN}>Login</NavLink>
          )}
          {/* {!editMode && ( */}
          {/*  <div> */}
          {/*    <span>Name</span> */}
          {/*    <div onDoubleClick={activateEditMode}>{name}</div> */}
          {/*    <span>Email</span> */}
          {/*    <div onDoubleClick={activateEditMode}>{email}</div> */}
          {/*  </div> */}
          {/* )} */}
          <br />
          {editMode ? (
            <input
              name="name"
              value={name}
              onChange={onChangeHandlerName}
              onBlur={hideEditForm}
            />
          ) : (
            <span onDoubleClick={activateEditForm}>{name}</span>
          )}
          <br />
          {editMode ? (
            <input
              name="email"
              value={email}
              onChange={onChangeHandlerEmail}
              onBlur={hideEditForm}
            />
          ) : (
            <span onDoubleClick={activateEditForm}>{email}</span>
          )}
          <br />
        </div>
      )}
    </div>
  );
};
