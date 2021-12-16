import { Nullable } from '../../types';

export type InitialStateDataType = {
  _id: Nullable<string>;
  avatar?: Nullable<string>;
  name: Nullable<string>;
  email: Nullable<string>;
  rememberMe: boolean;
};

const initialState: InitialStateDataType = {
  _id: null,
  avatar: null,
  name: null,
  email: null,
  rememberMe: false,
};

export const profileReducer = (
  state: InitialStateDataType = initialState,
  action: ActionTypes,
): InitialStateDataType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.payload,
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

// type;
type setAuthUserData = ReturnType<typeof setUserData>;
type setErrorMessageLogin = ReturnType<typeof setErrorMessage>;
type ActionTypes = setAuthUserData | setErrorMessageLogin;
