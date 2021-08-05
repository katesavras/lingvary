import {handleActions} from "redux-actions";
import {addWordAction, getWordsAction, removeWordAction} from "../actions/wordsActions";

export const wordsReducer = handleActions({
    [addWordAction]: (state, action) => [...state, action.payload],
    [getWordsAction]: (state, action) => [...state, ...action.payload],
    [removeWordAction]: (state, action) => state.filter(({ key }) => key !== action.payload),
}, [])