import { memo } from 'react';

import { ReturnComponentType } from 'types';

type InputProps = {
  placeholder: string;
  typeInput: string;
  className: string;
  onChange: () => void;
  value: string;
  // bind: any;
};

export const CustomInput = memo(
  ({
    placeholder,
    typeInput = 'text',
    className,
    value,
    onChange,
  }: InputProps): ReturnComponentType => (
    <input
      type={typeInput}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  ),
);
// ({
//   placeholder,
//   typeInput = 'text',
//   className,
//   bind,
// }: InputProps): ReturnComponentType => (
//   <input type={typeInput} {...bind} placeholder={placeholder} className={className} />
// ),
