import { ThunkDispatch } from 'redux-thunk';

import { setAppStatusAC } from './appInitialized';
import { setErrorMessageNetworkAC } from './errorReducer';

import { authAPI, LoginParamsType } from 'api/loginApi';
import { requestStatus } from 'enum';
import { RootStoreType } from 'store';

export type InitialStateDataType = {
  isAuth: boolean;
};

export const initialState: InitialStateDataType = {
  isAuth: false,
};

export const loginReducer = (
  state: InitialStateDataType = initialState,
  action: ActionTypesLogin,
): InitialStateDataType => {
  switch (action.type) {
    case 'LOGIN/SET_AUTH_LOGIN_TOGGLE':
      return {
        ...state,
        isAuth: action.isAuth,
      };

    default:
      return state;
  }
};

export const toggleAuthAC = (isAuth: boolean) =>
  ({ type: 'LOGIN/SET_AUTH_LOGIN_TOGGLE', isAuth } as const);

export const logInTC =
  (data: LoginParamsType) =>
  (
    dispatch: ThunkDispatch<
      RootStoreType,
      undefined,
      ActionTypesLogin | ReturnType<typeof setErrorMessageNetworkAC>
    >,
  ) => {
    dispatch(setAppStatusAC(requestStatus.loading));
    authAPI
      .login(data)
      .then(() => {
        dispatch(toggleAuthAC(true));
        dispatch(setAppStatusAC(requestStatus.succeeded));
      })
      .catch(e => {
        const errorNetwork = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(setErrorMessageNetworkAC(errorNetwork));
        const timeOut = 3000;
        setTimeout(() => {
          dispatch(setErrorMessageNetworkAC(''));
        }, timeOut);
      })
      .finally(() => {
        dispatch(setAppStatusAC(requestStatus.succeeded));
      });
  };

export const logOutTC =
  () => (dispatch: ThunkDispatch<RootStoreType, undefined, ActionTypesLogin>) => {
    dispatch(setAppStatusAC(requestStatus.loading));
    authAPI.logOut().then(() => {
      dispatch(toggleAuthAC(false));
      dispatch(setAppStatusAC(requestStatus.idle));
    });
  };

// type;

export type ActionTypesLogin =
  | ReturnType<typeof toggleAuthAC>
  | ReturnType<typeof setAppStatusAC>;
