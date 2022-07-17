import axios from "axios";
import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import BooksList from "./BooksList";

const Header = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const style = { color: "gray", fontSize: "1.7em" };

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          'https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAqWkw9Wqx-qqWFjKCYjYW-EbYOlFM-pB0'+'&maxResults=40'
        )
        .then((res) => setBooks(res.data.items))
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-stone-800 to-stone-800 relative">
        <div className="bg-navbar p-28 bg-cover bg-center mix-blend-overlay"></div>
      </div>
      <div className="flex flex-col justify-center items-center absolute top-0 left-0 right-0 p-14">
        <h1 className="font-poppins text-2xl font-bold text-[#feffff]">
          Find Your Book
        </h1>
        <div className="flex flex-row items-center p-2 sm:w-5/12 md:w-6/12">
          <input
            type="text"
            className="font-poppins bg-[#feffff] p-3 w-full rounded-lg outline-none border-2 border-[#feffff]"
            placeholder="Search for your book"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyPress={searchBook}
          />
          <button className="bg-[#feffff] p-3 m-2 rounded-lg">
            <FaSistrix style={style} />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-evenly flex-wrap gap-[24px] sm:p-10 p-5">
        <BooksList book={books} />
      </div>
    </>
  );
};

export default Header;
