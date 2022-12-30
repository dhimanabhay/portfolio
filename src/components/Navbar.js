import "./Navbar.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {

    const [click, set_click] = useState(false);
    const handle_click = () => set_click(!click);

    const [color, setcolor] = useState(false);
    const changeColor = () =>{
      if (window.screenY >= 100)
      {
        setcolor = true;
      }
      else
      {
        setcolor = false;
      }
    };
    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/"> <h1>Portfolio</h1></Link>
      <ul className={click ? "navbar-menu active" : "navbar-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/learn">Learn</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="menu-burger" onClick={handle_click}>
        {click ? ( <FaTimes size={20} style={{color: "#fff"}}/>) : (<FaBars size={20} style={{color: "#fff"}}/>)}
      </div>
    </div>
  );
};

export default Navbar;
