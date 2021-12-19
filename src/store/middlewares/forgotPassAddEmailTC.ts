import { Dispatch } from 'redux';

import { addNewPassAPI, AddNewPassType } from '../../api/forgotPasswordApi';
import { setErrorMessagePassAC } from '../../components/confirmPassword/errorReducer';

export const forgotPassAddEmailTC =
  (dataPayload: AddNewPassType, setLoading: any, setShowMessage: any) =>
  (dispatch: Dispatch) => {
    addNewPassAPI
      .addNewPass(dataPayload)
      .then(() => {
        setLoading(false);
        setShowMessage(true);
      })
      .catch(() => dispatch(setErrorMessagePassAC('mistaken email')));
  };
