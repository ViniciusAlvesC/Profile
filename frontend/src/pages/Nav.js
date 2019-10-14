import React from "react";
import "./Nav.css";
import logo from "../assets/logodefm.svg"

const Nav = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar">
        <img src={logo} alt="" className="logo"/>
          <nav>
            <ul className="nav_items">
              <li>
                <a href="/">Repositories</a>
              </li>
              <li>
                <a href="/">Design</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
