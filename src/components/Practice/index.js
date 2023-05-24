import React, { useEffect, useState } from 'react';
import { getAllWords } from 'middlewares/words';
import { InputWord } from './components/InputWord';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from './components/Card';
import './style.scss';
import { Switcher } from './components/Switcher';
import { getRandomInt } from 'utils/randomInt';
import { Notice } from '../UI/Notice';

export const Practice = () => {
  const cardWords = useSelector((state) => state.words);

  const [wordIndex, setWordIndex] = useState(getRandomInt(cardWords.length));
  const [isMistake, setIsMistake] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

  const showNextWordHandler = (inputValue) => {
    const isEngWordEqualInputValue = isEnglish && inputValue.toLowerCase() === cardWords[wordIndex].rus.toLowerCase();
    const isRusWordEqualInputValue =
      !isEnglish && inputValue.toLowerCase() === cardWords[wordIndex].eng.toLowerCase();

    if (isEngWordEqualInputValue || isRusWordEqualInputValue) {
      setIsMistake(false);
      wordIndex === cardWords.length - 1 ? setWordIndex(0) : setWordIndex(wordIndex + 1);
    } else {
      setIsMistake(true);
    }
  };

  const onChangeLangHandler = (lang) => {
    setIsEnglish(lang);
  };

  return (
    <div className="practice">
      <div className="practice__switcher">
        <Switcher onChangeLang={onChangeLangHandler} />
      </div>
      {cardWords.length === 0 && <Notice>Add words in your dictionary.</Notice>}
      {cardWords.length !== 0 && (
        <>
          <Card cardWords={cardWords} index={wordIndex} isEnglish={isEnglish} />
          <InputWord
            showNextWord={showNextWordHandler}
            showHint={isEnglish ? cardWords[wordIndex].rus : cardWords[wordIndex].eng}
            isMistake={isMistake}
          />
        </>
      )}
    </div>
  );
}
