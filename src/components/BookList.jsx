import React from "react";
import booksdata from "../data.json";
import BookCard from "./BookCard";

const BookList = () => {
  return (
    <div className="flex flex-col gap-10 order-2 xl:-order-1 p-5 lg:pl-0">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Book List</h2>
        <div className="flex gap-3">
          <button className="px-5 py-1 bg-theme-900 border border-theme-900 rounded-full text-white">
            All
          </button>
          <button className="px-5 py-1 bg-white border border-theme-900 rounded-full text-theme-900 hover:bg-theme-900 hover:text-white duration-150">
            Featured
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        {booksdata.map((book) => {
          return <BookCard book={book} key={book.id} />;
        })}
      </div>
    </div>
  );
};
export default BookList;
