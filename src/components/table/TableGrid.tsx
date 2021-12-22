import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks';
import { getErrorNetworkMessage, setErrorMessageNetworkAC } from '../../store';
import { ReturnComponentType } from '../../types';
import { CustomButton } from '../customButton';

import { deckTemplate, removeDeckTC } from './decksTC';
import { EditableSpan } from './EditableSpan';
import { sortReducer } from './SortReducer';
import style from './TableGrid.module.css';

export const TableGrid = (): ReturnComponentType => {
  const cardPacks = useAppSelector(state => state.decks.cardPacks);

  const [dates, setDates] = useState<deckTemplate[]>(cardPacks);

  const errorNetworkMessage = useAppSelector(getErrorNetworkMessage);

  const dispatch = useDispatch();

  /*  const random = 100000; */

  const onRemoveDeckClick = (id: string): void => {
    dispatch(removeDeckTC(id));
    dispatch(setErrorMessageNetworkAC(''));
  };
  const onUpdateClick = (): void => {};

  const sortUp = (): void =>
    setDates(sortReducer(cardPacks, { type: 'sort', payload: 'up' }));
  const sortDown = (): void =>
    setDates(sortReducer(cardPacks, { type: 'sort', payload: 'down' }));

  const finalDates = dates.map((d: deckTemplate) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '200px',
        flexDirection: 'column',
      }}
      key={d._id}
    >
      {d.updated}
    </div>
  ));
  return (
    <div>
      {errorNetworkMessage && (
        <span style={{ color: 'red' }}> {errorNetworkMessage} </span>
      )}
      <table className={style.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>CardsCount</th>
            <th>
              <div style={{ display: 'flex' }}>
                Updated
                <CustomButton title="down" onClick={sortDown} />
                <CustomButton title="up" onClick={sortUp} />
              </div>
            </th>
            <th>Created</th>
            <th>What should I do</th>
          </tr>
        </thead>
        <tbody>
          {cardPacks.map((cardPack: deckTemplate) => (
            <tr key={cardPack._id}>
              <td>
                <EditableSpan value={cardPack.name} id={cardPack._id} />
              </td>
              <td>{cardPack.cardsCount}</td>
              {/* {finalDates} */}
              <td>{cardPack.updated}</td>
              <td>{cardPack.user_name}</td>
              <td>
                <div className={style.btns}>
                  <CustomButton title="update" onClick={onUpdateClick} />
                  <CustomButton
                    title="delete"
                    onClick={() => onRemoveDeckClick(cardPack._id)}
                  />
                </div>
              </td>
            </tr>
          ))}
          {finalDates}
        </tbody>
      </table>
    </div>
  );
};
