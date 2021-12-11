import React from 'react';

import { CustomButton, CustomCheckbox, CustomInputText } from 'components';
import { ReturnComponentType } from 'types';

const Test = (): ReturnComponentType => (
  <div style={{ textAlign: 'center', width: '700px', margin: '50px' }}>
    <CustomInputText placeholder="Enter smth?" />

    <CustomButton>Сделай мне больно</CustomButton>

    <CustomCheckbox />
  </div>
);

export default Test;
