import React from 'react'
import '../CSS/HSE.css'
import '../App.css'
import c1 from '../assets/hseCard1.png'
import c2 from '../assets/hseCard2.png'
import c3 from '../assets/hseCard3.png'
import c4 from '../assets/hseCard4.png'
import ic1 from '../assets/infoCardIMG1.png'
import ic2 from '../assets/infoCardIMG2.png'
import ic3 from '../assets/infoCardIMG3.png'
import ic4 from '../assets/infoCardIMG4.png'



const HSE = () => {
    return (
        <>
            <div className='bg-[F8F8F8]'>
                <div className='h-[45vh] lg:h-[95vh] w-screen  ' id='hseBanner' >
                    <div className='lg:pl-[135px] pl-[20px] flex flex-col gap-[20px] lg:gap-[12px] pt-[80px] lg:pt-[195px]'>
                        <p className='hseBannerTitle text-[1.4rem] leading-6 lg:text-[4rem] text-[#FDC000] lg:leading-20'>Health, Safety & Environmental <br /> <span className='text-white'>Practices</span> </p>
                        <p className='hseBannerDesc text-white text-[14px] lg:text-[20px]'>Delivering infrastructure that’s safe,<br className='lg:hidden' /> responsible,  and built for the <br className='hidden lg:block' /> future.</p>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden -mt-20">
                    <div className="flex animate-scroll gap-[2px] lg:gap-[24px] mx-auto w-fit">
                        <img src={c1} className="w-[145vw] h-[24vh] lg:w-[18vw] lg:h-[47vh]" />
                        <img src={c2} className="w-[415vw] h-[24vh] lg:w-[18vw] lg:h-[47vh]" />
                        <img src={c3} className="w-[451vw] h-[24vh] lg:w-[18vw] lg:h-[47vh]" />
                        <img src={c4} className="w-[415vw] h-[24vh] lg:w-[18vw] lg:h-[47vh]" />
                        <img src={c1} className="w-[415vw] h-[24vh] lg:w-[18vw] lg:h-[47vh]" />
                        <img src={c2} className="w-[415vw] h-[24vh] lg:w-[18vw] lg:h-[47vh]" />
                        <img src={c3} className="w-[415vw] h-[24vh] lg:w-[18vw] lg:h-[47vh]" />
                        <img src={c4} className="w-[415vw] h-[24vh] lg:w-[18vw] lg:h-[47vh]" />
                    </div>
                </div>

                <div className='flex flex-col gap-7 lg:gap-10 mt-[70px] lg:mt-[120px] mt-[40px] mx-[20px] lg:mx-[200px]'>
                    <p className='text-[14px] lg:text-[2rem] underline decoration-[#FDC000] underline-offset-8 fontMon font-semibold text-[#333333]'>Our Commitment to HSE</p>
                    <div className='flex flex-col gap-2 lg:gap-4'>
                        <p className='lg:text-[4rem] text-[1.4rem] text-[#333333] fontMon font-bold'>Your Safety, <span className='text-[#FDC000]'>Our</span>  Priority.</p>
                        <p className='popins text-[14px] lg:text-[20px] text-[#333333]'>At SVB Infra Projects, health, safety, and environmental protection are at the core of everything we do.</p>
                    </div>
                </div>
                <div className=' w-full flex flex-col place-items-center gap-[27px] my-14 lg:gap-[39px] lg:my-[81px]'>
                    <div className='mx-2 md:mx-0 py-3 md:py-0 px-4 md:px-0 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-5 lg:gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div>
                            <img src={ic1} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[51vh]" />
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Commitment to health & safety</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[20px] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[20px] '>
                                <li className='HSEUL'>Setting out of corner benchmarks</li>
                                <li className='HSEUL'>Surveying ground levels</li>
                                <li className='HSEUL'>Surveying top levels</li>
                                <li className='HSEUL'>Excavation to approved depth</li>
                                <li className='HSEUL'>Dressing of loose soil</li>
                                <li className='HSEUL'>Making up to cut-off level</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' mx-2 md:mx-0 py-3 md:py-0 px-4 md:px-0 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col md:flex-row-reverse gap-[12px] lg:gap-[20px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div>
                            <img src={ic1} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[51vh]" />
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Commitment to health & safety</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[20px] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[20px] '>
                                <li className='HSEUL'>Setting out of corner benchmarks</li>
                                <li className='HSEUL'>Surveying ground levels</li>
                                <li className='HSEUL'>Surveying top levels</li>
                                <li className='HSEUL'>Excavation to approved depth</li>
                                <li className='HSEUL'>Dressing of loose soil</li>
                                <li className='HSEUL'>Making up to cut-off level</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mx-2 md:mx-0 py-3 md:py-0 px-4 md:px-0 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-5 lg:gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div>
                            <img src={ic1} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[51vh]" />
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Commitment to health & safety</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[20px] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[20px] '>
                                <li className='HSEUL'>Setting out of corner benchmarks</li>
                                <li className='HSEUL'>Surveying ground levels</li>
                                <li className='HSEUL'>Surveying top levels</li>
                                <li className='HSEUL'>Excavation to approved depth</li>
                                <li className='HSEUL'>Dressing of loose soil</li>
                                <li className='HSEUL'>Making up to cut-off level</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' mx-2 md:mx-0 py-3 md:py-0 px-4 md:px-0 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col md:flex-row-reverse gap-[12px] lg:gap-[20px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div>
                            <img src={ic1} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[51vh]" />
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Commitment to health & safety</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[20px] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[20px] '>
                                <li className='HSEUL'>Setting out of corner benchmarks</li>
                                <li className='HSEUL'>Surveying ground levels</li>
                                <li className='HSEUL'>Surveying top levels</li>
                                <li className='HSEUL'>Excavation to approved depth</li>
                                <li className='HSEUL'>Dressing of loose soil</li>
                                <li className='HSEUL'>Making up to cut-off level</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HSE