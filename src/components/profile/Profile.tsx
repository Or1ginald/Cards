import React from 'react';

import { NavLink } from 'react-router-dom';

import noneAvatarImage from '../../assets/103781_profile_edit_user_icon.png';

import { PATH } from 'enum/pathes';
import style from 'style/Common.module.css';
import { ReturnComponentType } from 'types';

type PropsType = {
  avatar: string;
  name: string;
  email: string | null;
  onClickLogOut: () => void;
  isAuthUser: boolean;
  activateEditMode: () => void;
  deactivateEditMode: () => void;
  editMode: boolean;
};

export const Profile = (props: PropsType): ReturnComponentType => {
  const {
    avatar,
    name,
    onClickLogOut,
    isAuthUser,
    activateEditMode,
    deactivateEditMode,
    editMode,
    email,
  } = props;
  // // const userName = useSelector<RootStoreType, any>(state => state.login.name);
  // // const name = useSelector<RootStoreType, InitialStateDataType>(
  // //   state => state.profilePage,
  // // );
  // // const avatar = useSelector<RootStoreType, InitialStateDataType>(
  // //   state => state.profilePage,
  // // );
  //
  // const isAuthUser = useAppSelector(getIsDataLoaded);
  // const isLoading = useAppSelector(getStatus);
  // const dispatch = useDispatch();
  //
  //
  // const { avatar } = props;
  //
  // const onClickLogOut = (): void => {
  //   dispatch(logOutTC());
  // };
  //
  // if (!isAuthUser) {
  //   return <Navigate to={PATH.LOGIN} />;
  // }
  return (
    /*    <div className={style.mainContainer}>
      {/!* {isLoading === 'loading' ? ( *!/}
      {/!*  <Preloader /> *!/}
      {/!* ) : ( *!/} */
    <div className={style.content}>
      <h2> Profile </h2>
      <img
        alt="avatar_image"
        className={style.avatar}
        src={avatar !== null ? avatar : noneAvatarImage}
      />
      {!editMode && (
        <div>
          <span>Nickname: {name}</span>
          <div onDoubleClick={activateEditMode} onBlur={deactivateEditMode}>
            {email}
          </div>
        </div>
      )}
      {isAuthUser ? (
        <div>
          {name}
          <button className={style.btn} onClick={onClickLogOut}>
            Log out
          </button>
        </div>
      ) : (
        <NavLink to={PATH.LOGIN}>Login</NavLink>
      )}
    </div>
    /*      {/!* )} *!/}
    </div> */
  );
};
