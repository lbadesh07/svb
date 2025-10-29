import React from 'react'
import '../CSS/About.css'
import bgIMG from '../assets/aboutCompanyIMG.png'
import LandingBanner from './LandingBanner'
import icon1 from '../assets/aboutCardIcon1.png'
import machineIMG from '../assets/aboutMachineImg.png'


const AboutPage = () => {
    return (
        <>
            <div>
                <div id='aboutBanner' className='w-screen h-[95vh]'>
                    <div className='pl-[120px] pt-[150px]'> 
                    <p className='text-white text-[4rem]  aboutCom leading-19'> <span className='text-[#FDC000]'>SVB Infra</span> <br /> Building the Future with <br /> Experience and Excellence</p>
                    <p className='popins text-[20px] text-white mt-[18px]'>Providing fast, flexible, and professional earthmoving services statewide since 2003</p>
                    <button className='mt-[40px] w-[9vw] h-[7vh] bg-[#FDC000] text-[#333333] popins-noweight font-semibold text-[20px] rounded-lg '>Contact Us</button>
                    </div>
                </div>
                <div className='mx-auto w-fit flex flex-col gap-10 mt-[120px]'>
                    <p className='text-black popins text-[1.4rem] font-semibold underline decoration-[#FDC000] underline-offset-8'>About our company</p>
                    <div className='flex gap-7'>
                        <img src={bgIMG} className="w-[32vw] h-[59vh]" />
                        <div className='flex flex-col h-[59vh] gap-7'>
                            <p className='popins-bold text-[3rem] leading-14'>Excellence, <br /> <span className='text-[#FDC000]'>Expertise,</span>  Efficiency</p>
                            <p className=" text-[#4D4D4D] w-[32vw] text-[1rem]   ">
                                <span className="font-semibold mr-1">SVB Infra Projects</span>
                                is a 3rd generation family-run business. SVB has <br /> been managing
                                earthmoving projects since 2003. Based in <br /> Bangalore, we provide
                                a fast, flexible, reliable and professional <br /> service statewide.
                                We offer contract earthmoving services across <br /> the state
                                providing a professional and reliable service to the main <br /> and
                                sub contract civil engineering sector.
                            </p>
                            <div className='flex gap-14  place-items-center mx-5  mt-5'>
                                <div className='flex flex-col place-items-center '>
                                    <p className=' text-[2rem] popins-bold'>10+</p>
                                    <p className='popins text-[#4D4D4D] text-[0.9rem]'>Clients</p>
                                </div>
                                <div className='h-[6vh] bg-black w-0.5'></div>
                                <div className='flex flex-col place-items-center '>
                                    <p className=' text-[2rem] popins-bold'>20+</p>
                                    <p className='popins text-[#4D4D4D] text-[0.9rem]'>Successful project</p>
                                </div>
                                <div className='h-[6vh] bg-black w-0.5'></div>
                                <div className='flex flex-col place-items-center '>
                                    <p className=' text-[2rem] popins-bold'>50+</p>
                                    <p className='popins text-[#4D4D4D] text-[0.9rem]'>Machines & Equipments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-10 w-fit my-40  '>
                    <p className='text-black popins text-[1.4rem] font-semibold underline decoration-[#FDC000] underline-offset-8 pl-[162px] my-10'>Why Choose Us</p>
                    <div className='flex relative  mx-45'>
                        <div className=' flex flex-col gap-30'>

                            <div>
                                <div id='aboutCom' className='flex flex-col gap-5'>
                                    <p className='text-[4rem] text-[#333333]  leading-16 aboutCom'>Discover why we are <br /> the preferred choice <br /> for <span className='text-[#FDC000]'>infrastructure <br /> solutions.</span> </p>
                                    <p className='text-[#4D4D4D] text-[0.9rem] aboutCom'>SVB Infra Projects delivers reliable, efficient, and high quality <br /> infrastructure solutions.</p>
                                    <button className='  w-[9vw] bg-[#FDC000] text-[#333333]  py-2 rounded-md aboutCom'>Contact Now</button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-7'>
                                <div className='flex gap-10'>
                                    <div className='border-2 border-[#FDC000] w-[23vw] h-[30vh] rounded-xl py-6 pl-5 flex flex-col gap-4'>
                                        <img src={icon1} className="w-[4vw] h-[7vh]" />
                                        <div className='flex flex-col gap-2'>
                                            <p className='popins font-semibold text-[1.7rem]'>Modern Equipment</p>
                                            <p className='text-[#4D4D4D] text-[1rem]'>Advanced equipment for every <br /> project need</p>
                                        </div>
                                    </div>
                                    <div className='border-2 border-[#FDC000] w-[23vw] h-[30vh] rounded-xl py-6 pl-5 flex flex-col gap-4'>
                                        <img src={icon1} className="w-[4vw] h-[7vh]" />
                                        <div className='flex flex-col gap-2'>
                                            <p className='popins font-semibold text-[1.7rem]'>Modern Equipment</p>
                                            <p className='text-[#4D4D4D] text-[1rem]'>Advanced equipment for every <br /> project need</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-14'>
                                    <div className='border-2 border-[#FDC000] w-[23vw] h-[30vh] rounded-xl py-6 pl-5 flex flex-col gap-4'>
                                        <img src={icon1} className="w-[4vw] h-[7vh]" />
                                        <div className='flex flex-col gap-2'>
                                            <p className='popins font-semibold text-[1.7rem]'>Modern Equipment</p>
                                            <p className='text-[#4D4D4D] text-[1rem]'>Advanced equipment for every <br /> project need</p>
                                        </div>
                                    </div>
                                    <div className='border-2 border-[#FDC000] w-[23vw] h-[30vh] rounded-xl py-6 pl-5 flex flex-col gap-4'>
                                        <img src={icon1} className="w-[4vw] h-[7vh]" />
                                        <div className='flex flex-col gap-2'>
                                            <p className='popins font-semibold text-[1.7rem]'>Modern Equipment</p>
                                            <p className='text-[#4D4D4D] text-[1rem]'>Advanced equipment for every <br /> project need</p>
                                        </div>
                                    </div>
                                    <div className='border-2 border-[#FDC000] w-[23vw] h-[30vh] rounded-xl py-6 pl-5 flex flex-col gap-4'>
                                        <img src={icon1} className="w-[4vw] h-[7vh]" />
                                        <div className='flex flex-col gap-2'>
                                            <p className='popins font-semibold text-[1.7rem]'>Modern Equipment</p>
                                            <p className='text-[#4D4D4D] text-[1rem]'>Advanced equipment for every <br /> project need</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit absolute -right-20 -top-32 '>
                            <img src={machineIMG} className="  w-[38vw] h-[98vh] rotate-1 " />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage