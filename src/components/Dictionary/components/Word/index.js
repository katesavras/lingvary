import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

export const Word = ({ word: { eng, rus, id, key }, onDelete }) => {
  const handleClick = () => {
    onDelete(key, eng);
  };

  return (
    <>
      <div className="word">
        <p className="word__eng">{eng}</p>
        <p className="word__rus">{rus}</p>
        <span className="word__del" onClick={handleClick}>
          &#10005;
        </span>
      </div>
      <div className="word__line"> </div>
    </>
  );
};

Word.propTypes = {
  onDelete: PropTypes.func.isRequired,
  word: PropTypes.object,
};
