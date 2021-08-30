import React, { useEffect, useState } from "react";
import "./style.scss";
import PropTypes from "prop-types";

export const InputWord = ({ onRightArrow, onLeftArrow, isMistake }) => {
  const [inputValue, setInputValue] = useState(" ");

  useEffect(() => {
    window.addEventListener("keydown", eventHandler);
    return () => {
      window.removeEventListener("keydown", eventHandler);
    };
  });

  const eventHandler = (event) => {
    if (event.code === "Enter") {
      rightArrowClickHandler();
    }
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const rightArrowClickHandler = () => {
    onRightArrow(inputValue.trim());
    setInputValue("");
  };

  const leftArrowClickHandler = () => {
    setInputValue(onLeftArrow);
  };

  return (
    <div className="input__wrapper">
      <span className="arrow" onClick={leftArrowClickHandler}>
        &#63;
      </span>
      <input
        className={isMistake ? " mistake" : null}
        autoFocus
        type="text"
        onChange={inputHandler}
        value={inputValue}
      />
      <span className="arrow" onClick={rightArrowClickHandler}>
        &#9002;
      </span>
    </div>
  );
};

InputWord.propTypes = {
  onRightArrow: PropTypes.func.isRequired,
  onLeftArrow: PropTypes.string.isRequired,
  isMistake: PropTypes.bool.isRequired,
};
