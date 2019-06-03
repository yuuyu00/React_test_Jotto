import { correctGuess } from "../";
import actionTypes from "../types";

it("correctGuess", () => {
  expect(correctGuess()).toEqual({ type: actionTypes.CORRECT_GUESS });
});
