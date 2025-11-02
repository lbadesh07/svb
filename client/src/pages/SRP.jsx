import React from 'react'
import '../CSS/HSE.css'
import ic1 from '../assets/SRPCardIMG1.png'
import ic2 from '../assets/SRPCardIMG2.png'
import ic3 from '../assets/SRPCardIMG3.png'
import ic4 from '../assets/SRPCardIMG4.png'
import ic5 from '../assets/SRPCardIMG5.png'
import ic6 from '../assets/SRPCardIMG6.png'
import ic7 from '../assets/SRPCardIMG7.png'
import ic8 from '../assets/SRPCardIMG8.png'


const SRP = () => {
    return (
        <>
            <div>
                <div className='flex flex-col gap-7 lg:gap-10 mt-[70px] lg:mt-[120px] mt-[40px] mx-[20px]  lg:ml-[119px]'>
                    <p className='text-[14px] lg:text-[2rem] underline decoration-[#FDC000] underline-offset-8 fontMon font-semibold text-[#333333]'>Soil Retention System</p>
                    <div className='flex flex-col gap-2 lg:gap-4'>
                        <p className='lg:text-[4rem] text-[1.4rem] text-[#333333] fontMon font-bold'> <span className='text-[#FDC000]'>Soil Retention & Stabilization</span><br /> Services</p>
                        <p className='popins text-[14px] lg:text-[20px] text-[#333333]'>Soil retention ensures slope stability and structural support by strengthening soil, <br /> preventing collapse, and maintaining long-term safety for construction sites.</p>
                    </div>
                </div>
                <div className=' w-full flex flex-col px-2 lg:px-0  gap-[27px] my-21 lg:gap-[2.5rem]  place-items-center'>
                    <div className=' mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-10 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-7 lg:gap-[19px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div className='lg:w-[45%]'>
                            <img src={ic1} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[50vh]" />
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[20px]  lg:w-[55%]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Micro Piling</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[1.3rem] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[1.3rem] '>
                                <li className='HSEUL'>Small-diameter piles used to strengthen existing foundations or weak soils.</li>
                                <li className='HSEUL'>Can be installed in confined areas with minimal vibration.</li>
                                <li className='HSEUL'>Common in retrofitting and slope stabilization projects.</li>
                                <li className='HSEUL'>Transfers load to deeper, more stable soil layers.</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-10 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col md:flex-row-reverse gap-7 lg:gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div className='lg:w-[45%]'>
                            <img src={ic2} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[50vh]" />
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[20px] lg:w-[55%]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Sheet Piling</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[20px] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[1.3rem] '>
                                <li className='HSEUL'>Uses interlocking steel, vinyl, or concrete sheets driven into the ground to form retaining walls.</li>
                                <li className='HSEUL'>Prevents soil collapse in deep excavations or waterfronts.</li>
                                <li className='HSEUL'>Reusable and provides temporary or permanent soil support.</li>
                                <li className='HSEUL'>Quick installation suitable for tight construction timelines.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-10 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-7 lg:gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div className='lg:w-[45%]'>
                            <img src={ic3} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[50vh]" />
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[20px] lg:w-[55%]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>RCC Piling</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[1.3rem] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[1.3rem] '>
                                <li className='HSEUL'>Reinforced concrete piles driven or bored into the ground for load-bearing support.</li>
                                <li className='HSEUL'>Transfers heavy structural loads to deep stable strata.</li>
                                <li className='HSEUL'>Ensures minimal settlement and increased foundation stability.</li>
                                <li className='HSEUL'>Widely used in bridges, towers, and industrial foundation projects.</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-10 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col md:flex-row-reverse gap-7 lg:gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div className='lg:w-[45%]'>
                            <img src={ic4} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[50vh]" />
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[20px] lg:w-[55%]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Soil Nailing</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[1.3rem] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[1.3rem] '>
                                <li className='HSEUL'>Reinforces soil slopes by inserting steel bars (nails) into pre-drilled holes.</li>
                                <li className='HSEUL'>Stabilizes excavations and prevents landslides or soil movement.</li>
                                <li className='HSEUL'>Cost-effective and suitable for both temporary and permanent applications.</li>
                                <li className='HSEUL'>Combined with shotcrete for added surface strength.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-10 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-7 lg:gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div className='lg:w-[45%]'>
                            <img src={ic5} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[50vh]" />
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[20px] lg:w-[55%]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Short Creating</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[1.3rem] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[1.3rem] '>
                                <li className='HSEUL'>Spraying of concrete mix onto soil or rock surfaces under high pressure.</li>
                                <li className='HSEUL'>Provides an instant protective and stabilizing layer.</li>
                                <li className='HSEUL'>Used along with soil nailing for retaining structures.</li>
                                <li className='HSEUL'>Increases the durability of excavation faces.</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-10 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col md:flex-row-reverse gap-7 lg:gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div className='lg:w-[45%]'>
                            <img src={ic6} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[50vh]" />
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[20px] lg:w-[55%]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Grouting</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[1.3rem] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[1.3rem] '>
                                <li className='HSEUL'>Injection of cementitious or chemical mixtures into soil or rock voids.</li>
                                <li className='HSEUL'>Increases density, strength, and reduces permeability.</li>
                                <li className='HSEUL'>Used to control groundwater seepage or stabilize weak zones.</li>
                                <li className='HSEUL'>Customizable depending on soil type and project requirements.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-10 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col lg:flex-row gap-7 lg:gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div className='lg:w-[45%]'>
                            <img src={ic7} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[50vh]" />
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[20px] lg:w-[55%]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>Weep Holes</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[1.3rem] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[1.3rem] '>
                                <li className='HSEUL'>Small openings provided in retaining walls to allow water drainage.</li>
                                <li className='HSEUL'>Simple yet essential for long-term soil retention performance.</li>
                                <li className='HSEUL'>Increases wall stability and longevity.</li>
                                <li className='HSEUL'>Prevents hydrostatic pressure buildup behind walls.</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' mx-2 md:mx-0 py-5 md:py-0 px-4 md:px-10 lg:w-[78vw] h-fit lg:h-[59vh] flex flex-col md:flex-row-reverse gap-7 lg:gap-[39px] rounded-lg justify-center place-items-center shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                        <div className='lg:w-[45%]'>
                            <img src={ic8} className="w-[85vw] h-[30vh] lg:w-[34vw] lg:h-[50vh]" />
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[20px] lg:w-[55%]'>
                            <p className='text-[#333333] text-[1.4rem] lg:text-[2rem] fontMon font-semibold '>PT & Rock Anchors</p>
                            <ul id='HSEUL' className='text-[#333333] popins text-[14px] lg:text-[1.3rem] pl-7 font-semibold flex flex-col gap-[12px] lg:gap-[1.3rem] '>
                                <li className='HSEUL'>Post-tensioned anchors used to stabilize deep excavations or rock faces.</li>
                                <li className='HSEUL'>Transfers load from retaining structures to stable rock or soil layers.</li>
                                <li className='HSEUL'>Allows adjustable tensioning for performance monitoring.</li>
                                <li className='HSEUL'>Common in tunnel portals, bridges, and high retaining walls.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SRP