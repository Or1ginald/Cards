import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { cardType } from '../../api/cardsApi';
import { useAppSelector } from '../../hooks';
import { getErrorNetworkMessage, setErrorMessageNetworkAC } from '../../store';
// import { cardType } from '../../store/reducers/cards';
import { getCardsTC, removeCardTC } from '../../store/reducers/cards';
import { ReturnComponentType } from '../../types';
import { CustomButton } from '../customButton';
import style from '../table/TableGrid.module.css';

export const Cards = (): ReturnComponentType => {
  const errorNetworkMessage = useAppSelector(getErrorNetworkMessage);
  const cards = useAppSelector(state => state.cards.cards);
  // const cardPacks = useAppSelector(state => state.decks.cardPacks);
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
    navigate('addCard');
  };

  useEffect(() => {
    if (!cardsPack_id) {
      return;
    }
    dispatch(getCardsTC(cardsPack_id));
  }, []);
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
          <button className={style.btn} onClick={onClickAddCard}>
            Add new card
          </button>
        </thead>
        <tbody>
          {cards.map((card: cardType) => (
            <tr key={Math.random() * random}>
              <td>{/* <EditableSpan value={cardPack.name} id={cardPack._id} /> */}</td>
              <td>{card.question}</td>
              <td>{card.answer}</td>
              <td>{card.updated}</td>
              <td>
                <div className={style.btns}>
                  <CustomButton
                    title="delete"
                    onClick={() => onClickRemoveCard(card._id)}
                  />
                  <CustomButton title="update" onClick={() => {}} />
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
