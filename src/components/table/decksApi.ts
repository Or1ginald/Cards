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
  fetchDecks() {
    return instance.get<any, AxiosResponse<ResponseDeckType>>('cards/pack');
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
