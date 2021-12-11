import { combineReducers, createStore } from 'redux';

import { cardReducer } from 'store';

const reducers = combineReducers({
  cards: cardReducer,
});
export const store = createStore(reducers);

export type RootStoreType = ReturnType<typeof reducers>;

// @ts-ignore
window.store = store;
