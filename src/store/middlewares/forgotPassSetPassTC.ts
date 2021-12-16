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
        /*  e.response ? e.response.data.error : `${e.message}, more details in the console`; */
      });
  };
