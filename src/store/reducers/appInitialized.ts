import { ThunkDispatch } from 'redux-thunk';

import { authAPI } from 'api/loginApi';
import { requestStatus } from 'enum';
import { RootStoreType, setErrorMessageNetworkAC } from 'store';
import { RequestStatusType } from 'types';

export const initialState: InitialStateType = {
  status: requestStatus.idle,
  isInitialized: false,
};

export const appReducer = (
  state: InitialStateType = initialState,
  action: ActionTypes,
): InitialStateType => {
  switch (action.type) {
    case 'APP/SET_STATUS':
      return { ...state, status: action.status };
    case 'APP/SET_IS_INITIALIZED':
      return { ...state, isInitialized: action.isInitialized };
    default:
      return { ...state };
  }
};
export const setAppStatusAC = (status: RequestStatusType) =>
  ({ type: 'APP/SET_STATUS', status } as const);

export const setIsInitializedAC = (isInitialized: boolean) =>
  ({ type: 'APP/SET_IS_INITIALIZED', isInitialized } as const);

export const initializeAppTC =
  () => (dispatch: ThunkDispatch<RootStoreType, undefined, ActionTypes>) => {
    dispatch(setAppStatusAC(requestStatus.loading));
    authAPI
      .me()
      .then(() => {
        dispatch(setIsInitializedAC(true));
        dispatch(setAppStatusAC(requestStatus.succeeded));
      })
      .catch(e => {
        dispatch(setAppStatusAC(requestStatus.succeeded));
        const errorNetwork = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;

        dispatch(setErrorMessageNetworkAC(errorNetwork));
        const timeOut = 2000;
        setTimeout(() => {
          dispatch(setErrorMessageNetworkAC(''));
        }, timeOut);
      });
  };

// types

export type InitialStateType = {
  status: RequestStatusType;
  isInitialized: boolean;
};

type ActionTypes =
  | ReturnType<typeof setAppStatusAC>
  | ReturnType<typeof setIsInitializedAC>
  | ReturnType<typeof setErrorMessageNetworkAC>;
