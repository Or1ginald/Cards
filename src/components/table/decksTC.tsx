import { Dispatch } from 'redux';

import { decksAPI } from './decksApi';

export type deckTemplate = {};
const initialState: deckTemplate[] = [];

export const decksReducer = (
  state: deckTemplate[] = initialState,
  action: setDecksACType,
): deckTemplate[] => {
  switch (action.type) {
    case 'FETCH_DECKS':
      return [...state, ...action.decks];
    default:
      return state;
  }
};

// actions
export const fetchDecksAC = (decks: any) =>
  ({
    type: 'FETCH_DECKS',
    decks,
  } as const);

type setDecksACType = ReturnType<typeof fetchDecksAC>;

// thunk

export const setDecksTC = () => (dispatch: Dispatch) => {
  decksAPI
    .fetchDecks()
    .then(res => {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      console.log('res.data.cardPacks', res.data.cardPacks);

      dispatch(fetchDecksAC(res.data.cardPacks));
    })
    .catch((error: any) => {
      console.log(error.data);
    });
};
