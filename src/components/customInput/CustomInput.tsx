import { memo } from 'react';

import { ReturnComponentType } from 'types';

type InputProps = {
  placeholder: string;
  typeInput: string;
  className: string;
  bind: any;
};

export const CustomInput = memo(
  ({
    placeholder,
    typeInput = 'text',
    className,
    bind,
  }: InputProps): ReturnComponentType => (
    <input type={typeInput} {...bind} placeholder={placeholder} className={className} />
  ),
);
