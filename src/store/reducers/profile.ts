import { Nullable } from '../../types';

export type ProfileResponseDataType = {
  _id: Nullable<string>;
  email: string;
  name: string;
  avatar?: Nullable<string>;
  publicCardPacksCount: Nullable<number>;
  created: Date | null;
  updated: Date | null;
  isAdmin: Nullable<boolean>;
  verified: Nullable<boolean>;
  rememberMe: Nullable<boolean>;
  error?: Nullable<string>;
};

const initialState = {
  profile: {
    _id: null as string | null,
    avatar: null as string | null,
    name: 'FAKE_NAME',
    email: 'FAKE_EMAIL',
    publicCardPacksCount: null as number | null,
    created: null as Date | null,
    updated: null as Date | null,
    isAdmin: null as boolean | null,
    verified: null as boolean | null,
    rememberMe: null as boolean | null,
    error: null as string | null,
  },
};

export type InitialStateProfileType = typeof initialState;

export const profileReducer = (
  state: InitialStateProfileType = initialState,
  action: ActionTypes,
): InitialStateProfileType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.payload,
      };
    case 'SET_USER_PROFILE':
      return {
        ...state,
        profile: { ...state.profile, ...action.profile },
      };
    // case 'SET_ERROR_MESSAGE':
    //   return {
    //     ...state,
    //     error: action.error,
    //   };
    default:
      return state;
  }
};

export const setUserData = (_id: Nullable<string>, name: Nullable<string>) =>
  ({
    type: 'SET_USER_DATA',
    payload: { _id, name },
  } as const);
export const setUserProfile = (profile: ProfileResponseDataType) =>
  ({
    type: 'SET_USER_PROFILE',
    profile,
  } as const);
export const setErrorMessage = (error: Nullable<string>) =>
  ({ type: 'SET_ERROR_MESSAGE', error } as const);

// export const getAuthLoginData = () => (dispatch: ThunkDispatch<AppStateType, undefined, ActionTypes>) => {
//   return authAPI.me()
//     .then(response => {
//       if (response.data.resultCode === 0) {                     //проверка залогинен пользователь или нет
//         let {id, login, email} = response.data.data
//         dispatch(setAuthUserData(id, login, email, true));
//
//       }
//     });
// }

// export const logIn =
//   (data: LoginParamsType) =>
//     (dispatch: ThunkDispatch<RootStoreType, undefined, ActionTypes>) => {
//       authAPI
//         .login(data)
//         .then(response => {
//           const { email, rememberMe } = response.data;
//           dispatch(setAuthLoginData(email, rememberMe, true));
//         })
//         .catch(e => {
//           const error = e.response
//             ? e.response.data.error
//             : `${e.message}, more details in the console`;
//           dispatch(setErrorMessage(error));
//         });
//     };
//
// export const getUserData = () => (dispatch: ThunkDispatch<RootStoreType, undefined, ActionTypes>) => {
//   (dispatch: ThunkDispatch<RootStoreType, undefined, ActionTypes>) => {
//     authAPI.logOut().then(() => {
//       const { _id, name, verified } = response.data;
//       dispatch(setUserData(_id, name, verified));
//     }
//     });
// }

// export const uploadUserPhotoThunk = (image: File) => async (dispatch: Dispatch) => {
//   const response = await ProfileAPI.uploadUserPhoto(image)
//   if (response.data.resultCode === 0) {
//     dispatch(UploadUserPhoto(response.data.data.photos))
//   }
// }

// type;
type setUserProfileType = ReturnType<typeof setUserProfile>;
type setAuthUserDataType = ReturnType<typeof setUserData>;
type setErrorMessageLoginType = ReturnType<typeof setErrorMessage>;
type ActionTypes = setAuthUserDataType | setErrorMessageLoginType | setUserProfileType;
