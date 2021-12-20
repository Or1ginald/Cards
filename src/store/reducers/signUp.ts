import { Dispatch } from 'redux';

import { authAPI, RegisterParamsType } from '../../api';

const initialState = {
  isFetching: false,
  error: null as null | string,
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
    case 'RECOVERY/ERROR':
      return { ...state, error: action.payload.error };
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
  (params: RegisterParamsType) => (dispatch: Dispatch<SignUpActionTypes>) => {
    dispatch(toggleIsFetchingAC(true));
    authAPI
      .register(params)
      .then(() => {
        dispatch(toggleIsSignUpAC(true));
      })
      .catch(error => {
        dispatch(setErrorAC(error.response.data.error));
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
