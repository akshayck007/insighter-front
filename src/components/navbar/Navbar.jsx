import React, { useState } from "react";
import "./navbar.scss";
import { FaSearch, FaCog, FaBell, FaFilter } from "react-icons/fa";
import logo from "../../imgs/logo.png";
import propic from "../../imgs/propic.jpg";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftbar">
        <div className="logo">
          <img src={logo} alt="" />
          <h2 className="text">Insighter</h2>
        </div>

        <div className="searchbar">
          <FaSearch className="icon searchIcon" />
          <input type="text" />
        </div>
      </div>
      <div className="rightbar">
        <div className="profile">
          <div className="dp">
            <img src={propic} alt="" />
            <div className="notifications">
              <FaBell className="icon" />
              <span className="count">1</span>
            </div>
            <div className="nightMode">
              <BsFillMoonStarsFill />
            </div>
          </div>
          <FaCog className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
