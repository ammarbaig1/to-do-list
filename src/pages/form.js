import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRePass] = useState("");

  const handleSubmit = () => {
    const validName = document.getElementById("validName");
    const validEmail = document.getElementById("validEmail");
    const specialChr = email.includes("@");

    const validPass = document.getElementById("validPass");

    if (pass !== repass) {
      validPass.classList.remove("hidden");
    }
    if (validName) {
      if (name === "" || isNaN(name)) {
        validName.classList.add("hidden");
      } else {
        validName.classList.remove("hidden");
      }
    }
    if (validEmail) {
      if (email === "" || specialChr) {
        validEmail.classList.add("hidden");
      } else {
        validEmail.classList.remove("hidden");
      }
    }
  };

  // const validPass = document.getElementById("validPass");

  // if (pass !== repass) {
  //   validPass.classList.remove("hidden");
  // }

  const handlePass = (e) => {
    const Pass = e.target.value;
    setPass(Pass);
  };

  const handleRePass = (e) => {
    const RePass = e.target.value;
    setRePass(RePass);
  };

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(typeof name);
  };
  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  return (
    <>
      <div>
        <h1 className="text-gray-800 text-4xl font-bold text-center my-10">
          Form Submit{" "}
        </h1>
      </div>
      <div className=" w-[40%] m-auto mt-10">
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            className="mt-4 w-full p-2 border-2 border-gray-500 rounded-lg"
            value={name}
            placeholder="Enter Your name"
            onChange={handleChange}
          />
          <span id="validName" className="hidden text-red-500">
            Enter valid name
          </span>
          <input
            className="mt-4 w-full p-2 border-2 border-gray-500 rounded-lg"
            type="text"
            placeholder="Your Email"
            onChange={handleChangeEmail}
          />
          <span id="validEmail" className="hidden text-red-500">
            Enter valid email address
          </span>
          <input
            className="mt-4 w-full p-2 border-2 border-gray-500 rounded-lg"
            type="password"
            placeholder="Password"
            onChange={handlePass}
          />
          <input
            className="mt-4 w-full p-2 border-2 border-gray-500 rounded-lg"
            type="password"
            placeholder="Re-Enter Password"
            onChange={handleRePass}
          />
          <span id="validPass" className="hidden text-red-500">
            Password don't match{" "}
          </span>
          <button
            type="submit"
            className="p-2 rounded-lg bg-blue-800 w-full text-center text-white mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
