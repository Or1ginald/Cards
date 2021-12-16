import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { cardReducer, loginReducer, profileReducer } from 'store';

export const rootReducer = combineReducers({
  cards: cardReducer,
  login: loginReducer,
  profilePage: profileReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootStoreType = ReturnType<typeof rootReducer>;

// @ts-ignore

window.store = store;
