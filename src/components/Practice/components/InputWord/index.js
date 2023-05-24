import React, { useEffect, useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { KEY_CODES } from 'constants/index';

export const InputWord = ({ showNextWord, showHint, isMistake }) => {
  const [inputValue, setInputValue] = useState(' ');

  useEffect(() => {
    window.addEventListener('keydown', eventHandler);

    return () => {
      window.removeEventListener('keydown', eventHandler);
    };
  });

  const eventHandler = (event) => {
    if (event.code === KEY_CODES.ENTER) {
      rightArrowClickHandler();
    }
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const rightArrowClickHandler = () => {
    showNextWord(inputValue.trim());
    setInputValue('');
  };

  const hintClickHandler = () => {
    setInputValue(showHint);
  };

  return (
    <div className="input__wrapper">
      <span className="btn__control" onClick={hintClickHandler}>
        &#63;
      </span>
      <input
        className={isMistake ? ' mistake' : null}
        type="text"
        onChange={inputHandler}
        value={inputValue}
      />
      <span className="btn__control" onClick={rightArrowClickHandler}>
        &#9002;
      </span>
    </div>
  );
};

InputWord.propTypes = {
  showNextWord: PropTypes.func.isRequired,
  showHint: PropTypes.string.isRequired,
  isMistake: PropTypes.bool.isRequired,
};
