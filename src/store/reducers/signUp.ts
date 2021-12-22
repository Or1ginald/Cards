import { Dispatch } from 'redux';

import { authAPI, RegisterParamsType } from '../../api';

import { setAppStatusAC } from './appInitialized';
import { setErrorMessageNetworkAC } from './errorReducer';

const initialState = {
  isFetching: false,
  isSignUp: false,
};
type InitialStateType = typeof initialState;

export const signUpReducer = (
  state = initialState,
  action: SignUpActionTypes,
): InitialStateType => {
  switch (action.type) {
    case 'REGISTRATION/IS_FETCHING':
      return { ...state, isFetching: action.isFetching };
    case 'REGISTRATION/IS_SIGNUP_SUCCESSFUL': {
      return {
        ...state,
        isSignUp: action.isSignUpSuccessful,
      };
    }
    default:
      return state;
  }
};

export const toggleIsFetchingAC = (isFetching: boolean) =>
  ({
    type: 'REGISTRATION/IS_FETCHING',
    isFetching,
  } as const);
export const toggleIsSignUpAC = (isSignUpSuccessful: boolean) =>
  ({
    type: 'REGISTRATION/IS_SIGNUP_SUCCESSFUL',
    isSignUpSuccessful,
  } as const);
export const setErrorAC = (error: null | string) =>
  ({ type: 'RECOVERY/ERROR', payload: { error } } as const);

export const signUpTC =
  (params: RegisterParamsType) =>
  (
    dispatch: Dispatch<
      | SignUpActionTypes
      | ReturnType<typeof setErrorMessageNetworkAC>
      | ReturnType<typeof setAppStatusAC>
    >,
  ) => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(setAppStatusAC('loading'));
    authAPI
      .register(params)
      .then(() => {
        dispatch(toggleIsSignUpAC(true));
        dispatch(setAppStatusAC('succeeded'));
      })
      .catch(e => {
        dispatch(setAppStatusAC('succeeded'));
        const errorNetwork = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(setErrorMessageNetworkAC(errorNetwork));
        const timeOut = 2000;
        setTimeout(() => {
          dispatch(setErrorMessageNetworkAC(''));
        }, timeOut);
      })
      .finally(() => {
        dispatch(toggleIsFetchingAC(false));
      });
  };
export type SetErrorType = ReturnType<typeof setErrorAC>;

type SignUpActionTypes =
  | ReturnType<typeof toggleIsFetchingAC>
  | ReturnType<typeof toggleIsSignUpAC>
  | SetErrorType;
