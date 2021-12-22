/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-key */
import React from 'react';

import { DOTS, usePagination } from 'hooks';
import { ReturnComponentType } from 'types';

// import { useDispatch } from 'react-redux';
//
// import { setCurrentPageAC } from '../table/decksTC';
//
// import s from './Pagination.module.css';
//
type PaginationPropsType = {
  currentPage: number;
  onPageChange: any;
  totalCount: number;
  siblingCount: number;
  pageSize: number;
  className: string;
};

// export const Pagination = React.memo((props: PaginationPropsType) => {
//   const { pages, currentPage } = props;
//   const dispatch = useDispatch();
//   const onPageClick = (newCurrentPage: number): void => {
//     dispatch(setCurrentPageAC(newCurrentPage));
//   };
//   return (
//     <div className={s.pagination}>
//       {pages.map((page, index) => {
//         const pageClassName = page === currentPage ? s.activePage : s.page;
//         return (
//           // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
//           <div
//             // eslint-disable-next-line react/no-array-index-key
//             key={index}
//             className={pageClassName}
//             onClick={() => onPageClick(page)}
//           >
//             {page}
//           </div>
//         );
//       })}
//     </div>
//   );
// });

export const Pagination = (props: PaginationPropsType): ReturnComponentType => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = (): void => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = (): void => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={classnames('pagination-container', { [className]: className })}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};
