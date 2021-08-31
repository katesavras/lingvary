import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

export const Card = ({ cardWords, index, isEnglish }) => {
  return (
    <div className="card">
      <p>{isEnglish ? cardWords[index].eng : cardWords[index].rus}</p>
    </div>
  );
};
Card.propTypes = {
  index: PropTypes.number.isRequired,
  cardWords: PropTypes.array.isRequired,
  isEnglish: PropTypes.bool.isRequired,
};
