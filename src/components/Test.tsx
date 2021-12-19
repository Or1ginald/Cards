import React from 'react';

import { Table } from './table/Table';

import { ReturnComponentType } from 'types';

export const Test = (): ReturnComponentType => (
  <div>
    {/* <div className={style.container}>
      <p style={{ color: 'white' }}> Test page </p>
    </div> */}
    <Table />
  </div>
);
