import { ChangeEvent, useState } from 'react';

export const useInput = (initialValue: string): any => {
  const [value, setValue] = useState(initialValue);

  const handleValue = (e: ChangeEvent<HTMLInputElement>): void =>
    setValue(e.target.value);

  const resetValue = (): void => setValue(initialValue);

  return { value, handleValue, resetValue };
};
