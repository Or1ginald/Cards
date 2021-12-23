import { instance } from './apiConfig';

export const cardsAPI = {
  /* getCards(cardPackId: string) {
    return instance.get<GetCardsResponseType>('cards/card', { cardPackId });
  }, */
  deleteCard(cardPackId: string) {
    return instance.delete<GetCardsResponseType>(`cards/card?=${cardPackId}`, {});
  },
  addNewCard(cardPackId: string) {
    return instance.post<GetCardsResponseType>('cards/card', cardPackId);
  },
  updateCard(cardPackId: string) {
    return instance.post<RegisterParamsType, any>('cards/card', cardPackId);
  },
};

// types

export type RegisterParamsType = {
  email: string;
  password: string;
};

export type cardType = {
  _id: string;
  user_id: string;
  answer: string;
  question: string;
  cardsPack_id: string;
  grade?: number;
  shots?: number;
  rating?: number;
  type?: string;
  created?: string;
  updated?: string;
  __v?: number;
};
type GetCardsResponseType = {
  cards: cardType[];
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: string;
};
