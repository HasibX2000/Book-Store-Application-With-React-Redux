import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK, UPDATE_BOOK } from "./actionTypes";
import initialState from "./initialState";

const addBooksReducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [
          ...state.books,
          {
            ...payload,
            id: state.length >= 1 ? state[state.length - 1].id + 1 : 1,
          },
        ],
      };
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
        booksToEdit: null,
      };
    case EDIT_BOOK:
      return {
        ...state,
        booksToEdit: action.payload,
      };

    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== payload.id),
      };

    default:
      return state;
  }
};
export default addBooksReducer;
