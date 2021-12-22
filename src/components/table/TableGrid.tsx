import React from 'react';

import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks';
import { getErrorNetworkMessage, setErrorMessageNetworkAC } from '../../store';
import { ReturnComponentType } from '../../types';
import { CustomButton } from '../customButton';

import { deckTemplate, removeDeckTC } from './decksTC';
import { EditableSpan } from './EditableSpan';
import style from './TableGrid.module.css';

export const TableGrid = (): ReturnComponentType => {
  const errorNetworkMessage = useAppSelector(getErrorNetworkMessage);

  const cardPacks = useAppSelector(state => state.decks.cardPacks);

  const dispatch = useDispatch();

  const random = 100000;

  const onRemoveDeckClick = (id: string): void => {
    dispatch(removeDeckTC(id));
    dispatch(setErrorMessageNetworkAC(''));
  };
  const onUpdateClick = (): void => {};

  return (
    <div>
      <table className={style.table}>
        {errorNetworkMessage && (
          <span style={{ color: 'red' }}> {errorNetworkMessage} </span>
        )}
        <thead>
          <tr>
            <th>Name</th>
            <th>CardsCount</th>
            <th>Updated</th>
            <th>Created</th>
            <th>What should I do</th>
          </tr>
        </thead>
        <tbody>
          {cardPacks.map((cardPack: deckTemplate) => (
            <tr key={Math.random() * random}>
              <td>
                <EditableSpan value={cardPack.name} id={cardPack._id} />
              </td>
              <td>{cardPack.cardsCount}</td>
              <td>{cardPack.updated}</td>
              <td>{cardPack.user_name}</td>
              <td>
                <div className={style.btns}>
                  <CustomButton title="update" onClick={onUpdateClick} />
                  <CustomButton
                    title="delete"
                    onClick={() => onRemoveDeckClick(cardPack._id)}
                  />
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
