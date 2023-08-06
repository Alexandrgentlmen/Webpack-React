import React from 'react';

const Pagination = ({ currentPage, countPages, changePaginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= countPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className="pagination list-reset">
        {pageNumbers.map((number) => {
          if (currentPage !== number) {
            return (
              <li className="page-item" key={number}>
                <button
                  className="page-btn btn-reset"
                  onClick={() => changePaginate(number)}
                >
                  {number}
                </button>
              </li>
            );
          } else {
            return (
              <li className="page-item" key={number}>
                <button className="page-btn btn-reset active-btn">
                  {number}
                </button>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};
export { Pagination };
