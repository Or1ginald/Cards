import { ReturnComponentType } from '../../types';

import s from './cards.module.css';

export const Cards = (): ReturnComponentType => (
  /* const res = arr.map(item => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  )); */

  <table className={s.container}>
    <thead>
      <tr>
        <td>Question</td>
        <td>Answer</td>
        <td>Last Updated</td>
        <td>Grade</td>
        <td>Actions</td>
      </tr>
    </thead>
    <tbody>{}</tbody>
  </table>
);
