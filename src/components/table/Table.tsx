import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootStoreType } from '../../store';
import style from '../../style/Common.module.css';
import { ReturnComponentType } from '../../types';

import { setDecksTC } from './decksTC';
import styleTable from './Table.module.css';

export const Table = (): ReturnComponentType => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDecksTC());
  }, [dispatch]);

  const decks = useSelector<RootStoreType, any>(state => state.decks);
  const random = 100000;

  return (
    <div>
      <div>
        <button className={style.btn}> show dev header</button>
        {/*   <div className={style.decks}>
           eslint-disable-next-line jsx-a11y/label-has-associated-control 
          <label id="decks">search</label>
          <input
            className={style.inputEmail}
            id="decks"
            placeholder="decks"
            list="decks"
            type="search"
          />
        </div>
        <datalist id="decks">
          <select>
            {decks.map((deck: any) => (
              <option key={Math.random() * random}>{deck.user_name}</option>
            ))}
          </select>
        </datalist> */}
      </div>
      <div className={styleTable.tableCommon}>
        <div className={styleTable.tableColumn}>
          <div>Name</div>
          {decks.map((deck: any) => (
            <div className={styleTable.element} key={Math.random() * random}>
              {deck.user_name}
            </div>
          ))}
        </div>

        <div className={styleTable.tableColumn}>
          <div>CardsCount</div>
          {decks.map((deck: any) => (
            <div className={styleTable.element} key={Math.random() * random}>
              {deck.cardsCount}
            </div>
          ))}
        </div>

        <div className={styleTable.tableColumn}>
          <div>Updated</div>
          {decks.map((deck: any) => (
            <div className={styleTable.element} key={Math.random() * random}>
              {deck.updated}
              <button className={styleTable.btn}>add</button>{' '}
              <button className={styleTable.btn}>delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
