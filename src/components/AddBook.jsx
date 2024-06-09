import React from "react";

const AddBook = () => {
  return (
    <div className=" bg-white p-5 rounded-md">
      <h2 className="text-2xl font-bold mb-3">Add New Book</h2>
      <form className="flex flex-col gap-3 w-full">
        {/* Book Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Book Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border px-2 py-1 focus:outline-none"
          />
        </div>
        {/* Book Name */}
        {/* Author Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="author">Author Name</label>
          <input
            type="text"
            name="author"
            id="author"
            className="border px-2 py-1 focus:outline-none"
          />
        </div>
        {/* Author Name */}
        {/* Book Thumbnail */}
        <div className="flex flex-col gap-2">
          <label htmlFor="thumbnail">Cover URl</label>
          <input
            type="text"
            name="thumbnail"
            id="thumbnail"
            className="border px-2 py-1 focus:outline-none"
          />
        </div>
        {/* Book Thumbnail */}
        {/* Price & Rating */}
        <div className="grid grid-cols-2 gap-3 w-full ">
          <div className="flex flex-col gap-2">
            <label htmlFor="price">Book Price</label>
            <input
              type="number"
              name="price"
              id="price"
              className="border px-2 py-1 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="rating">Book Rating</label>
            <input
              type="number"
              name="rating"
              id="rating"
              className="border px-2 py-1 focus:outline-none"
            />
          </div>
        </div>
        {/* Price & Rating */}
        {/* Featured */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="featured"
            id="featured"
            className="border px-2 py-1 focus:outline-none"
          />
          <label htmlFor="featured">This as a featured Book</label>
        </div>
        {/* Featured */}

        {/* Add Book Button */}
        <div className="flex">
          <button
            type="submit"
            className="bg-theme-900 text-white px-4 py-2 rounded-md w-full"
          >
            Add Book
          </button>
        </div>
        {/* Add Book Button */}
      </form>
    </div>
  );
};

export default AddBook;
