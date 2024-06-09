import { SET_SEARCH_TERM } from "./actionTypes";
import initialState from "./initialState";

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, term: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
