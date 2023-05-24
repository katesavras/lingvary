import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
      <div className='search'>
        <input
            className="search__field"
            placeholder="Search..."
            type="text"
            onChange={handleSearch}
        />
      </div>

  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
