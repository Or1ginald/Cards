import { Nullable } from '../../../types';
import { RootStateType } from '../../types';

export const getErrorNetworkMessage = (
  state: RootStateType,
): Nullable<string> | undefined => state.errorMessage.errorNetwork;
export const getErrorValidMessage = (
  state: RootStateType,
): Nullable<string> | undefined => state.errorMessage.errorValidation;
