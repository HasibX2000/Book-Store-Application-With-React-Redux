import { editBook } from "../actions";

const editOldBook = (book) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://booksdata-caqt.onrender.com/books/${book.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const books = await response.json();
    dispatch(editBook(books));
  };
};
export default editOldBook;
