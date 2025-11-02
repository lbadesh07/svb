import React from 'react'
import '../CSS/HSE.css'
import ic1 from '../assets/ESECardIMG1.png'
import ic2 from '../assets/ESECardIMG2.png'
import ic3 from '../assets/ESECardIMG3.png'
import ic4 from '../assets/ESECardIMG4.png'
import { Link } from "react-router-dom";

const ESE = () => {
    return (
        <>
            <div>
                <div className='flex flex-col gap-7 lg:gap-10 mt-[70px] lg:mt-[120px] mt-[40px] mx-[20px]  lg:ml-[119px]'>
                    <p className='text-[14px] lg:text-[2rem] underline decoration-[#FDC000] underline-offset-8 fontMon font-semibold text-[#333333]'>Excavation Soil / Earth</p>
                    <div className='flex flex-col gap-2 lg:gap-4'>
                        <p className='lg:text-[4rem] text-[1.4rem] text-[#333333] fontMon font-bold'> <span className='text-[#FDC000]'>Earth & Soil</span> Excavation Services</p>
                        <p className='popins text-[14px] lg:text-[20px] text-[#333333]'>Excavation is the first step of construction, preparing the site and <br /> foundations for a safe and successful project.</p>
                    </div>
                </div>
                <div className=' w-full flex flex-col px-2 lg:px-0  gap-[27px] my-21 lg:gap-[2.5rem]  place-items-center'>
                    <div className=' mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-10 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-7 lg:gap-[19px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div className='lg:w-[45%]'>
                            <img src={ic1} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[50vh]" />
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[20px]  lg:w-[55%]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Deep Excavation & Transportation</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[1.3rem] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[1.3rem] '>
                                <li className='HSEUL'>Removal of large soil volumes for basements, and utilities.</li>
                                <li className='HSEUL'>Uses excavators, trucks & loaders for efficient excavation.</li>
                                <li className='HSEUL'>Ensures slope stability and site safety during operations.</li>
                                <li className='HSEUL'>Transports excavated material to approved disposal or reuse sites.</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-10 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col md:flex-row-reverse gap-7 lg:gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div className='lg:w-[45%]'>
                            <img src={ic2} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[50vh]" />
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[20px] lg:w-[55%]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Land Leveling & Compaction</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[20px] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[1.3rem] '>
                                <li className='HSEUL'>Grading uneven surfaces to achieve the desired elevation and slope for construction.</li>
                                <li className='HSEUL'>Ensures proper water drainage and soil uniformity across the project area.</li>
                                <li className='HSEUL'>Uses rollers, graders, and compactors to achieve required soil density.</li>
                                <li className='HSEUL'>Critical for preventing settlement and ensuring long term stability of structures.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-10 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-7 lg:gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div className='lg:w-[45%]'>
                            <img src={ic3} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[50vh]" />
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[20px] lg:w-[55%]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Controlled Earth Filling</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[1.3rem] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[1.3rem] '>
                                <li className='HSEUL'>Process of backfilling excavated areas with approved soil or aggregates.</li>
                                <li className='HSEUL'>Involves layer-wise filling and compaction to achieve design levels.</li>
                                <li className='HSEUL'>Used to raise site levels, fill trenches, or strengthen subgrade conditions.</li>
                                <li className='HSEUL'>Materials used include murram, sand, or suitable excavated soil depending on project specs.</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-10 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col md:flex-row-reverse gap-7 lg:gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div className='lg:w-[45%]'>
                            <img src={ic4} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[50vh]" />
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[20px] lg:w-[55%]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Building Demolition Works</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[1.3rem] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[1.3rem] '>
                                <li className='HSEUL'>Safe dismantling of existing structures to prepare sites for new developments.</li>
                                <li className='HSEUL'>Utilizes hydraulic breakers, excavators, or controlled demolition techniques.</li>
                                <li className='HSEUL'>Includes debris sorting, segregation, and disposal as per environmental norms.</li>
                                <li className='HSEUL'>Focuses on minimizing dust, noise, and vibration impact on surrounding areas.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ESE