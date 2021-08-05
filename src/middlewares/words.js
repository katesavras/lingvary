import {normalizeWords} from "../utils/words";
import {addWordAction, getWordsAction, removeWordAction} from '../store/actions/wordsActions';
import {v4} from 'uuid';


export const getAllWords = () => async (dispatch) => {
    const response = await fetch(`https://lingvary-6f32e-default-rtdb.firebaseio.com/words.json`);
    const body =  await response.json();
    console.log(body)
    return dispatch(getWordsAction(normalizeWords(body)))
}

export const createWords = (engWord, rusWord) => async (dispatch) => {

    const newWord = {
        id: v4(),
        eng: engWord,
        rus: rusWord,
    }

    const response = await fetch(
        `https://lingvary-6f32e-default-rtdb.firebaseio.com/words.json`, {
            method: 'POST',
            body: JSON.stringify(newWord),
        }
    );
    const {name} = await response.json()

    return dispatch(addWordAction({
        ...newWord,
        key: name,
    }))
}

export const removeWord = (key) => async (dispatch) => {
    await fetch(
        `https://lingvary-6f32e-default-rtdb.firebaseio.com/words/${key}.json`, {
            method: 'DELETE',
        }
    );

    return dispatch(removeWordAction(key))
}