export const normalizeWords = (words) => {
  const wordsArr = [];
  for (const key in words) {
    wordsArr.push({
      key,
      ...words[key],
    });
  }

  return wordsArr;
};
