import { ChangeEvent, useState } from 'react';

// type useInputPropsType = {
//   value: string;
//   setValue: any;
//   reset: any;
//   bind: {
//     value: string;
//     onChange: (event: any) => void;
//   };
// };

export const useInput = (initialValue: string): any => {
  const [value, setValue] = useState(initialValue);

  const handleValue = (e: ChangeEvent<HTMLInputElement>): void =>
    setValue(e.target.value);
  const resetValue = (): void => setValue(initialValue);

  return { value, handleValue, resetValue };
};

// return {
//   value,
//   setValue,
//   reset: () => setValue(''),
//   bind: {
//     value,
//     onChange: (event: any) => {
//       setValue(event.target.value);
//     },
//   },
// };

// export const useInput = (initialValue: string): any => {
//   const [inputValue, setInputValue] = useState(initialValue);
//
//   const handleInputValueChange = useCallback(
//     (newValue: string) => setInputValue(newValue),
//     [],
//   );
//
//   return useMemo(
//     () => ({ inputValue, handleInputValueChange }),
//     [inputValue, handleInputValueChange],
//   );
// };
