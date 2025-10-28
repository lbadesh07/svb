import React from 'react'
import LandingBanner from './LandingBanner'
import '../CSS/Fleet.css'
import f1 from "../assets/fleetCardIMG1.png";
import f2 from "../assets/fleetCardIMG2.png";
import f3 from "../assets/fleetCardIMG3.png";
import f4 from "../assets/fleetCardIMG4.png";
import f5 from "../assets/fleetCardIMG5.png";
import f6 from "../assets/fleetCardIMG6.png";
import f7 from "../assets/fleetCardIMG7.png";
import f8 from "../assets/fleetCardIMG8.png";
const Fleet = () => {

    let cardDetails = [
        { img: f1, title: "30 Ton Excavator With Breaker", desc: "Powerful breaker for breaking rocks and concrete efficiently." },
        { img: f2, title: "20 Ton Excavator With Breaker", desc: "Heavy-duty breaker delivering strength and accuracy on-site." },
        { img: f3, title: "14 & 16Cum Dumper Heavy-Duty Vehicle", desc: "Heavy-duty dumpers built for large-scale construction projects." },
        { img: f4, title: "Worlds largest Hydraulic splitter", desc: "Precision and power combined for large-scale rock breaking." },
        { img: f5, title: "363 HP Diamond Rope Cutter", desc: "High-power diamond rope cutter for precise and efficient cutting." },
        { img: f6, title: "LD4 Bore Driller Industrial Work Rig", desc: "High-precision bore drilling rig for efficient soil and rock operations." },
        { img: f7, title: "Industrial Tractor Air Machine", desc: "Powerful compressor delivering efficiency and durability on-site." },
        { img: f8, title: "120 KVA Generator Power Supply Unit", desc: "Powerful and dependable energy solution for large-scale operations." }
    ]

    return (
        <>
            <div>
                <LandingBanner></LandingBanner>
                <section>
                    <div className='flex flex-col gap-2 w-fit mx-40 my-30'>
                        <p className='text-[#333333] text-[1.6rem]  font-semibold underline decoration-[#FDC000] underline-offset-8 mb-6'>Our Powerfull Machines</p>
                        <div>
                            <p className='popins-bold text-[4rem] leading-[69px]'>Power, Precision, and <br /> Performance - <span className='text-[#FCD000]'>All in One Fleet.</span> </p>
                            <p className='text-[#333333] text-[1rem]'>A fleet engineered for strength, accuracy, and unmatched efficiency.</p>
                        </div>
                    </div>
                    <div className=' flex gap-x-15 gap-y-10 w-[80vw] flex-wrap  mx-auto mb-20'>
                        {
                          cardDetails.map((item) => (
                                <div className='w-[24vw] h-[53vh]  flex flex-col gap-2 px-4 py-4 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                                    <img src={item.img} className="w-[22vw] h-[30vh]" />
                                    <p className=' text-[#333333] text-[1.7rem] font-semibold leading-8'>{item.title}</p>
                                    <p className='mt-5'>{item.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default Fleet