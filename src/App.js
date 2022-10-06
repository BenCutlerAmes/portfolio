import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./containers/AboutMe";
import Home from "./containers/Home";
import "./index.css";
function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={<AboutMe />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
