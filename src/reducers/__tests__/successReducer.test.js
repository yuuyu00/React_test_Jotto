import actionTypes from "../../actions/types";
import successReducer from "../successReducer";

it("typeがCORRECT_GUESSでない場合falseが返る", () => {
  const newState = successReducer(undefined, { type: null });
  expect(newState).toBe(false);
});

it("typeがCORRECT_GUESSの場合trueが返る", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toEqual(true);
});
