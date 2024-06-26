import {
  ADD_BOOK,
  DELETE_BOOK,
  EDIT_BOOK,
  LOAD_BOOK,
  UPDATE_BOOK,
} from "./actionTypes";

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: book,
  };
};
export const loadBook = (books) => {
  return {
    type: LOAD_BOOK,
    payload: books,
  };
};
export const deleteBook = (book) => {
  return {
    type: DELETE_BOOK,
    payload: book,
  };
};

export const editBook = (book) => {
  return {
    type: EDIT_BOOK,
    payload: book,
  };
};

export const updateBook = (book) => {
  return {
    type: UPDATE_BOOK,
    payload: book,
  };
};
