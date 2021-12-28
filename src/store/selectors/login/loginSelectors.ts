import { RootStateType } from '../../types';

export const getIsDataLoaded = (state: RootStateType): boolean => state.login.isAuth;
