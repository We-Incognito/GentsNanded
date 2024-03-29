import React from "react";
import Header from "./Components/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Mens from "./Pages/Mens.jsx";
import About from "./Components/About.jsx";
import Kids from "./Pages/Kids.jsx";
import Login from "./Pages/SignIn.jsx";

const App = () => {
  const currRoute = window.location.pathname;
  return (
    <div className="App">
      {currRoute === "/" || currRoute === "/signup" ? <></> : <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {currRoute === "/" || currRoute === "/signup" ? <></> : <Footer />}
    </div>
  );
};

export default App;
