import actionTypes from "./types";

export const correctGuess = () => {
  return { type: actionTypes.CORRECT_GUESS };
};

export const guessWord = guessedWord => {
  return { type: actionTypes.GUESS_WORD, payload: "" };
};
