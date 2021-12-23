import { cardType } from '../../api/cardsApi';

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
  action: any,
): initStateType => {
  switch (action.type) {
    case '': {
      return state;
    }
    default:
      return state;
  }
};

export const getCardsAC = (cardPackId: string) =>
  ({ type: 'LOGIN/SET_AUTH_LOGIN_DATA', cardPackId } as const);
