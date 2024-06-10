import { deleteBook } from "../actions";

const deleteOldBook = (book) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://booksdata-caqt.onrender.com/books/${book.id}`,
      {
        method: "DELETE",
      }
    );

    dispatch(deleteBook(book));
  };
};
export default deleteOldBook;
