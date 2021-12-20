import React, { ChangeEvent, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useAppSelector } from '../../hooks';
import { RootStoreType } from '../../store';
import { getStatus } from '../../store/selectors';
import { getErrorNetworkMessage } from '../../store/selectors/confirmPassword';
import style from '../../style/Common.module.css';
import { ReturnComponentType } from '../../types';
import { Preloader } from '../preloader';

import { addDeckTC, deckTemplate, removeDeckTC, setDecksTC } from './decksTC';
import SuperRange from './Range';
import styleTable from './Table.module.css';

export const Table = (): ReturnComponentType => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const errorNetworkMessage = useAppSelector(getErrorNetworkMessage);
  const isLoading = useAppSelector(getStatus);

  useEffect(() => {
    dispatch(setDecksTC());
  }, [dispatch]);

  const decks = useSelector<RootStoreType, any>(state => state.decks);
  const random = 100000;
  const onRemoveDeckClick = (id: string): void => {
    dispatch(removeDeckTC(id));
  };

  const onTitleEnterChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setTitle(e.currentTarget.value);
  };
  const addButtonClick = (): void => {
    dispatch(addDeckTC({ name: title }));
    setTitle('');
  };

  const onClickFilterMyPacksClick = (): void => {};

  return (
    <div className={styleTable.wrapper}>
      <div className={styleTable.leftBlock}>
        <div className={styleTable.btns}>
          <button className={style.btn} onClick={onClickFilterMyPacksClick}>
            My
          </button>
          <button className={style.btn}>All</button>
        </div>
        <span>Number of cards</span>
        <SuperRange />
      </div>
      {isLoading === 'loading' ? (
        <Preloader />
      ) : (
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
              <textarea
                placeholder="name pack"
                value={title}
                onChange={onTitleEnterChange}
              />
              <button className={style.btn} onClick={addButtonClick}>
                Add new pack
              </button>
            </div>

            <div className={styleTable.tableCommon}>
              <div className={styleTable.tableCaption}>
                <div className={styleTable.captionElement}>Name</div>
                <div className={styleTable.captionElement}>CardsCount</div>
                <div className={styleTable.captionElement}>Updated</div>
              </div>

              <div className={styleTable.tableRow}>
                {errorNetworkMessage && (
                  <span style={{ color: 'red' }}> {errorNetworkMessage} </span>
                )}
                {decks.map((deck: deckTemplate) => (
                  <div className={styleTable.element} key={Math.random() * random}>
                    <div className={styleTable.elementPart}>{deck.name}</div>
                    <div className={styleTable.elementPart}>{deck.cardsCount}</div>
                    <div className={styleTable.elementPart}>{deck.updated}</div>
                    <button className={styleTable.btn}>update</button>
                    <button
                      className={styleTable.btn}
                      onClick={() => onRemoveDeckClick(deck._id)}
                    >
                      delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
