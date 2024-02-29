import React from "react";

const login = () => {
  const getUserID = () => {
    const input = document.getElementById("input").value;
    console.log(input);
    clearInputField();
  };

  const clearInputField = () => {
    const input = (document.getElementById("input").value = "");
  };

  return (
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
            />
            <button
              onClick={getUserID}
              class="p-4 text-center bg-blue-500 w-full mt-8 text-white"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
