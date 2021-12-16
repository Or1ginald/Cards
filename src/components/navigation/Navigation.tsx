import React from 'react';

import { NavLink } from 'react-router-dom';

import { ReturnComponentType } from '../../types';

export const Navigation = (): ReturnComponentType => (
  <div>
    <NavLink to="/login"> login </NavLink>---
    <NavLink to="/registration"> registration </NavLink>---
    <NavLink to="/profile"> profile </NavLink>---
    <NavLink to="/createNewPassword/*"> create new password</NavLink>---
    <NavLink to="/confirmPassword"> confirm password</NavLink>---
  </div>
);
