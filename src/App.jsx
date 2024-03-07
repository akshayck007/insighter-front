import React from "react";
import "./styles/global.scss";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import { FaFilter } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="homeContainer">
          <Home />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
