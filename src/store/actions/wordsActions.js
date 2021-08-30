import { createAction } from "redux-actions";

export const addWordAction = createAction("add_word");
export const getWordsAction = createAction("get_words");
export const removeWordAction = createAction("remove_word");
