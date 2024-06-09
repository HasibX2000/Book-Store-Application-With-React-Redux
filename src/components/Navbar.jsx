import React from "react";
import Logo from "../assets/bookstore-logo.png";
import SearchIcon from "../assets/search.svg";

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between w-full py-4">
      <img src={Logo} alt="logo" className="w-48" />
      <ul className="flex gap-3">
        <li>
          <a href="#">BookStore</a>
        </li>
        <li>
          <a href="#">WishList</a>
        </li>
        <li>
          <a href="#">My Collection</a>
        </li>
      </ul>
      <div className="flex border w-60 px-1 rounded-md hover:border-blue-600 duration-200 bg-white">
        <img src={SearchIcon} alt="search icon" className="w-10 p-2" />
        <input
          type="text"
          placeholder="Filter Books..."
          className="w-full focus:outline-none text-md  "
        />
      </div>
    </nav>
  );
};

export default Navbar;
