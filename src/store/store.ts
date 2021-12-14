import { combineReducers, createStore } from 'redux';

import { cardReducer } from 'store';

export const rootReducer = combineReducers({
  cards: cardReducer,
});
export const store = createStore(rootReducer);

export type RootStoreType = ReturnType<typeof rootReducer>;

// @ts-ignore

window.store = store;
