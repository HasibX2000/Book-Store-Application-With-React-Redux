import { configureStore } from "@reduxjs/toolkit";
import addBooksReducer from "./books/reducer";
import searchReducer from "./filter/reducer";

const store = configureStore({
  reducer: {
    addBookReducer: addBooksReducer,
    searchReducer: searchReducer,
  },
});

export default store;
