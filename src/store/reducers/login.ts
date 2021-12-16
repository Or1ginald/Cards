import { ThunkDispatch } from 'redux-thunk';

import { authAPI, LoginParamsType } from '../../api/loginApi';
import { Nullable } from '../../types';
import { RootStoreType } from '../store';

export type InitialStateDataType = {
  _id: Nullable<string>;
  avatar?: Nullable<string>;
  name: Nullable<string>;
  email: Nullable<string>;
  password: Nullable<string>;
  rememberMe: boolean;
  isAuth: boolean;
  verified: boolean;
  error?: Nullable<string>;
};

const initialState: InitialStateDataType = {
  _id: null,
  avatar: null,
  name: null,
  email: null,
  password: null,
  rememberMe: false,
  isAuth: false,
  verified: false,
  error: null,
};

export const loginReducer = (
  state: InitialStateDataType = initialState,
  action: ActionTypes,
): InitialStateDataType => {
  switch (action.type) {
    case 'SET_LOGIN_DATA':
      return {
        ...state,
        ...action.payload,
      };
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.payload,
      };
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export const setLoginData = (
  email: Nullable<string>,
  password: Nullable<string>,
  rememberMe: boolean,
) =>
  ({
    type: 'SET_LOGIN_DATA',
    payload: { email, password, rememberMe },
  } as const);

export const setUserData = (
  _id: Nullable<string>,
  name: Nullable<string>,
  verified: boolean,
) =>
  ({
    type: 'SET_USER_DATA',
    payload: { _id, name, verified },
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

export const logIn =
  (data: LoginParamsType) =>
  (dispatch: ThunkDispatch<RootStoreType, undefined, ActionTypes>) => {
    authAPI
      .login(data)
      .then(response => {
        const { _id, name, verified } = response.data;
        dispatch(setUserData(_id, name, verified));
      })
      .catch(e => {
        const error = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(setErrorMessage(error));
      });
  };

export const logOut =
  () => (dispatch: ThunkDispatch<RootStoreType, undefined, ActionTypes>) => {
    authAPI.logOut().then(() => {
      dispatch(setLoginData(null, null, false));
    });
  };

// type;
type setAuthLoginData = ReturnType<typeof setLoginData>;
type setAuthUserData = ReturnType<typeof setUserData>;
type setErrorMessageLogin = ReturnType<typeof setErrorMessage>;
type ActionTypes = setAuthLoginData | setAuthUserData | setErrorMessageLogin;
