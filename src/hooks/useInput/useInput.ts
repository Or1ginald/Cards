import { useState } from 'react';

type useInputPropsType = {
  value: string;
  setValue: any;
  reset: any;
  bind: {
    value: string;
    onChange: (event: any) => void;
  };
};

export const useInput = (initialValue: string): useInputPropsType => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event: any) => {
        setValue(event.target.value);
      },
    },
  };
};
