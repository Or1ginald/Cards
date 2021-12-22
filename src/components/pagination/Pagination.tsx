import React from 'react';

import s from './Pagination.module.css';

type PaginationPropsType = {
  pages: number[];
  currentPage: number;
};

export const Pagination = React.memo((props: PaginationPropsType) => {
  const { pages, currentPage } = props;
  const onPageClick = (): void => {};
  return (
    <div className={s.pagination}>
      {pages.map((page, index) => {
        const pageClassName = page === currentPage ? s.activePage : s.page;
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={pageClassName}
            onClick={onPageClick}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
});
