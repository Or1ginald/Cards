import { ThunkDispatch } from 'redux-thunk';

import { cardsAPI, cardType } from '../../api/cardsApi';
import { requestStatus } from '../../enum';
import { RootStoreType } from '../store';

import { setAppStatusAC, SetAppStatusActionType } from './appInitialized';

type initStateType = {
  cards: cardType[];
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: string;
};
const initialState: initStateType = {
  cards: [],
  cardsTotalCount: 5,
  maxGrade: 5,
  minGrade: 3,
  page: 1,
  pageCount: 4,
  packUserId: '',
};
export const cardReducer = (
  state: initStateType = initialState,
  action: ActionTypesCards,
): initStateType => {
  switch (action.type) {
    case 'CARDS/SET_DATA_CARDS':
      return { ...state, ...action.cards };
    default:
      return state;
  }
};

export const setCardsAC = (cardsPackId: string, cards: cardType[]) =>
  ({ type: 'CARDS/SET_DATA_CARDS', cardsPackId, cards } as const);

export const getCardsTC =
  (cardsPackId: string) =>
  (dispatch: ThunkDispatch<RootStoreType, undefined, ActionTypesCards>) => {
    dispatch(setAppStatusAC(requestStatus.loading));
    cardsAPI.getCards(cardsPackId).then(res => {
      dispatch(setCardsAC(cardsPackId, res.data.data.cards));
      dispatch(setAppStatusAC(requestStatus.succeeded));
    });
  };

// types
export type getCardsType = ReturnType<typeof setCardsAC>;

export type ActionTypesCards = getCardsType | SetAppStatusActionType;
