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
                <div id='contactUSBanner' className=' flex  flex-col gap-[51px] w-full h-[45vh] lg:h-[95vh] mb-[30rem] '>
                    <p className='contactUSbannertitle text-white text-[1.2rem] lg:text-[4rem] leading-7 lg:leading-19 ml-12 lg:ml-48 pt-[40px] lg:pt-[90px] '>Contact SVB Infra Projects — Your <br /> Partner for Reliable <span className='text-[#FDC000]'>Construction <br /> Solutions</span> </p>
                    <div className='w-[88vw]  lg:w-[69vw] h-[100vh] lg:h-[88vh]  lg:pl-[5rem]   bg-white rounded-lg lg:py-[60px] lg:gap-[80px] lg:pr-[48px] mx-auto'>
                        <p className='contactUSBannerInfoTitle font-semibold text-[1.2rem] text-center lg:text-[2rem] text-[#333333] my-10 lg:my-0 lg:text-start lg:mb-14'>Get in touch</p>
                        <div className='flex flex-col-reverse lg:flex-row gap-[4rem]'>

                            <div className='lg:w-[30vw]   '>
                                <div className='flex flex-col gap-10 lg:gap-10'>

                                    <div className='flex flex-col gap-[20px]  lg:gap-[26px]'>
                                        <div className='flex gap-6  mx-auto lg:mx-0 lg:gap-7   w-[80vw] lg:w-[26vw] h-fit '>
                                            <img src={address} className="w-[3vw] h-[2.3vh] lg:w-[1vw] lg:h-[3vh] mt-3" />
                                            <p className='text-[#333333] popins-contact text-[0.9rem] lg:text-[1rem]'>#1851/A 2nd Cross 3rd Stage <br /> Prakashnagar  Bangalore 560021 <br /> Karnataka India.</p>
                                        </div>
                                        <div className='flex gap-6 mx-auto lg:mx-0 lg:gap-7 place-items-center w-[80vw] lg:w-[26vw] h-fit'>
                                            <img src={phone} className="w-[3vw] h-[2.3vh] lg:w-[1vw] lg:h-[3vh]" />
                                            <p className='text-[#333333] popins-contact text-[0.9rem] lg:text-[1rem]'>9900641808 , 9980851508</p>
                                        </div>
                                        <div className='flex gap-6 mx-auto lg:mx-0 lg:gap-7 place-items-center  w-[80vw] lg:w-[26vw] h-fit'>
                                            <img src={mail} className="w-[4vw] h-[1.7vh] lg:w-[1vw] lg:h-[3vh]" />
                                            <p className='text-[#333333] popins-contact text-[0.9rem] lg:text-[1rem]'>info@svbinfraprojects.com</p>
                                        </div>
                                    </div>
                                    <div className='bg-[#333333]   h-px pr-[9rem]'></div>
                                    <div className='flex gap-[20px]  lg:mt-[40px]'>
                                        <p className='popins text-[#333333] text-[1rem]'>Follow for More</p>
                                        <div className='flex gap-[12px]  place-items-center'>
                                            <img src={lin} className=' w-[5vw]  h-[2.6vh] lg:w-[1vw] lg:h-[2vh]' alt="" />
                                            <img src={yt} className='w-[5vw]  h-[2vh] lg:w-[1.1vw] lg:h-[2vh]' alt="" />
                                            <img src={ins} className='w-[5vw]  h-[2.6vh] lg:w-[1vw] lg:h-[2vh]' alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='   w-[90vw] lg:w-[30vw]  lg:px-0 pl-[12px]  lg:pl-[20px]'>
                                {/* <p className='contactUSBannerInfoTitle text-[#333333] font-semibold text-[2rem] mb-[50px]'>Send us a message</p> */}
                                <form action="" className='  w-full lg:w-[30vw]  flex flex-col'>
                                    <div className='flex flex-wrap   w-full gap-2 lg:gap-5'>
                                        <input type="text" placeholder='Name' className='px-3 lg:px-4 w-[40vw] h-[4vh] lg:w-[13vw] lg:h-[7vh] border rounded-md placeholder:text-sm lg:placeholder:text-base' />
                                        <input type="email" placeholder='Email' className='px-3 lg:px-4 w-[40vw] h-[4vh] lg:w-[13vw] lg:h-[7vh] border rounded-md placeholder:text-sm lg:placeholder:text-base' />
                                        <input type="tel" placeholder='Phone' className='px-3 lg:px-4 w-[40vw] h-[4vh] lg:w-[13vw] lg:h-[7vh] border rounded-md placeholder:text-sm lg:placeholder:text-base' />
                                        <input type="text" placeholder='Address' className='px-3 lg:px-4 w-[40vw] h-[4vh] lg:w-[13vw] lg:h-[7vh] border rounded-md placeholder:text-sm lg:placeholder:text-base' />
                                    </div>
                                    <textarea className='lg:w-[27.2vw] w-[82vw] lg:h-[14vh] p-3 rounded-md mt-5 border' placeholder='Message' name="" id=""></textarea>
                                    <div className=' w-full    lg:w-[27.2vw] flex justify-end mt-[33px]'>

                                        <button className='contactUSBannerFormButton font-semibold text-[#333333] w-[60vw] h-[4vh] lg:w-[9vw] lg:h-[6vh] rounded-md bg-[#FDC000] mx-auto lg:mx-0'>Send Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus