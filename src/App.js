import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/form";
import FormTwo from "./pages/formTwo";
import Usehooks from "./pages/Usehooks";

import { Login, Context } from "./pages/login";

function App() {
  const userId = localStorage.getItem("id");
  // console.log("app.js", userId);
  return (
    <>
      <Context.Provider value={userId}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/form" element={<Form />} />
            <Route exact path="/form-two" element={<FormTwo />} />
            <Route exact path="/use-hooks" element={<Usehooks />} />
          </Routes>
        </Router>
      </Context.Provider>
    </>
  );
}

export default App;
