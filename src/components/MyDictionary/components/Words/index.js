import React, { useEffect }from 'react';
import { useDispatch } from 'react-redux';
import { getAllWords } from 'middlewares/words';
import { Word } from '../Word';
import PropTypes from 'prop-types';
import './style.scss';

export const Words = ({ words }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

  return (
    <div className="words__wrapper">
      {words.map((word) => {
        return <Word key={word.id} word={word} />;
      })}
    </div>
  );
};

Words.propTypes = {
  words: PropTypes.array.isRequired,
};
