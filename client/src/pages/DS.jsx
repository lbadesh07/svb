import React from 'react'
import '../CSS/HSE.css'
import ic1 from '../assets/DSCardIMG1.png'
import ic2 from '../assets/DSCardIMG2.png'
import ic3 from '../assets/DSCardIMG3.png'


const DS = () => {
    return (
        <>
            <div>
                <div className='flex flex-col gap-7 lg:gap-10 mt-[70px] lg:mt-[120px] mt-[40px] mx-[20px]  lg:ml-[119px]'>
                    <p className='text-[14px] lg:text-[2rem] underline decoration-[#FDC000] underline-offset-8 fontMon font-semibold text-[#333333]'>Reliable Dewatering System</p>
                    <div className='flex flex-col gap-2 lg:gap-4'>
                        <p className='lg:text-[4rem] text-[1.4rem] text-[#333333] fontMon font-bold'> <span className='text-[#FDC000]'>Dewatering & Groundwater </span> <br /> Control Services</p>
                        <p className='popins text-[14px] lg:text-[20px] text-[#333333]'>Dewatering involves controlled removal of groundwater to maintain dry and safe <br /> excavation sites, protecting foundations and ensuring smooth construction operations.</p>
                    </div>
                </div>
                <div className=' w-full flex flex-col px-2 lg:px-0  gap-[27px] my-21 lg:gap-[2.5rem]  place-items-center'>
                    <div className=' mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-10 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-7 lg:gap-[19px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div className='lg:w-[45%]'>
                            <img src={ic1} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[50vh]" />
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[20px]  lg:w-[55%]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Well Point System</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[1.3rem] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[1.3rem] '>
                                <li className='HSEUL'>Series of shallow wells connected to a vacuum pump to remove groundwater.</li>
                                <li className='HSEUL'>Used for controlling water levels during shallow excavations.</li>
                                <li className='HSEUL'>Enables dry working conditions and prevents soil instability.</li>
                                <li className='HSEUL'>Quick setup and suitable for sandy or loose soils.</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-10 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col md:flex-row-reverse gap-7 lg:gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div className='lg:w-[45%]'>
                            <img src={ic2} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[50vh]" />
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[20px] lg:w-[55%]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Deep Well System</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[20px] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[1.3rem] '>
                                <li className='HSEUL'>Involves installation of deep wells with submersible pumps for high water table areas.</li>
                                <li className='HSEUL'>Handles large volumes of groundwater efficiently.</li>
                                <li className='HSEUL'>Used in basement, shaft, or deep foundation works.</li>
                                <li className='HSEUL'>Ensures long-term dewatering for complex excavation sites.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-10 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-7 lg:gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div className='lg:w-[45%]'>
                            <img src={ic3} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[50vh]" />
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[20px] lg:w-[55%]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Automated Dewatering System</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[1.3rem] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[1.3rem] '>
                                <li className='HSEUL'>Uses smart sensors and automated pumps for efficient groundwater management.</li>
                                <li className='HSEUL'>Reduces manpower and ensures real-time water level monitoring.</li>
                                <li className='HSEUL'>Energy-efficient and adaptable for varying site conditions.</li>
                                <li className='HSEUL'>Provides consistent control to maintain dry and safe excavation zones.</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default DS