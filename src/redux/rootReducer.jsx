import { combineReducers } from "redux";
import addBooksReducer from "./books/reducer";
import searchReducer from "./filter/reducer";

const rootReducer = combineReducers({
  addBookReducer: addBooksReducer,
  searchReducer: searchReducer,
});

export default rootReducer;
