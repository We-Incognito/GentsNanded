import React from "react";
import Header from "./Components/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Mens from "./Pages/Mens.jsx";
import About from "./Components/About.jsx";
import Kids from "./Pages/Kids.jsx";


const App = () => {
  return (
    <div className="App">
      <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/mens" element={<Mens/>} />
          <Route path="/kids" element={<Kids/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
    </div>
  );
};

export default App;
