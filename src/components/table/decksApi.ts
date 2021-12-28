import { AxiosResponse } from 'axios';

import { ResponseDeckType } from './decksTC';

import { instance } from 'api/apiConfig';

export type addNewDeckType = {
  name: string;
};

export type updateDeckType = {
  _id: string;
};

export const decksAPI = {
  fetchDecks(page: number, pageCount: number) {
    return instance.get<any, AxiosResponse<ResponseDeckType>>('cards/pack', {
      params: { page, pageCount },
    });
  },
  fetchAllSortDecks(sortIndex: number, pageCount: number, currentPage: number) {
    return instance.get<any, AxiosResponse<ResponseDeckType>>(
      `cards/pack/?sortPacks=${sortIndex}updated`,
      {
        params: { pageCount, currentPage },
      },
    );
  },
  fetchSearchDecks(searchWord: string, pageCount: number, currentPage: number) {
    return instance.get<any, AxiosResponse<ResponseDeckType>>(
      `cards/pack/?packName=${searchWord}`,
      {
        params: { pageCount, currentPage },
      },
    );
  },

  addNewDeck(cardsPack: addNewDeckType) {
    return instance.post<addNewDeckType, AxiosResponse<any>>('cards/pack', { cardsPack });
  },

  removeDeck(id: string) {
    return instance.delete<string, any>(`cards/pack/?id=${id}`);
  },

  updateDeck(cardsPack: updateDeckType) {
    return instance.put<string, any>('cards/pack', { cardsPack });
  },
};
