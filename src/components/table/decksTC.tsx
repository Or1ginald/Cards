import { Dispatch } from 'redux';

import { decksAPI } from './decksApi';

export type deckTemplate = {
  _id: string;
  userId?: string;
  name?: string;
  path?: string;
  cardsCount?: number;
  grade?: number;
  shots?: number;
  rating?: number;
  type?: string;
  created?: string;
  updated?: string;
  __v?: number;
};

export type ResponseDeckType = {
  cardPacks: deckTemplate[];
  cardPacksTotalCount: number;
  maxCardsCount: number;
  minCardsCount: number;
  page: number;
  pageCount: number;
};
const initialState: deckTemplate[] = [];

export const decksReducer = (
  state: deckTemplate[] = initialState,
  action: setDecksACType | deleteDeckACType,
): deckTemplate[] => {
  switch (action.type) {
    case 'FETCH_DECKS':
      return [...state, ...action.decks];
    case 'REMOVE_DECK':
      // eslint-disable-next-line no-underscore-dangle
      return state.filter(deck => deck._id !== action.id);

    default:
      return state;
  }
};

// actions
export const fetchDecksAC = (decks: deckTemplate[]) =>
  ({
    type: 'FETCH_DECKS',
    decks,
  } as const);
export const deleteDeckAC = (id: string) =>
  ({
    type: 'REMOVE_DECK',
    id,
  } as const);

type setDecksACType = ReturnType<typeof fetchDecksAC>;
type deleteDeckACType = ReturnType<typeof deleteDeckAC>;

// thunk

export const setDecksTC = () => (dispatch: Dispatch) => {
  decksAPI
    .fetchDecks()
    .then(res => {
      console.log(res.data);
      dispatch(fetchDecksAC(res.data.cardPacks));
    })
    .catch((error: any) => {
      console.log(error.data);
    });
};
export const removeDeckTC = (id: string, index: any) => (dispatch: Dispatch) => {
  decksAPI
    .removeDeck(id)
    .then(res => {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      console.log('res.data.cardPacks[index]._id', res.data.cardPacks[0]._id);

      dispatch(deleteDeckAC(res.data.cardPacks[index]._id));
    })
    .catch((error: any) => {
      console.log(error.data);
    });
};
