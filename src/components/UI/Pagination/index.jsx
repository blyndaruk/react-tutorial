import React, { useState } from 'react';
import classNames from 'classnames';
import { usePaginationRange } from '../../../hooks/usePagination';
import cssModule from './Pagination.module.scss'

const Pagination = ({ updatePage, totalPages }) => {
  const range = usePaginationRange(totalPages)
  const [currentPage, setCurrentPage] = useState(1)

  function changePage (e, page) {
    e.preventDefault()
    updatePage(page)
    setCurrentPage(page)
  }

  return (
    <div className={classNames({ [`${cssModule['pagination']} ${cssModule['is-active']}`]: true })}>
      {range.map((page) => {
        return (
          <a
            key={+page}
            href={`/${page}`}
            className={classNames(cssModule['pagination__link'], { [`${cssModule['is-active']}`]: currentPage === page })}
            onClick={(e) => changePage(e, page)}
          >
            {page}
          </a>
        )
      })}
    </div>
  );
};

export default Pagination;
