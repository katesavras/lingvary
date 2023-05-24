import { handleActions } from 'redux-actions';
import { getDictionaryAction} from 'store/actions/dictionaryActions';

export const initialState = [];

export const dictionaryReducer = handleActions(
  {
      [getDictionaryAction]: (state, action) => [...action.payload],
  },
  initialState
);
