import { handleActions } from 'redux-actions';
import {setFilterLevel} from "../actions/filterLevelActions";

const initialState = ''

export const filterLevelReducer = handleActions(
  {
      [setFilterLevel]: (state, action) => action.payload,
  },
 initialState
);
