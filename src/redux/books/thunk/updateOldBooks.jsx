import { updateBook } from "../actions";

const updateOldBooks = (book) => {
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
    dispatch(updateBook(books));
  };
};
export default updateOldBooks;
