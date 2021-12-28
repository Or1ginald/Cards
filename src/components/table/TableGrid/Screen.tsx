import React from 'react';

import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../../hooks';
import { getStatus } from '../../../store';
import { ReturnComponentType } from '../../../types';
import { Pagination } from '../../pagination';
import { Preloader } from '../../preloader';
import { TableSidebar } from '../../tableSidebar';
import { setCurrentPageAC } from '../decksTC';
import { Search } from '../Search';
import { TableGrid } from '../TableGrid';

export const Screen = (): ReturnComponentType => {
  const isLoading = useAppSelector(getStatus);
  const totalCount = useAppSelector(state => state.decks.cardPacksTotalCount);
  const currentPage = useAppSelector(state => state.decks.page);
  const perPage = useAppSelector(state => state.decks.pageCount);

  const dispatch = useDispatch();

  return (
    <div>
      {isLoading === 'loading' ? (
        <Preloader />
      ) : (
        <div style={{ display: 'flex' }}>
          <TableSidebar />
          <div>
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
        </div>
      )}
    </div>
  );
};
