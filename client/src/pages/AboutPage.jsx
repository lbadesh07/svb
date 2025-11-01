import React from 'react'
import '../CSS/About.css'
import bgIMG from '../assets/aboutCompanyIMG.png'
import LandingBanner from './LandingBanner'
import icon1 from '../assets/aboutCardIcon1.png'
import machineIMG from '../assets/aboutMachineImg.png'
import { useState, useEffect } from 'react'


const AboutPage = () => {
    const[isMobile, setIsMobile] = useState(false);

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
            <div>
                <div id='aboutBanner' className='w-screen h-[45vh] lg:h-[95vh]'>
                    <div className='pl-[30px] pt-[100px] lg:pl-[120px] lg:pt-[150px]'>
                        <p className='text-white text-[1.7rem] lg:text-[4rem]  aboutCom leading-8 lg:leading-19'> <span className='text-[#FDC000]'>SVB Infra</span> <br /> Building the Future with <br /> Experience and Excellence</p>
                        <p className='popins text-[10px] lg:text-[20px] text-white mt-[18px]'>Providing fast, flexible, and professional earthmoving services statewide since 2003</p>
                        <button className='lg:mt-[40px] mt-[20px] w-[21vw] h-[3.2vh] text-[12px] lg:w-[9vw] lg:h-[7vh] bg-[#FDC000] text-[#333333] popins-noweight font-semibold lg:text-[20px] rounded-sm lg:rounded-lg '>Contact Us</button>
                    </div>
                </div>
                <div className='lg:mx-auto w-fit flex flex-col gap-10 mt-[50px] lg:mt-[120px] mx-2'>
                    <p className='text-black popins text-[1rem] lg:text-[1.4rem] font-semibold underline decoration-[#FDC000] underline-offset-8'>About our company</p>
                    <div className='flex gap-4 lg:gap-7'>
                        <img src={bgIMG} className="w-[45vw] h-[20vh] lg:w-[32vw] lg:h-[59vh]" />
                        <div className='flex flex-col  lg:h-[59vh] gap-3 lg:gap-7 relative'>
                            <p className='popins-bold text-[1.3rem] leading-7 lg:text-[3rem] lg:leading-14'>Excellence, <br /> <span className='text-[#FDC000]'>Expertise,</span>  Efficiency</p>
                            {isMobile ? <p className=" text-[#4D4D4D]  w-[49vw]  text-[10px]    ">
                                <span className="font-semibold mr-1">SVB Infra Projects</span>
                                is a 3rd generation family-run business. SVB has  been managing
                                earthmoving projects since 2003. Based in  Bangalore, we provide
                                a fast, flexible, reliable and professional  service statewide.
                                We offer contract earthmoving services across the state
                                providing a professional and reliable service to the main  and
                                sub contract civil engineering sector.
                            </p> :
                                <p className=" text-[#4D4D4D]   lg:w-[32vw] lg:text-[1rem]   ">
                                    <span className="font-semibold mr-1">SVB Infra Projects</span>
                                    is a 3rd generation family-run business. SVB has <br /> been managing
                                    earthmoving projects since 2003. Based in <br /> Bangalore, we provide
                                    a fast, flexible, reliable and professional <br /> service statewide.
                                    We offer contract earthmoving services across <br /> the state
                                    providing a professional and reliable service to the main <br /> and
                                    sub contract civil engineering sector.
                                </p>
                            }
                            <div className='flex  absolute lg:relative gap-7 lg:gap-14 lg:-left-0 -left-[180px] top-[230px] lg:top-0  place-items-center lg:mx-5  lg:mt-5'>
                                <div className='flex flex-col place-items-center '>
                                    <p className='text-[1.5rem] lg:text-[2rem] popins-bold'>10+</p>
                                    <p className='popins text-[#4D4D4D] text-[10px] lg:text-[0.9rem]'>Clients</p>
                                </div>
                                <div className='h-[4vh] lg:h-[6vh] bg-black w-[1px] lg:w-0.5'></div>
                                <div className='flex flex-col place-items-center '>
                                    <p className='text-[1.5rem] lg:text-[2rem] popins-bold'>20+</p>
                                    <p className='popins text-[#4D4D4D] text-[10px] lg:text-[0.9rem]'>Successful project</p>
                                </div>
                                <div className=' h-[4vh] lg:h-[6vh] bg-black w-[1px] lg:w-0.5'></div>
                                <div className='flex flex-col place-items-center '>
                                    <p className=' text-[1.5rem] lg:text-[2rem] popins-bold'>50+</p>
                                    <p className='popins text-[#4D4D4D] text-[10px] lg:text-[0.9rem]'>Machines & Equipments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-10 w-fit my-40  '>
                    <p className='text-black popins text-[1rem] lg:text-[1.4rem] font-semibold underline decoration-[#FDC000] underline-offset-8 pl-[30px] lg:pl-[162px] my-10'>Why Choose Us</p>
                    <div className='flex relative  mx-2 lg:mx-45'>
                        <div className=' flex flex-col gap-15 lg:gap-30'>

                            <div>
                                <div id='aboutCom' className=' flex flex-col gap-3 lg:gap-5'>
                                    <p className='lg:text-[4rem] text-[1.3rem] text-[#333333] leading-7  lg:leading-16 aboutCom'>Discover why we are <br /> the preferred choice <br /> for <span className='text-[#FDC000]'>infrastructure <br /> solutions.</span> </p>
                                    {isMobile? <p className='text-[#4D4D4D] text-[12px]  aboutCom'>SVB Infra Projects delivers reliable,<br /> efficient, and high quality <br />  infrastructure  solutions.</p>:
                                    <p className='text-[#4D4D4D]  text-[0.9rem] aboutCom'>SVB Infra Projects delivers reliable, efficient, and high quality <br /> infrastructure solutions.</p>}
                                    <button className=' w-[22vw] text-[12px] lg:text-[1rem] py-2  lg:w-[9vw] bg-[#FDC000] text-[#333333]  lg:py-2 rounded-md aboutCom'>Contact Now</button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 lg:gap-7'>
                                <div className='flex gap-2 lg:gap-14'>
                                    <div className='border lg:border-2 border-[#FDC000] lg:w-[23vw] w-[30vw] h-[10vh] lg:h-[30vh] rounded-lg lg:rounded-xl py-3 lg:py-6 pl-3 lg:pl-5 flex flex-col gap-2 lg:gap-4'>
                                        <img src={icon1} className="w-[4vw] h-[2vh] lg:w-[4vw] lg:h-[7vh]" />
                                        <div className='flex flex-col gap-1 lg:gap-2'>
                                            <p className='popins font-semibold text-[0.6rem] lg:text-[1.7rem]'>Modern Equipment</p>
                                            <p className='text-[#4D4D4D] text-[7px] lg:text-[1rem]'>Advanced equipment for every <br /> project need</p>
                                        </div>
                                    </div>
                                    <div className='border lg:border-2 border-[#FDC000] lg:w-[23vw] w-[30vw] h-[10vh] lg:h-[30vh] rounded-lg lg:rounded-xl py-3 lg:py-6 pl-3 lg:pl-5 flex flex-col gap-2 lg:gap-4'>
                                        <img src={icon1} className="w-[4vw] h-[2vh] lg:w-[4vw] lg:h-[7vh]" />
                                        <div className='flex flex-col gap-1 lg:gap-2'>
                                            <p className='popins font-semibold text-[0.6rem] lg:text-[1.7rem]'>Modern Equipment</p>
                                            <p className='text-[#4D4D4D] text-[7px] lg:text-[1rem]'>Advanced equipment for every <br /> project need</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-2 lg:gap-14'>
                                    <div className='border lg:border-2 border-[#FDC000] lg:w-[23vw] w-[30vw] h-[10vh] lg:h-[30vh] rounded-lg lg:rounded-xl py-3 lg:py-6 pl-3 lg:pl-5 flex flex-col gap-2 lg:gap-4'>
                                        <img src={icon1} className="w-[4vw] h-[2vh] lg:w-[4vw] lg:h-[7vh]" />
                                        <div className='flex flex-col gap-1 lg:gap-2'>
                                            <p className='popins font-semibold text-[0.6rem] lg:text-[1.7rem]'>Modern Equipment</p>
                                            <p className='text-[#4D4D4D] text-[7px] lg:text-[1rem]'>Advanced equipment for every <br /> project need</p>
                                        </div>
                                    </div>
                                    <div className='border lg:border-2 border-[#FDC000] lg:w-[23vw] w-[30vw] h-[10vh] lg:h-[30vh] rounded-lg lg:rounded-xl py-3 lg:py-6 pl-3 lg:pl-5 flex flex-col gap-2 lg:gap-4'>
                                        <img src={icon1} className="w-[4vw] h-[2vh] lg:w-[4vw] lg:h-[7vh]" />
                                        <div className='flex flex-col gap-1 lg:gap-2'>
                                            <p className='popins font-semibold text-[0.6rem] lg:text-[1.7rem]'>Modern Equipment</p>
                                            <p className='text-[#4D4D4D] text-[7px] lg:text-[1rem]'>Advanced equipment for every <br /> project need</p>
                                        </div>
                                    </div>
                                    <div className='border lg:border-2 border-[#FDC000] lg:w-[23vw] w-[30vw] h-[10vh] lg:h-[30vh] rounded-lg lg:rounded-xl py-3 lg:py-6 pl-3 lg:pl-5 flex flex-col gap-2 lg:gap-4'>
                                        <img src={icon1} className="w-[4vw] h-[2vh] lg:w-[4vw] lg:h-[7vh]" />
                                        <div className='flex flex-col gap-1 lg:gap-2'>
                                            <p className='popins font-semibold text-[0.6rem] lg:text-[1.7rem]'>Modern Equipment</p>
                                            <p className='text-[#4D4D4D] text-[7px] lg:text-[1rem]'>Advanced equipment for every <br /> project need</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit absolute left-65 lg:left-auto lg:-right-20 -top-18 lg:-top-32 '>
                            <img src={machineIMG} className=" w-[58vw] h-[40vh]  lg:w-[38vw] lg:h-[98vh] rotate-1 " />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage