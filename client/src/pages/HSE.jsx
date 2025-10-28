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
                <div className='h-[95vh] w-screen  ' id='hseBanner' >
                    <div className='pl-[135px] flex flex-col gap-[12px] pt-[195px]'>
                        <p className='hseBannerTitle text-[4rem] text-[#FDC000] leading-20'>Health, Safety & Environmental <br /> <span className='text-white'>Practices</span> </p>
                        <p className='hseBannerDesc text-white text-[20px]'>Delivering infrastructure that’s safe, responsible, and built for the <br /> future.</p>
                    </div>
                </div>
               
                <div className='flex  mx-auto w-fit gap-[24px] -mt-20 '>
                    <img src={c1} className="w-[18vw] h-[47vh]" />
                    <img src={c2} className="w-[18vw] h-[47vh]" />
                    <img src={c3} className="w-[18vw] h-[47vh]" />
                    <img src={c4} className="w-[18vw] h-[47vh]" />
                </div>
                <div className='flex flex-col gap-10 mt-[120px] mx-[200px]'>
                    <p className='text-[2rem] underline decoration-[#FDC000] underline-offset-8 fontMon font-semibold text-[#333333]'>Our Commitment to HSE</p>
                    <div className='flex flex-col gap-4'>
                        <p className='text-[4rem] text-[#333333] fontMon font-bold'>Your Safety, <span className='text-[#FDC000]'>Our</span>  Priority.</p>
                        <p className='popins text-[20px] text-[#333333]'>At SVB Infra Projects, health, safety, and environmental protection are at the core of everything we do.</p>
                    </div>
                </div>
                <div className=' w-full flex flex-col place-items-center gap-[39px] my-[81px]'>
                    <div className=' w-[78vw] h-[59vh] flex gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div>
                            <img src={ic1} className="w-[34vw] h-[51vh]" />
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <p className='text-[#333333] text-[2rem] fontMon font-semibold '>Commitment to health & safety</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[20px pl-7 font-semibold flex flex-col gap-[20px] '>
                                <li className='HSEUL'>Setting out of corner benchmarks</li>
                                <li className='HSEUL'>Surveying ground levels</li>
                                <li className='HSEUL'>Surveying top levels</li>
                                <li className='HSEUL'>Excavation to approved depth</li>
                                <li className='HSEUL'>Dressing of loose soil</li>
                                <li className='HSEUL'>Making up to cut-off level</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' w-[78vw] h-[59vh] flex flex-row-reverse gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div>
                            <img src={ic1} className="w-[34vw] h-[51vh]" />
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <p className='text-[#333333] text-[2rem] fontMon font-semibold '>Commitment to health & safety</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[20px pl-7 font-semibold flex flex-col gap-[20px] '>
                                <li className='HSEUL'>Setting out of corner benchmarks</li>
                                <li className='HSEUL'>Surveying ground levels</li>
                                <li className='HSEUL'>Surveying top levels</li>
                                <li className='HSEUL'>Excavation to approved depth</li>
                                <li className='HSEUL'>Dressing of loose soil</li>
                                <li className='HSEUL'>Making up to cut-off level</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' w-[78vw] h-[59vh] flex gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div>
                            <img src={ic1} className="w-[34vw] h-[51vh]" />
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <p className='text-[#333333] text-[2rem] fontMon font-semibold '>Commitment to health & safety</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[20px pl-7 font-semibold flex flex-col gap-[20px] '>
                                <li className='HSEUL'>Setting out of corner benchmarks</li>
                                <li className='HSEUL'>Surveying ground levels</li>
                                <li className='HSEUL'>Surveying top levels</li>
                                <li className='HSEUL'>Excavation to approved depth</li>
                                <li className='HSEUL'>Dressing of loose soil</li>
                                <li className='HSEUL'>Making up to cut-off level</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' w-[78vw] h-[59vh] flex  flex-row-reverse gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div>
                            <img src={ic1} className="w-[34vw] h-[51vh]" />
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <p className='text-[#333333] text-[2rem] fontMon font-semibold '>Commitment to health & safety</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[20px pl-7 font-semibold flex flex-col gap-[20px] '>
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