import { addNewPassAPI, AddNewPassType } from '../../api/forgotPasswordApi';

export const forgotPassAddEmailTC =
  (dataPayload: AddNewPassType, setLoading: any, setShowMessage: any) => () => {
    addNewPassAPI
      .addNewPass(dataPayload)
      .then(() => {
        setLoading(false);
        setShowMessage(true);
      })
      .catch(e =>
        e.response ? e.response.data.error : `${e.message}, more details in the console`,
      );
  };
