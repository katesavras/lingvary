import {handleActions} from "redux-actions";
import {addWordAction, getWordsAction, removeWordAction, searchWordAction} from "../actions/wordsActions";

export const wordsReducer = handleActions({
    [getWordsAction]: (state, action) => [...action.payload],
    [addWordAction]: (state, action) => [...state, action.payload],
    [removeWordAction]: (state, action) => state.filter(({ key }) => key !== action.payload),
    // [searchWordAction]: (state, action) => {
    //     let value = action.payload;
    //          return state.filter(({ eng, rus }) => eng.includes(value) || rus.includes(value));;
    //
    //
    // },


}, [])