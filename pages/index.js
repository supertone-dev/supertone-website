import React, { useState, useRef } from "react";
import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css"; // import necessary Typeform CSS

export default function Home() {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const typeformContainer = useRef();

  const onClick = () => {
    if (typeformContainer.current) {
      setFormIsOpen(true);
      createWidget("J9yCtDyT", { container: typeformContainer.current });
    }
  };

  return (
    <>
      <div className={`flex flex-col w-screen ${formIsOpen ? "hidden" : ""}`}>
        <header className="w-full h-16 flex justify-center items-center">
          <div className="w-3/4 flex justify-between items-center">
            <div className="text-4xl font-futuraBold font-bold">Supertone</div>
            {/* <button className="bg-gray-800 rounded-md h-9 text-white px-4 text-center align-middle">
            Get early access
          </button> */}
          </div>
        </header>
        <main className="h-full w-full flex flex-col justify-center items-center">
          <div className="w-1/2 text-center">
            <p className="text-6xl font-minion font-bold text-gray-900 my-4">
              Easily organize and access all your samples.
            </p>
            <p className="text-xl text-gray-700 my-4">
              Supertone is tool for digital musicians. Quickly tag, search, and
              access all your samples through a single interface.
            </p>
          </div>
          <button
            onClick={onClick}
            className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 text-white rounded-md px-4 py-2 my-5"
          >
            Get early access
          </button>
          <div className="flex">
            <img src="/samples.png" width="400px" className="rounded-md" />
            <img src="/tags.png" width="400px" className="rounded-md" />
          </div>
        </main>
      </div>
      <div
        className={`absolute top-0 left-0 w-screen h-screen ${
          formIsOpen ? "" : "hidden"
        }`}
        ref={typeformContainer}
      ></div>
    </>
  );
}
