/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-key */
import React from 'react';

import './pagination.scss';

import { DOTS, usePagination } from 'hooks';
import { ReturnComponentType } from 'types';

type PaginationPropsType = {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  pageSize: number;
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
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;

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
  const ulClassName = currentPage === 1 ? 'pagination-item disabled' : 'pagination-item';
  const liSelected =
    currentPage === lastPage ? 'pagination-item disabled' : 'pagination-item';

  return (
    <ul className="pagination-container">
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <li className={ulClassName} onClick={onPrevious}>
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber: any) => {
        if (pageNumber === DOTS) {
          return (
            <li
              className="pagination-item dots"
              key={pageNumber + Math.random().toString()}
            >
              &#8230;
            </li>
          );
        }
        const liDisabled =
          pageNumber === currentPage ? 'pagination-item selected' : 'pagination-item';

        return (
          <li
            className={liDisabled}
            onClick={() => onPageChange(pageNumber)}
            key={pageNumber}
          >
            {pageNumber}
          </li>
        );
      })}
      <li className={liSelected} onClick={onNext}>
        <div className="arrow right" />
      </li>
    </ul>
  );
};
