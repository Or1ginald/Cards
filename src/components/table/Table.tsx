import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Pagination } from '../pagination';

import { setCurrentPageAC, setDecksTC } from './decksTC';
import { Search } from './Search';
import styleTable from './Table.module.css';
import { TableGrid } from './TableGrid';

import { Preloader, TableSidebar } from 'components';
import { useAppSelector } from 'hooks';
import { getStatus } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Table = (): ReturnComponentType => {
  const isLoading = useAppSelector(getStatus);
  const totalCount = useAppSelector(state => state.decks.cardPacksTotalCount);
  const currentPage = useAppSelector(state => state.decks.page);
  const perPage = useAppSelector(state => state.decks.pageCount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDecksTC());
  }, [dispatch, currentPage]);

  return (
    <div className={styleTable.wrapper}>
      <TableSidebar />
      {isLoading === 'loading' ? (
        <Preloader />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Search />
          <TableGrid />
          <div style={{ backgroundColor: 'white' }}>
            <Pagination
              currentPage={currentPage}
              totalCount={totalCount}
              pageSize={perPage}
              onPageChange={(page: number) => dispatch(setCurrentPageAC(page))}
            />
          </div>
        </div>
      )}
    </div>
  );
};
