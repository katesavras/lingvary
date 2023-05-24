import React from 'react';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterLevel } from '../../../../store/actions/filterLevelActions';
import PropTypes from 'prop-types';

const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];

export const WordFilter = ({ onFilterChange }) => {
  const dispatch = useDispatch();
  const filterLevel = useSelector((state) => state.filterLevel);

  const handleLevelChange = (event) => {
    const level = event.target.value;

    dispatch(setFilterLevel(level));
    onFilterChange();
  };

  return (
    <div className="word-filter">
      <select value={filterLevel} placeholder="Select level" onChange={handleLevelChange}>
        <option value="" disabled hidden>
          Select level
        </option>
        <option value="">All</option>
        {levels.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
    </div>
  );
};

WordFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
