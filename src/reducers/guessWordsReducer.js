import actionTypes from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return action.payload;
    default:
      return state;
  }
};
