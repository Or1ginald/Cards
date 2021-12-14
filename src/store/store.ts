import { combineReducers, createStore } from 'redux';

import { cardReducer, loginReducer } from 'store';

export const rootReducer = combineReducers({
  cards: cardReducer,
  login: loginReducer,
});
export const store = createStore(rootReducer);

export type RootStoreType = ReturnType<typeof rootReducer>;

// @ts-ignore

window.store = store;
