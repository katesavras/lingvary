import React, { useMemo, useState } from "react";
import "./style.scss";
import PropTypes from "prop-types";

export const Pagination = ({ wordsPerPage, totalWords, paginate }) => {
  const [activePage, setIsActivePage] = useState(1);

  const pageNumbers = useMemo(
    () => {
      const memoPageNumbers = [];
      for (let i = 1; i <= Math.ceil(totalWords / wordsPerPage); i++) {
        memoPageNumbers.push(i);
      }
      return memoPageNumbers;
    },
    [wordsPerPage, totalWords]
  );

  const handleClick = (page) => {
    setIsActivePage(page);
    paginate(page);
  };
  return (
    <>
      <div className="pages">
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={activePage === page ? "page active" : "page"}
            onClick={() => handleClick(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
};
Pagination.propTypes = {
  wordsPerPage: PropTypes.number.isRequired,
  totalWords: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
