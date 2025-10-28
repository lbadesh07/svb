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
import LandingBanner from './LandingBanner'

const Footer = () => {
    return (
        <>
            <div id='footer' className=' h-[80vh] w-screen '>
                <div className=' h-[65%] flex justify-evenly pt-20 gap-40'>
                    <div className='flex flex-col gap-7'>
                        <img src={logo} className="w-[9vw] h-[9vh]" />
                        <p className=' popins text-white text-[0.8rem] '>At SVB Infra Projects, we are a trusted <br /> provider of comprehensive infrastructure <br /> solutions, specializing in construction, <br /> earthmoving, land development, and <br /> project execution. </p>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <p className='text-white text-[1.4rem] popins font-semibold underline decoration-[#FDC000] underline-offset-8'>Quick Links</p>
                        <ul className='flex flex-col gap-4 text-white decoration-0'>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Our Fleet</li>
                            <li>Portfolio</li>
                            <li>HSE</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <p className='text-white text-[1.4rem] popins font-semibold underline decoration-[#FDC000] underline-offset-8'>Get in Touch</p>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-3  place-items-center'>
                                <img src={address} className="w-[2vw] h-[4vh]" />
                                <p className='text-white popins text-[0.7rem]'>#1851/A 2nd Cross 3rd Stage Prakashnagar <br /> Bangalore 560021 Karnataka India.</p>
                            </div>
                            <div className='flex gap-3  place-items-center'>
                                <img src={phone} className="w-[2vw] h-[4vh]" />
                                <p className='text-white popins text-[0.7rem]'>9900641808 , 9980851508</p>
                            </div>
                            <div className='flex gap-3  place-items-center'>
                                <img src={mail} className="w-[2vw] h-[4vh]" />
                                <p className='text-white popins text-[0.7rem]'>info@svbinfraprojects.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-none h-[2px] bg-white opacity-50 mx-33' />
                <div className=' h-[35%] flex flex-col gap-4 place-items-center justify-center'>
                    <div className='flex gap-2'>
                        <img src={lin} alt="" />
                        <img src={yt} alt="" />
                        <img src={ins} alt="" />
                    </div>
                    <p className='text-white popins text-[1rem]'>Copyright 2018 SVB Infra Projects. All right reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer