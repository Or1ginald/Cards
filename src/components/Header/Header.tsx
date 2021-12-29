import React from 'react';

import { NavLink } from 'react-router-dom';

import { PATH } from '../../enum';
import { ReturnComponentType } from '../../types';

export const Header = (): ReturnComponentType => (
  <div>
    <NavLink to={PATH.PACKS}> packs </NavLink>---
    <NavLink to={PATH.PROFILE}> profile </NavLink>---
    <NavLink to={PATH.REGISTRATION}> register </NavLink>---
  </div>
);
