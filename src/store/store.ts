import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { errorForgotPasswordReducer } from '../components/confirmPassword/errorReducer';

import { cardReducer, loginReducer, profileReducer } from 'store';

export const rootReducer = combineReducers({
  cards: cardReducer,
  login: loginReducer,
  profilePage: profileReducer,
  errorMessage: errorForgotPasswordReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootStoreType = ReturnType<typeof rootReducer>;

// @ts-ignore

window.store = store;
