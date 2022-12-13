import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Project from "./routes/Project";
import Learn from "./routes/Learn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
