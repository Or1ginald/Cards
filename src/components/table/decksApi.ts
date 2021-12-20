import { AxiosResponse } from 'axios';

import { ResponseDeckType } from './decksTC';

import { instance } from 'api/apiConfig';

export type addNewDeckType = {
  name: string;
};

export const decksAPI = {
  fetchDecks() {
    return instance.get<any, AxiosResponse<ResponseDeckType>>('cards/pack');
  },
  addNewDeck(params: addNewDeckType) {
    return instance.post<addNewDeckType, AxiosResponse<any>>('cards/pack', params);
  },

  removeDeck(id: string) {
    return instance.delete<string, any>(`cards/pack/?id=${id}`);
  },

  updateDeck(id: string) {
    return instance.put<string, any>('cards/pack', { id });
  },
};
