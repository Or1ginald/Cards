import { addNewPassAPI, SetNewPassType } from '../../api/forgotPasswordApi';

export const forgotPassSetPassTC =
  (data: SetNewPassType, setLoadedData: any, setError: any) => () => {
    addNewPassAPI
      .setNewPass(data)
      .then(() => {
        setLoadedData(true);
      })
      .catch(() => {
        setError(true);
      });
  };
