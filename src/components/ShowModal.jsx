import React from "react";

const ShowModal = ({ showModal, item }) => {
  return (
    <>
      <div className="justify-center flex items-center bg-black fixed inset-0 z-50 outline-none focus:outline-none py-10 h-screen overflow-auto">
        <div className="w-auto my-6 mx-auto max-w-5xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none my-6">
            <div className="relative p-6 font-poppins">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                  <img
                    src={
                      item.volumeInfo.imageLinks &&
                      item.volumeInfo.imageLinks.smallThumbnail
                    }
                    alt=""
                    className="h-[250px]"
                    width="200px"
                  />
                  <div className="ml-5 flex flex-col">
                    <h1 className="text-3xl font-medium">
                      {item.volumeInfo.title}
                    </h1>
                    <h3 className="text-lg text-green-500">
                      {item.volumeInfo.authors}
                    </h3>
                    <h4 className="text-lg text-blue-500">
                    {item.volumeInfo.publisher}
                    </h4>
                    <h4 className="text-lg text-blue-500">
                    {item.volumeInfo.publishedDate}
                    </h4>
                    <div className="my-4">
                    <a href={item.volumeInfo.infoLink} target="_blank" rel="noreferrer" className="hover:bg-green-500 hover:text-white transition duration-300 ease-in-out font-medium border-2 border-green-500 py-2 px-4 rounded-lg">More</a>
                    </div>
                  </div>
                </div>
                <div className="float-right">
                  <span
                    className="ml-36 bg-red-500 py-1 px-2 rounded-md cursor-pointer"
                    onClick={() => showModal(false)}
                  >
                    X
                  </span>
                </div>
              </div>
              <div className="overflow-scroll">
                <h4 className="text-xs py-2 text-justify">
                  {item.volumeInfo.description}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowModal;
