import React from 'react';

import s from './Pagination.module.css';

type PaginationPropsType = {
  pages: number[];
  currentPage: number;
};

export const Pagination = React.memo((props: PaginationPropsType) => {
  const { pages, currentPage } = props;
  return (
    <div className={s.pagination}>
      {pages.map((page, index) => {
        const pageClassName = page === currentPage ? s.activePage : s.page;
        return (
          // eslint-disable-next-line react/no-array-index-key
          <span key={index} className={pageClassName}>
            {page}
          </span>
        );
      })}
    </div>
  );
});
