import React from "react";
import { Link } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

const Context = createContext();
console.log("login.js", Context);

const Login = (props) => {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    const storedUserId = localStorage.getItem("id");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const getUserID = () => {
    const input = document.getElementById("input").value;
    setUserId(input);
    localStorage.setItem("id", input);
    clearInputField();
  };

  // const id = localStorage.getItem("id");
  // console.log("here is the value ", id);

  const clearInputField = () => {
    const input = (document.getElementById("input").value = "");
  };

  return (
    <Context.Provider value={userId}>
      {props.children}
      <div>
        <div>
          <h1 className="text-4xl text-gray-600 text-center p-8">ID Login</h1>
          <div class="w-[40%] h-[100vh] m-auto flex items-center justify-center">
            <div className="h-[50%] w-full ">
              <input
                id="input"
                className="p-4 border-gray-500 border-2 w-full"
                type="text"
                placeholder="Enter Your ID"
                onClick={getUserID}
              />
              <Link to="/home">
                <button
                  onClick={getUserID}
                  class="p-4 text-center bg-blue-500 w-full mt-8 text-white"
                >
                  Proceed
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export { Login, Context };
