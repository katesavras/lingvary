import { wordsReducer } from "../wordsReducer";
import { initialState } from "../wordsReducer";
import {
  getWordsAction,
  removeWordAction,
  addWordAction,
} from "../../actions/wordsActions";

describe("wordsReducer", () => {
  it("should get words", () => {
    const words = [
      {
        id: "384uim00",
        eng: "cat",
        rus: "кот",
      },
    ];
    const result = wordsReducer(initialState, getWordsAction(words));
    expect(result).toEqual(words);
  });

  it("should remove word", () => {
    const state = [
      { id: "384uim00", eng: "cat", rus: "кот", key: "key_1" },
      { id: "384uis00", eng: "house", rus: "дом", key: "key_2" },
    ];
    const result = wordsReducer(state, removeWordAction("key_2"));
    expect(result).toEqual([
      { id: "384uim00", eng: "cat", rus: "кот", key: "key_1" },
    ]);
  });

  it("should add word", () => {
    const state = [
      { id: "384uim00", eng: "cat", rus: "кот", key: "key_1" },
      { id: "384uis00", eng: "house", rus: "дом", key: "key_2" },
    ];
    const newWord = {
      id: "384uid00",
      eng: "beauty",
      rus: "красота",
      key: "key_3",
    };
    const updatedState = wordsReducer(initialState, addWordAction(newWord));
    const result = updatedState.some(({ key }) => key === "key_3");
    expect(result).toBe(true);
  });
});
