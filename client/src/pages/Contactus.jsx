import React from 'react'
import bannerBG from '../assets/contactUSBannerBG.png'
import '../App.css'
import '../CSS/ContactUS.css'
import mail from "../assets/mail_marker_black.png"
import phone from "../assets/phone_marker_black.png"
import address from "../assets/address_marker_black.png"
import lin from '../assets/contact-in-icon.png'
import yt from '../assets/contact-yt-icon.png'
import ins from '../assets/contact-ins-icon.png'

const Contactus = () => {
    return (
        <>
            <div className='w-screen'>
                <div id='contactUSBanner' className=' flex flex-col gap-[51px] w-full h-[95vh] mb-[30rem] '>
                    <p className='contactUSbannertitle text-white text-[4rem] leading-19 ml-48 pt-[90px]'>Contact SVB Infra Projects — Your <br /> Partner for Reliable <span className='text-[#FDC000]'>Construction <br /> Solutions</span> </p>
                    <div className='w-[69vw] h-[88vh] pl-[5rem] flex bg-white rounded-lg py-[120px] gap-[80px] pr-[48px] mx-auto'>
                        <div className='w-[30vw]    '>
                            <div className='flex flex-col gap-10'>
                                <p className='contactUSBannerInfoTitle font-semibold text-[2rem] text-[#333333]'>Get in touch</p>

                                <div className='flex flex-col gap-[26px]'>
                                    <div className='flex gap-7   w-[26vw] h-fit '>
                                        <img src={address} className="w-[1vw] h-[3vh] mt-3" />
                                        <p className='text-[#333333] popins-contact text-[1rem]'>#1851/A 2nd Cross 3rd Stage <br /> Prakashnagar  Bangalore 560021 <br /> Karnataka India.</p>
                                    </div>
                                    <div className='flex gap-7  place-items-center w-[26vw] h-fit'>
                                        <img src={phone} className="w-[1vw] h-[2vh]" />
                                        <p className='text-[#333333] popins-contact text-[1rem]'>9900641808 , 9980851508</p>
                                    </div>
                                    <div className='flex gap-7  place-items-center w-[26vw] h-fit'>
                                        <img src={mail} className="w-[1.2vw] h-[2vh] " />
                                        <p className='text-[#333333] popins-contact text-[1rem]'>info@svbinfraprojects.com</p>
                                    </div>
                                </div>
                                <div className='bg-[#333333]   h-px pr-[9rem]'></div>
                                <div className='flex gap-[20px]  mt-[40px]'>
                                    <p className='popins text-[#333333] text-[1rem]'>Follow for More</p>
                                    <div className='flex gap-[12px]  place-items-center'>
                                        <img src={lin} className='w-[1vw] h-[2vh]' alt="" />
                                        <img src={yt} className='w-[1vw] h-[2vh]' alt="" />
                                        <img src={ins} className='w-[1vw] h-[2vh]' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' pl-[20px]'>
                            <p className='contactUSBannerInfoTitle text-[#333333] font-semibold text-[2rem] mb-[50px]'>Send us a message</p>
                            <form action="" className='w-[39vw]  flex flex-col'>
                                <div className='flex flex-wrap gap-5'>
                                    <input type="text" placeholder='Name' className='px-4 w-[13vw] h-[7vh] border rounded-md' />
                                    <input type="email" placeholder='Email' className='px-4 w-[13vw] h-[7vh] border rounded-md' />
                                    <input type="tel" placeholder='Phone' className='px-4 w-[13vw] h-[7vh] border rounded-md' />
                                    <input type="text" placeholder='Address' className='px-4 w-[13vw] h-[7vh] border rounded-md' />
                                </div>
                                <textarea className='w-[27.2vw] h-[14vh] p-3 rounded-md mt-5 border' placeholder='Message' name="" id=""></textarea>
                                <div className=' w-[27.2vw] flex justify-end mt-[33px]'>

                                    <button className='contactUSBannerFormButton font-semibold texy-[#333333] w-[9vw] h-[6vh] rounded-md bg-[#FDC000] '>Send Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus