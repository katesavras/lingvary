import { normalizeWords } from '../utils/normalize';
import {getDictionaryAction} from "../store/actions/dictionaryActions";

// const { REACT_APP_URL } = process.env;


export const getDictionary = () => async (dispatch) => {
  const response = await fetch(`https://words-7a5e5-default-rtdb.europe-west1.firebasedatabase.app/dictionary.json`);
  const body = await response.json();

  return dispatch(getDictionaryAction(normalizeWords(body)));
};
