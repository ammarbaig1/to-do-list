import React, { useEffect } from "react";
import { useState } from "react";

// const togglechange = () => {
//   const inputvalue = localStorage.getItem("inputvalue");
//   document.getElementById("entry").textContent = inputvalue;
//   clearinputfield();
// };

// const add = () => {
//   const input = document.getElementById("input").value;
//   localStorage.setItem("inputvalue", input);
//   togglechange();
// };

// const clearinputfield = () => {
//   document.getElementById("input").value = "";
// };

// const items = ["Item 1", "Item 2", "Item 3"];

const Home = () => {
  const [items, setItems] = useState([]);

  const add = () => {
    const input = document.getElementById("input").value;
    const newItems = [...items, input];
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
    clearinputfield();
  };

  const clearinputfield = () => {
    document.getElementById("input").value = "";
  };

  const del = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  useEffect(() => {
    const storeditems = JSON.parse(localStorage.getItem("items"));
    if (storeditems) {
      setItems(storeditems);
    }
  });

  return (
    <>
      <h1 className="text-gray-800 text-4xl font-bold text-center my-10">
        TO DO LIST
      </h1>
      <div className="my-4 flex flex-col px-8">
        <input
          id="input"
          className="w-full border-[1px] p-3 border-black"
          placeholder="Add Item"
          //   onchange={togglechange}
        ></input>
        <button
          onClick={add}
          className="mt-4 w-20 bg-gray-800 rounded-xl p-3 text-white"
        >
          ADD
        </button>
      </div>

      <div>
        {items.map((item, index) => (
          <div
            key={index}
            className="mt-4 mx-8 bg-gray-200 p-3 flex justify-between items-center"
          >
            <p className="w-[80%]">{item}</p>
            <button
              onClick={() => {
                del(index);
              }}
              className="w-20 bg-gray-800 rounded-xl p-3 text-white"
            >
              Delete
            </button>
            <button className="w-20 bg-gray-800 rounded-xl p-3 text-white">
              Edit
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
