import { AxiosError } from 'axios';
import { Dispatch } from 'redux';

import { setAppStatusAC } from '../../store/reducers/appInitialized';
import { setErrorMessageNetworkAC } from '../../store/reducers/errorReducer';

import { addNewDeckType, decksAPI } from './decksApi';

export type deckTemplate = {
  _id: string;
  userId?: string | undefined;
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
  cardPacksTotalCount: number; // totalCount
  maxCardsCount: number;
  minCardsCount: number;
  page: number; // currentPage
  pageCount: number; // perPage
};
const initialState: deckTemplate[] = [];

export const decksReducer = (
  state: deckTemplate[] = initialState,
  action: ActionsType,
): deckTemplate[] => {
  switch (action.type) {
    case 'FETCH_DECKS':
      return [...state, ...action.decks];
    case 'REMOVE_DECK':
      return state.filter(deck => deck._id !== action.id);
    case 'ADD_DECK':
      return [{ ...action.deck }, ...state];
    case 'UPDATE_DECK':
      return state.map(deck =>
        deck._id === action.id ? { ...deck, name: action.title } : deck,
      );

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
export const addDeckAC = (deck: any) =>
  ({
    type: 'ADD_DECK',
    deck,
  } as const);

export const upDateDeckAC = (title: any, id: string) =>
  ({
    type: 'UPDATE_DECK',
    title,
    id,
  } as const);

type ActionsType =
  | ReturnType<typeof fetchDecksAC>
  | ReturnType<typeof deleteDeckAC>
  | ReturnType<typeof addDeckAC>
  | ReturnType<typeof upDateDeckAC>;

// thunk

export const setDecksTC = () => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'));
  decksAPI
    .fetchDecks()
    .then(res => {
      dispatch(fetchDecksAC(res.data.cardPacks));
      dispatch(setAppStatusAC('succeeded'));
    })
    .catch((e: AxiosError) => {
      dispatch(setAppStatusAC('succeeded'));
      const errorNetwork = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setErrorMessageNetworkAC(errorNetwork));
    });
};
export const removeDeckTC = (id: string) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'));
  decksAPI
    .removeDeck(id)
    .then(() => {
      dispatch(deleteDeckAC(id));
      dispatch(setAppStatusAC('succeeded'));
    })
    .catch((e: AxiosError) => {
      dispatch(setAppStatusAC('succeeded'));
      const errorNetwork = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setErrorMessageNetworkAC(errorNetwork));
    });
};

export const addDeckTC = (dataPayload: addNewDeckType) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'));
  decksAPI
    .addNewDeck(dataPayload)
    .then(res => {
      const deck = res.data.newCardsPack;
      dispatch(addDeckAC(deck));
      dispatch(setAppStatusAC('succeeded'));
    })
    .catch((e: AxiosError) => {
      dispatch(setAppStatusAC('succeeded'));
      const errorNetwork = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setErrorMessageNetworkAC(errorNetwork));
    });
};

export const upDateDeckTC = (title: any, _id: string) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'));
  decksAPI
    .updateDeck({ _id })
    .then(() => {
      dispatch(upDateDeckAC(title, _id));
      dispatch(setAppStatusAC('succeeded'));
    })
    .catch((e: AxiosError) => {
      dispatch(setAppStatusAC('succeeded'));
      const errorNetwork = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setErrorMessageNetworkAC(errorNetwork));
    });
};
