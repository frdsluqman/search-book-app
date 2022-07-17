import React, { useState } from "react";
import ShowModal from "./ShowModal";

const BooksList = ({ book }) => {
  const [showModal, setShowModal] = useState(false)
  const [bookItem, setBookItem] = useState()
  console.log(book);
  return (
    <>
      {book.map((item, key) => (
        <>
        <div
          key={key}
          className="flex flex-col bg-[#17252a] p-2 mx-auto my-0 w-[200px] text-[#feffff] rounded-lg hover:scale-90 transition duration-300 ease-in-out cursor-pointer"
          onClick={() => {setShowModal(true); setBookItem(item)}}
        >
          <img
            src={
              item.volumeInfo.imageLinks &&
              item.volumeInfo.imageLinks.smallThumbnail
            }
            alt="books"
            width="100%"
            className="h-64 inset-0 object-cover rounded-lg"
          />
          <span className="font-poppins text-md mt-2 font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
            {item.volumeInfo.title}
          </span>
          <span className="font-poppins text-sm text-ellipsis overflow-hidden whitespace-nowrap">
            Author: {item.volumeInfo.authors}
          </span>
          <span className="font-poppins text-sm text-ellipsis overflow-hidden whitespace-nowrap">
            Publish: {item.volumeInfo.publishedDate}
          </span>
        </div>
        {showModal ? (<ShowModal showModal={setShowModal} item={bookItem} />) : null}
        </>
      ))}
    </>
  );
};

export default BooksList;
