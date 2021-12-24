import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { cardType } from '../../api/cardsApi';
import { useAppSelector } from '../../hooks';
import { getErrorNetworkMessage, setErrorMessageNetworkAC } from '../../store';
import { getCardsTC, removeCardTC } from '../../store/reducers/cards';
import { ReturnComponentType } from '../../types';
import { CustomButton } from '../customButton';
import style from '../table/TableGrid.module.css';

import s from './cards.module.css';

import { PATH } from 'enum/pathes';

export const Cards = (): ReturnComponentType => {
  const errorNetworkMessage = useAppSelector(getErrorNetworkMessage);
  const cards = useAppSelector(state => state.cards.cards);
  // const userId = useAppSelector(state => state.cards.packUserId);
  console.log('cards', cards);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const random = 100000;
  const params = useParams<'cardsPack_id'>();
  const { cardsPack_id } = params as { cardsPack_id: string };
  const onClickRemoveCard = (_id: string): void => {
    dispatch(removeCardTC(_id));
    dispatch(setErrorMessageNetworkAC(''));
  };
  const onClickAddCard = (): void => {
    navigate(PATH.CARD);
  };

  useEffect(() => {
    dispatch(getCardsTC(cardsPack_id));
  }, [cardsPack_id]);
  return (
    <div>
      <button className={s.btn} onClick={onClickAddCard}>
        Add new card
      </button>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
            <th>Last Updated</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* */}
        <tbody>
          {cards.map((card: cardType) => (
            <tr key={Math.random() * random}>
              <td>{card.question}</td>
              <td>{card.answer}</td>
              <td>{card.updated}</td>
              <td>{card.created}</td>
              <td>
                {/* {userId ? ( */}
                <div className={style.btns}>
                  <CustomButton
                    title="delete"
                    onClick={() => onClickRemoveCard(card._id)}
                  />
                  <CustomButton title="update" onClick={() => {}} />
                  {/* <button>update</button>
                  <button onClick={() => onRemoveDeckClick(cardPack._id)}>delete</button> */}
                </div>
                {/*  ) : (
                  ''
                )} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {errorNetworkMessage && (
        <span style={{ color: 'red' }}> {errorNetworkMessage} </span>
      )}
    </div>
  );
};
