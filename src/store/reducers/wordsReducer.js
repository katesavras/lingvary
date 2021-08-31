import { handleActions } from 'redux-actions';
import { addWordAction, getWordsAction, removeWordAction } from 'store/actions/wordsActions';

export const initialState = [];

export const wordsReducer = handleActions(
  {
    [getWordsAction]: (state, action) => [...action.payload],
    [addWordAction]: (state, action) => [...state, action.payload],
    [removeWordAction]: (state, action) =>
      state.filter(({ key }) => key !== action.payload),
  },
  initialState,
);
