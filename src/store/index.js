import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { wordsReducer } from 'store/reducers/wordsReducer';
import {dictionaryReducer} from "./reducers/dictionaryReducer";
import {filterLevelReducer} from "./reducers/filterLevelReducer";

const rootReducer = combineReducers({
  words: wordsReducer,
  dictionary: dictionaryReducer,
  filterLevel: filterLevelReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
