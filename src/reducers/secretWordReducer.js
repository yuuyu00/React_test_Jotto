import actionTypes from "../actions/types";

export default (state = "", action) => {
  switch (action.payload) {
    case actionTypes.SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};
