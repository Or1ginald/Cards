import { FC, memo } from 'react';

import { useInput } from '../../hooks/useInput/useInput';

import { CustomInputType } from './types';

import { ReturnComponentType } from 'types';

export const CustomInput: FC<CustomInputType> = memo(({ title }): ReturnComponentType => {
  const { inputValue, handleInputValueChange: onInputValueChange } = useInput();

  return (
    <div>
      <input
        type="text"
        value={inputValue.value}
        onChange={onInputValueChange}
        placeholder={title}
      />
    </div>
  );
});
