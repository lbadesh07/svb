import React from "react";
import svbLogo from "../assets/SVB_Logo.png";
import "../App.css";
import "../CSS/Menu.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Menu = () => {

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 740) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize(); // Run once when mounted
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className=" bg-[#333333] w-screen flex px-5 justify-between h-[9vh] lg:h-[13vh] place-items-center lg:px-24">
        <div className="">
          <Link to="/">
            <img src={svbLogo} className="w-[15vw] h-[5vh] lg:w-[8vw] lg:h-[8vh]" />
          </Link>
        </div>
        {
          isMobile ? <i class="fa-solid fa-bars text-[21px] text-white"></i> :
            <>

              <nav
                id="menuNav"
                className=" flex  gap-7 h-fit  text-white z-[999]"
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
            </>
        }
      </div>
    </>
  );
};

export default Menu;
