import React from "react";
import svbLogo from "../assets/SVB_Logo.png";
import "../App.css";
import "../CSS/Menu.css";

const Menu = () => {
  return (
    <>
      <div className=" bg-[#333333] w-screen flex justify-between h-[13vh] place-items-center px-24">
        <div className="">
          <img src={svbLogo} className="w-[8vw] h-[8vh]" />
        </div>
        <nav
          id="menuNav"
          className=" flex text-(--main-color) gap-7 h-fit text-[1.25rem]"
        >
          <li className="menuNavLinks">About Us</li>
          <li className="menuNavLinks">Services</li>
          <li className="menuNavLinks">Our Fleet</li>
          <li className="menuNavLinks">Portfolio</li>
          <li className="menuNavLinks">HSE</li>
        </nav>
        <button className="menuButton w-[9vw] h-[6vh] bg-[#FDC000] text-black text-[1rem] rounded-[9px]">
          Contact Us
        </button>
      </div>
    </>
  );
};

export default Menu;
