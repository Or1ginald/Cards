import React, { ChangeEvent, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setErrorMessageNetworkAC } from '../../store/reducers/errorReducer';
import { getErrorNetworkMessage } from '../../store/selectors/confirmPassword';
import style from '../../style/Common.module.css';

import { addDeckTC, deckTemplate, removeDeckTC, setDecksTC } from './decksTC';
import { EditableSpan } from './EditableSpan';
import styleTable from './Table.module.css';

import { TableSidebar, Preloader } from 'components';
import { useAppSelector } from 'hooks';
import { getStatus } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Table = (): ReturnComponentType => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const errorNetworkMessage = useAppSelector(getErrorNetworkMessage);
  const isLoading = useAppSelector(getStatus);
  const decks = useAppSelector(state => state.decks);

  useEffect(() => {
    dispatch(setDecksTC());
  }, [dispatch]);

  const random = 100000;

  const onRemoveDeckClick = (id: string): void => {
    dispatch(removeDeckTC(id));
    dispatch(setErrorMessageNetworkAC(''));
  };

  const onTitleEnterChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setTitle(e.currentTarget.value);
  };
  const addButtonClick = (): void => {
    dispatch(addDeckTC({ name: title }));
    setTitle('');
  };

  // const onFilterMyPacksClick = (): void => {};

  return (
    <div className={styleTable.wrapper}>
      <TableSidebar />

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
                className={styleTable.textArea}
                placeholder="name pack"
                value={title}
                onChange={onTitleEnterChange}
              />
              <button className={style.btn} onClick={addButtonClick}>
                Add new pack
              </button>
            </div>

            <div className={styleTable.tableCommon}>
              <div className={styleTable.element}>
                <div className={styleTable.elementPartOne} style={{ fontSize: '16px' }}>
                  Name
                </div>
                <div className={styleTable.elementPartTwo} style={{ fontSize: '16px' }}>
                  CardsCount
                </div>
                <div className={styleTable.elementPartThree} style={{ fontSize: '16px' }}>
                  Updated
                </div>
              </div>

              <div className={styleTable.tableRow}>
                {errorNetworkMessage && (
                  <span style={{ color: 'red' }}> {errorNetworkMessage} </span>
                )}
                {decks.map((deck: deckTemplate) => (
                  <div className={styleTable.element} key={Math.random() * random}>
                    <div className={styleTable.elementPartOne}>
                      <EditableSpan value={deck.name} id={deck._id} />
                    </div>
                    <div className={styleTable.elementPartTwo}>{deck.cardsCount}</div>
                    <div className={styleTable.elementPartThree}>{deck.updated}</div>
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
