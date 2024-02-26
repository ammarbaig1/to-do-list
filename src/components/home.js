import React, { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [items, setItems] = useState([]);
  const input = document.getElementById("input");
  const [editValue, setEditValue] = useState([input]);

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

  const edit = (index) => {
    const Items = JSON.parse(localStorage.getItem("items"));
    const filt = Items.filter((element, i) => {
      return i === index;
    });
    const editItem = filt[0];
    console.log("editItem:", editItem);
    setEditValue(index);
    document.getElementById("input").value = editItem;
  };

  const save = () => {
    const editedValue = document.getElementById("input").value;
    const updatedItems = items.map((item, index) => {
      if (index === editValue) {
        return editedValue;
      }
      return item;
    });
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
    clearinputfield();
  };

  const del = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

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
        ></input>
        <div className="flex space-x-4">
          <button
            onClick={add}
            className="mt-4 w-20 bg-gray-800 rounded-xl p-3 text-white"
          >
            ADD
          </button>
          <button
            onClick={save}
            className="mt-4 w-20 bg-gray-800 rounded-xl p-3 text-white"
          >
            SAVE
          </button>
        </div>
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
            <button
              onClick={() => {
                edit(index);
              }}
              className="w-20 bg-gray-800 rounded-xl p-3 text-white"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
