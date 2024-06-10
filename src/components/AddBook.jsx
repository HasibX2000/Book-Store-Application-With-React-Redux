import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addBook, updateBook } from "../redux/books/actions";
import addNewBooks from "../redux/books/thunk/addNewBooks";
import updateOldBooks from "../redux/books/thunk/updateOldBooks";

const AddBook = () => {
  // form handler
  const { register, handleSubmit, setValue, reset } = useForm();

  const dispatch = useDispatch();

  const booksToEdit = useSelector((state) => state.addBookReducer.booksToEdit);
  const newId = booksToEdit + 1;

  useEffect(() => {
    if (booksToEdit) {
      setValue("name", booksToEdit.name);
      setValue("author", booksToEdit.author);
      setValue("thumbnail", booksToEdit.thumbnail);
      setValue("price", booksToEdit.price);
      setValue("rating", booksToEdit.rating);
      setValue("featured", booksToEdit.featured);
      setValue("id", booksToEdit.id);
    } else {
      reset({
        name: "",
        author: "",
        thumbnail: "",
        price: "",
        rating: "",
        featured: false,
        id: newId,
      });
    }
  }, [booksToEdit, setValue, reset]);

  const onSubmit = (data) => {
    if (booksToEdit) {
      dispatch(updateOldBooks(data));
    } else {
      dispatch(addNewBooks({ ...data, id: newId }));
    }
    reset({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
      id: "",
    });
  };

  return (
    <div className=" bg-[#f8f8f8] p-5 rounded-md h-fit">
      <h2 className="text-2xl font-bold mb-3">Add New Book</h2>
      <form
        className="flex flex-col gap-3 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Book Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Book Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border px-2 py-1 focus:outline-none"
            {...register("name", { required: true })}
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
            {...register("author", { required: true })}
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
            {...register("thumbnail", { required: true })}
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
              {...register("price", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="rating">Book Rating</label>
            <input
              type="number"
              name="rating"
              id="rating"
              className="border px-2 py-1 focus:outline-none"
              {...register("rating", { required: true })}
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
            {...register("featured")}
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
            {booksToEdit ? "Update Book" : "Add Book"}
          </button>
        </div>
        {/* Add Book Button */}
      </form>
    </div>
  );
};

export default AddBook;
