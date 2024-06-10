import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "./BookCard";
import fetchBooks from "../redux/books/thunk/fetchBooks";

const BookList = () => {
  const booksdata = useSelector((state) => state.addBookReducer.books);

  const [filterStatus, setFilterStatus] = useState("all");
  const searchTerm = useSelector((state) => state.searchReducer.term);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const filterByStatus = (book) => {
    if (filterStatus === "featured") {
      return book.featured;
    } else {
      return true;
    }
  };

  const filterByName = (book) => {
    return book.name.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const handleStatusChange = (status) => {
    setFilterStatus(status);
  };

  return (
    <div className="flex flex-col gap-10 order-2 xl:-order-1 p-5 lg:pl-0">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Book List</h2>
        <div className="flex gap-3">
          <button
            className={`px-5 py-1 rounded-full ${
              filterStatus === "all"
                ? "bg-theme-900 border border-theme-900 text-white"
                : "bg-white border border-theme-900 text-theme-900 hover:bg-theme-900 hover:text-white duration-150"
            }`}
            onClick={() => handleStatusChange("all")}
          >
            All
          </button>
          <button
            className={`px-5 py-1 rounded-full ${
              filterStatus === "featured"
                ? "bg-theme-900 border border-theme-900 text-white"
                : "bg-white border border-theme-900 text-theme-900 hover:bg-theme-900 hover:text-white duration-150"
            }`}
            onClick={() => handleStatusChange("featured")}
          >
            Featured
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        {booksdata &&
          booksdata
            .filter(filterByStatus)
            .filter(filterByName)
            .map((book) => <BookCard book={book} key={book.id} />)}
        {/* {
          booksdata.map((book) => <BookCard book={book} key={book.id} />)} */}
      </div>
    </div>
  );
};

export default BookList;
