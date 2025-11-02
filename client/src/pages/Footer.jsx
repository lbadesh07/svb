import React from 'react'
import logo from "../assets/SVB_Logo.png"
import '../CSS/Landing.css'
import mail from "../assets/mail_marker.png"
import phone from "../assets/phone_marker.png"
import address from "../assets/address_marker.png"
import lin from '../assets/linkedin-marker.png'
import yt from '../assets/youtube-marker.png'
import ins from '../assets/intsa-marker.png'
import bg from '../assets/footerBG.jpeg'
import '../CSS/Footer.css'
import { useState,useEffect } from 'react'

const Footer = () => {
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
            <div id='footer' className=' h-full lg:h-[80vh] w-screen mt-[6.3rem]'>
                <div className=' lg:h-[65%] flex flex-col lg:flex-row justify-evenly pt-10 lg:pt-20 gap-10 lg:gap-40'>
                    <div className='flex flex-col gap-7'>
                        <img src={logo} className="w-[20vw] h-[7vh] lg:w-[9vw] lg:h-[9vh] mx-auto lg:mx-0" />
                        <p className=' popins text-white text-center lg:text-[0.8rem] lg:text-start'>At SVB Infra Projects, we are a trusted <br /> provider of comprehensive infrastructure <br /> solutions, specializing in construction, <br /> earthmoving, land development, and <br /> project execution. </p>
                    </div>
                    <div className='flex flex-col gap-5 lg:gap-8 w-fit mx-auto lg:mx-0 place-items-center lg:place-items-start'>
                        <p className='text-white text-[1rem] lg:text-[1.4rem] popins font-semibold underline decoration-[#FDC000] underline-offset-8'>Quick Links</p>
                        <ul className='flex lg:flex-col gap-5 lg:gap-4 text-white decoration-0'>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Our Fleet</li>
                            <li>Portfolio</li>
                            <li>HSE</li>
                        </ul>
                    </div>
                    {isMobile?<div></div>: <div className='flex flex-col gap-8'>
                        <p className='text-white text-[1rem] lg:text-[1.4rem] popins font-semibold underline decoration-[#FDC000] underline-offset-8'>Get in Touch</p>
                        <div className='flex lg:flex-col  lg:gap-4'>
                            <div className='flex lg:gap-3  place-items-center'>
                                <img src={address} className=" w-[3vw] h-[2vh] lg:w-[2vw] lg:h-[4vh]" />
                                <p className='text-white popins text-[8px] lg:text-[0.7rem]'>#1851/A 2nd Cross 3rd Stage Prakashnagar <br /> Bangalore 560021 Karnataka India.</p>
                            </div>
                            <div className='flex lg:gap-3  place-items-center'>
                                <img src={phone} className="w-[3vw] h-[2vh] lg:w-[2vw] lg:h-[4vh]" />
                                <p className='text-white popins text-[8px] lg:text-[0.7rem]'>9900641808 , 9980851508</p>
                            </div>
                            <div className='flex lg:gap-3  place-items-center'>
                                <img src={mail} className="w-[3vw] h-[2vh] lg:w-[2vw] lg:h-[4vh]" />
                                <p className='text-white popins text-[8px] lg:text-[0.7rem]'>info@svbinfraprojects.com</p>
                            </div>
                        </div>
                    </div>}
                   
                </div>
                <hr className='border-none h-[2px] bg-white opacity-50 mx-33' />
                <div className=' lg:h-[35%] flex flex-col gap-4 place-items-center justify-center'>
                    <div className='flex gap-2 mt-5 lg:mt-0'>
                        <img src={lin} className='h-[3vh] lg:h-[4vh]' alt="" />
                        <img src={yt} className='h-[3vh] lg:h-[4vh]' alt="" />
                        <img src={ins} className='h-[3vh] lg:h-[4vh]' alt="" />
                    </div>
                    <p className='text-white popins text-[1rem] mb-4 lg:mb-0'>Copyright 2018 SVB Infra Projects. All right reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer