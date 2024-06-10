import { addBook } from "../actions";

const addNewBooks = (book) => {
  return async (dispatch) => {
    const response = await fetch("https://booksdata-caqt.onrender.com/books", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const books = await response.json();
    dispatch(addBook(books));
  };
};
export default addNewBooks;
