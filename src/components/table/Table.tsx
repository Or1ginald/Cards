import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootStoreType } from '../../store';
import style from '../../style/Common.module.css';
import { ReturnComponentType } from '../../types';

import { deckTemplate, setDecksTC } from './decksTC';
import SuperRange from './Range';
import styleTable from './Table.module.css';

export const Table = (): ReturnComponentType => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDecksTC());
  }, [dispatch]);

  const decks = useSelector<RootStoreType, any>(state => state.decks);
  const random = 100000;

  return (
    <div className={styleTable.wrapper}>
      <div className={styleTable.leftBlock}>
        <div className={styleTable.btns}>
          <button className={style.btn}>My</button>
          <button className={style.btn}>All</button>
        </div>
        <span>Number of cards</span>
        <SuperRange />
      </div>

      <div className={styleTable.rightBlock}>
        <div className={styleTable.decks}>
          <span> Packs list </span>
          <div className={styleTable.searchInputSection}>
            <input
              className={styleTable.inputSearch}
              id="decks"
              placeholder="Search"
              type="search"
            />
            <button className={style.btn}>Add new pack</button>
          </div>

          <div className={styleTable.tableCommon}>
            <div className={styleTable.tableCaption}>
              <div className={styleTable.captionElement}>Name</div>
              <div className={styleTable.captionElement}>CardsCount</div>
              <div className={styleTable.captionElement}>Updated</div>
            </div>

            <div className={styleTable.tableRow}>
              {decks.map((deck: deckTemplate) => (
                <div className={styleTable.element} key={Math.random() * random}>
                  <div className={styleTable.elementPart}>{deck.name}</div>
                  <div className={styleTable.elementPart}>{deck.cardsCount}</div>
                  <div className={styleTable.elementPart}>{deck.updated}</div>
                  <button className={styleTable.btn}>update</button>
                  <button className={styleTable.btn}>delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
