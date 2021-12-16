import { addNewPassAPI, AddNewPassType } from '../../api/forgotPasswordApi';

export const forgotPassAddEmailTC =
  (dataPayload: AddNewPassType, setLoading: any, setShowMessage: any) => () => {
    addNewPassAPI
      .addNewPass(dataPayload)
      .then(() => {
        setLoading(false);
        setShowMessage(true);
      })
      .catch(error => {
        console.log(error.data);
      });
  };
