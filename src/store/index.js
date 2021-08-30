import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { wordsReducer } from "./reducers/wordsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  words: wordsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
