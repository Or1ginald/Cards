import { Dispatch } from 'redux';

import { addNewPassAPI, AddNewPassType } from '../../api/forgotPasswordApi';
import { setErrorMessageNetworkAC } from '../reducers/errorReducer';

export const forgotPassAddEmailTC =
  (dataPayload: AddNewPassType, setLoading: any, setShowMessage: any) =>
  (dispatch: Dispatch) => {
    addNewPassAPI
      .addNewPass(dataPayload)
      .then(() => {
        setLoading(false);
        setShowMessage(true);
      })
      .catch(e => {
        const errorNetwork = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(setErrorMessageNetworkAC(errorNetwork));
      });
  };
