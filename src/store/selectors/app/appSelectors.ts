import { RootStateType } from '../../types';

export const getIsInitialized = (state: RootStateType): boolean =>
  state.app.isInitialized;
