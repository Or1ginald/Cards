import React from 'react';

import { useAppSelector } from '../../hooks';
import { getErrorNetworkMessage } from '../../store';
// import { cardType } from '../../store/reducers/cards';
import { ReturnComponentType } from '../../types';
import { CustomButton } from '../customButton';
import style from '../table/TableGrid.module.css';

export const Cards = (): ReturnComponentType => {
  const errorNetworkMessage = useAppSelector(getErrorNetworkMessage);
  const cards = useAppSelector(state => state.cards.cards);
  // const cardPacks = useAppSelector(state => state.decks.cardPacks);

  // const dispatch = useDispatch();

  const random = 100000;

  // const onRemoveDeckClick = (id: string): void => {
  //   dispatch(removeDeckTC(id));
  //   dispatch(setErrorMessageNetworkAC(''));
  // };
  // const onUpdateClick = (): void => {};
  return (
    <div>
      <table className={style.table}>
        {errorNetworkMessage && (
          <span style={{ color: 'red' }}> {errorNetworkMessage} </span>
        )}
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
            <th>Last Updated</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card: any) => (
            <tr key={Math.random() * random}>
              <td>{/* <EditableSpan value={cardPack.name} id={cardPack._id} /> */}</td>
              <td>{card.question}</td>
              <td>{card.answer}</td>
              <td>{card.updated}</td>
              <td>
                <div className={style.btns}>
                  <CustomButton title="update" onClick={() => {}} />
                  <CustomButton title="delete" onClick={() => {}} />
                  {/* <button>update</button>
                  <button onClick={() => onRemoveDeckClick(cardPack._id)}>delete</button> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* const res = arr.map(item => (
  <tr key={item.id}>
    <td>{item.name}</td>
    <td>{item.price}</td>
  </tr>
)); */
/*
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
  </table> */
