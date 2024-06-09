import React from "react";
import DeleteIcon from "../assets/delete.png";
import EditIcon from "../assets/edit.png";
import StarIcon from "../assets/star.png";

const BookCard = ({ book }) => {
  const { name, author, thumbnail, rating, price, featured } = book;

  const ratings = () => {
    const images = [];
    for (let i = 0; i < rating; i++) {
      images.push(<img src={StarIcon} alt="star" className="w-5" key={i} />);
    }
    return images;
  };

  return (
    <div className="grid grid-cols-[170px_auto] gap-4 border bg-white rounded-md">
      <div>
        <img
          src={thumbnail}
          alt={name}
          className="w-[170px] h-[240px] object-cover rounded-tl-md rounded-bl-md"
        />
      </div>
      <div className="py-2 px-1 flex flex-col gap-2">
        <div className="relative">
          {featured ? (
            <p className="bg-theme-100 text-theme-900 inline-block px-2 py-1 rounded-md">
              {featured ? "Featured" : ""}
            </p>
          ) : (
            <span>&nbsp;</span>
          )}
          <div className="flex gap-3 absolute top-0 right-2">
            <img className="w-7 cursor-pointer" src={EditIcon} alt="edit" />
            <img className="w-7 cursor-pointer" src={DeleteIcon} alt="delete" />
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <h2 className="text-lg lg:text-2xl font-semibold">{name}</h2>
          <p className="text-sm lg:text-md italic">{author}</p>
          <div className="flex gap-1">{ratings()}</div>
          <p className="text-lg font-medium">{price} BDT</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
