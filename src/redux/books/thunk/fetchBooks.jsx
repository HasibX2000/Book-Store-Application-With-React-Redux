import { loadBook } from "../actions";

const fetchBooks = () => {
  return async (dispatch) => {
    const response = await fetch("https://booksdata-caqt.onrender.com/books", {
      method: "GET",
    });
    const books = await response.json();
    dispatch(loadBook(books));
  };
};
export default fetchBooks;
