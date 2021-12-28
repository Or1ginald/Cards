import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { PATH } from '../../enum';
import { useAppSelector } from '../../hooks';
import { getErrorNetworkMessage, setErrorMessageNetworkAC } from '../../store';
import { ReturnComponentType } from '../../types';
import { CustomButton } from '../customButton';

import { deckTemplate, removeDeckTC } from './decksTC';
import { EditableSpan } from './EditableSpan';
import { Sort } from './Sort/Sort';
import style from './TableGrid.module.css';

export const TableGrid = (): ReturnComponentType => {
  const errorNetworkMessage = useAppSelector(getErrorNetworkMessage);
  const cardPacks = useAppSelector(state => state.decks.cardPacks);

  const dispatch = useDispatch();

  const onRemoveDeckClick = (id: string): void => {
    dispatch(removeDeckTC(id));
    dispatch(setErrorMessageNetworkAC(''));
  };
  const onUpdateClick = (): void => {};

  const finalCardPacks = cardPacks.map((cardPack: deckTemplate) => (
    <tr key={cardPack._id}>
      <td>
        <EditableSpan value={cardPack.name} id={cardPack._id} />
      </td>
      <td>{cardPack.cardsCount}</td>
      <td>{cardPack.updated}</td>
      <td>{cardPack.user_name}</td>
      <td>
        <div className={style.btns}>
          <CustomButton title="update" onClick={onUpdateClick} />
          <CustomButton title="delete" onClick={() => onRemoveDeckClick(cardPack._id)} />
          <Link to={PATH.CARDS}> cards </Link>
        </div>
      </td>
    </tr>
  ));

  return (
    <div>
      <div style={{ backgroundColor: 'white', padding: '5px 0' }}>
        {errorNetworkMessage && (
          <span style={{ color: 'red' }}> {errorNetworkMessage} </span>
        )}
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>CardsCount</th>
            <th>
              <div style={{ display: 'flex' }}>
                Updated
                <Sort />
              </div>
            </th>
            <th>Created</th>
            <th>What should I do</th>
          </tr>
        </thead>
        <tbody>{finalCardPacks}</tbody>
      </table>
    </div>
  );
};
