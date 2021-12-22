const initState = {};

type initStateType = {
  /* userId?: Nullable<string>;
  _id: string;
  name?: string;
  path?: string;
  cardsCount?: number;
  grade?: number;
  shots?: number;
  rating?: number;
  type?: string;
  created?: string;
  updated?: string;
  __v?: number; */
};

export const cardReducer = (
  state: initStateType = initState,
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
