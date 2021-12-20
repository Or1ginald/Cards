import { Dispatch } from 'redux';

import { addNewPassAPI, AddNewPassType } from '../../api/forgotPasswordApi';
import { setAppStatusAC } from '../reducers/appInitialized';
import { setErrorMessageNetworkAC } from '../reducers/errorReducer';

export const forgotPassAddEmailTC =
  (dataPayload: AddNewPassType, setShowMessage: any) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'));
    addNewPassAPI
      .addNewPass(dataPayload)
      .then(() => {
        setShowMessage(true);
        dispatch(setAppStatusAC('succeeded'));
      })
      .catch(e => {
        dispatch(setAppStatusAC('succeeded'));
        const errorNetwork = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(setErrorMessageNetworkAC(errorNetwork));
      });
  };
