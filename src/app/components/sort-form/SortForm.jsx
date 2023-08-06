import React from 'react';

const SortForm = ({
  loadLunchesData,
  changeSelected,
  valueSelected,
  currentPage,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    loadLunchesData({ page: currentPage, sort: valueSelected });
  };

  return (
    <form className="sort" onSubmit={handleSubmit}>
      <label className="label">
        Сортировка по:&nbsp;
        <select
          name="selectSort"
          value={valueSelected}
          className="sort-button"
          onChange={(e) => changeSelected(e.target.value)}
        >
          <option className="option" value="desc">
            убыванию
          </option>
          <option className="option" value="asc">
            возростанию
          </option>
        </select>
      </label>
      <button className="submit-btn" type="submit">
        OK
      </button>
    </form>
  );
};
export { SortForm };
