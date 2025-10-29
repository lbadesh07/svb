import React from "react";
import svbLogo from "../assets/SVB_Logo.png";
import "../App.css";
import "../CSS/Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className=" bg-[#333333] w-screen flex justify-between h-[13vh] place-items-center px-24">
        <div className="">
          <Link to="/">
          <img src={svbLogo} className="w-[8vw] h-[8vh]" />
          </Link>
        </div>
        <nav
          id="menuNav"
          className=" flex  gap-7 h-fit text-white z-[999]"
        >
          <li className="menuNavLinks"><Link to='/about'>About Us</Link> </li>
          <li className="menuNavLinks"><Link to='/services'>Service</Link></li>
          <li className="menuNavLinks"><Link to='/fleet'>Our Fleet</Link></li>
          <li className="menuNavLinks"><Link to='/portfolio'>Portfolio</Link></li>
          <li className="menuNavLinks"><Link to='/hse'>HSE</Link></li>
        </nav>
        <button className="menuButton w-[9vw] h-[6vh] bg-[#FDC000] text-black text-[1rem] rounded-[9px]">
          <Link to='/contact'>Contact Us</Link>
          
        </button>
      </div>
    </>
  );
};

export default Menu;
