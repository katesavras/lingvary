import { v4 } from 'uuid';
import { normalizeWords } from '../utils/normalize';
import {
  addWordAction,
  getWordsAction,
  removeWordAction,
} from '../store/actions/wordsActions';

const wordsUrl = `https://lingvary-6f32e-default-rtdb.firebaseio.com/words.json`;

export const getAllWords = () => async (dispatch) => {
  const response = await fetch(wordsUrl);
  const body = await response.json();

  return dispatch(getWordsAction(normalizeWords(body)));
};

export const createWords = (engWord, rusWord) => async (dispatch) => {
  const newPairWords = {
    id: v4(),
    eng: engWord,
    rus: rusWord,
  };

  const response = await fetch(wordsUrl, {
    method: 'POST',
    body: JSON.stringify(newPairWords),
  });
  const { name } = await response.json();

  return dispatch(
    addWordAction({
      ...newPairWords,
      key: name,
    }),
  );
};

export const removeWord = (key) => async (dispatch) => {
  await fetch(`https://lingvary-6f32e-default-rtdb.firebaseio.com/words/${key}.json`, {
    method: 'DELETE',
  });

  return dispatch(removeWordAction(key));
};
