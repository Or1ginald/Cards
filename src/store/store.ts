import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { errorForgotPasswordReducer } from './reducers/errorReducer';
import { signUpReducer } from './reducers/signUp';

import { appReducer, cardReducer, loginReducer, profileReducer } from 'store';

export const rootReducer = combineReducers({
  cards: cardReducer,
  signUp: signUpReducer,
  login: loginReducer,
  profilePage: profileReducer,
  errorMessage: errorForgotPasswordReducer,
  app: appReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootStoreType = ReturnType<typeof rootReducer>;

// @ts-ignore

window.store = store;
