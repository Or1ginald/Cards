import { AxiosResponse } from 'axios';

import { instance } from './apiConfig';

export const cardsAPI = {
  getCards(cardsPackId: string, answer: string, question: string) {
    return instance.get<AxiosResponse<ResponseType>>('cards/card', {
      params: { cardsPackId, answer, question },
    });
  },
  deleteCard(_id: string) {
    return instance.delete<AxiosResponse<ResponseType>>(`cards/card?=${_id}`, {});
  },
  addNewCard(params: AddCardType) {
    return instance.post<cardType, AxiosResponse<any>>('cards/card', {
      params: { params },
    });
  },
  updateCard({ cardsPack_id, _id, answer, question }: cardType) {
    return instance.put<cardType, AxiosResponse<ResponseType>>('cards/card', {
      card: { cardsPack_id, _id, answer, question },
    });
  },
};

// types

export type AddCardType = {
  cardsPack_id: string;
  answer: string;
  question: string;
  grade: number;
  shots: number;
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
export type ResponseType = {
  cards: cardType[];
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: string;
};
