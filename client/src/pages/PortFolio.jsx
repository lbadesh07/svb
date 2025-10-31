import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import reviewsIMG from '../assets/potfolioReviewIMG.png'
import c1 from "../assets/globalCard1.png"
import c2 from "../assets/globalCard2.png"
import c3 from "../assets/globalCard3.png"
import c4 from "../assets/globalCard4.png"
import c5 from "../assets/globalCard5.png"
import c6 from "../assets/globalCard6.png"
import c7 from "../assets/globalCard7.png"
import c8 from "../assets/globalCard8.png"
import c9 from "../assets/globalCard9.png"
import c10 from "../assets/globalCard10.png"
import g1 from "../assets/galleryIMG1.png";
import g2 from "../assets/galleryIMG2.png";
import g3 from "../assets/galleryIMG3.png";
import g4 from "../assets/galleryIMG4.png";
import g5 from "../assets/galleryIMG5.png";
import g6 from "../assets/galleryIMG6.png";
import g7 from "../assets/galleryIMG7.png";
import g8 from "../assets/galleryIMG8.png";
import g9 from "../assets/galleryIMG9.png";
import g10 from "../assets/galleryIMG10.png";
import g11 from "../assets/galleryIMG11.png";
import g12 from "../assets/galleryIMG12.png";
import g13 from "../assets/galleryIMG13.png";
import g14 from "../assets/galleryIMG14.png";
import g15 from "../assets/galleryIMG15.png";
import g16 from "../assets/galleryIMG16.png";
import g17 from "../assets/galleryIMG17.png";
import g18 from "../assets/galleryIMG18.png";
import g19 from "../assets/galleryIMG19.png";
import g20 from "../assets/galleryIMG20.png";



const PortFolio = () => {
    const galleryImages = [
        g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
        g11, g12, g13, g14, g15, g16, g17, g18, g19, g20
    ];
    const [isMobile, setIsMobile] = useState(false);

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
            <div className='flex flex-col gap-[13vh] my-20 bg-[#F8F8F8]'>
                <section className='flex flex-col gap-8 lg:gap-8 '>
                    <p className='lg:text-[2rem] text-[1.2rem] pl-[0.8rem] lg:pl-[130px] text-[#333333] font-semibold underline decoration-[#FDC000] underline-offset-8'>Portfolio</p>
                    <div className='flex flex-col lg:flex-row  lg:w-fit lg:gap-30 mx-4 lg:mx-auto'>
                        <div className='flex flex-col gap-3'>
                            {isMobile ? <p className='popins-bold leading-8  text-[1.7rem] text-[#333333] lg:leading-20'>Innovation That  Strengthens <span></span> <span className='text-[#FDC000]'>Infrastructure</span> </p> :
                                <p className='popins-bold  lg:text-[4.5rem] text-[#333333]  lg:leading-20'>Innovation That <br /> Strengthens <br /> <span className='text-[#FDC000]'>Infrastructure</span> </p>}
                            {isMobile ? <p className='text-[#333333] font-semibold'>Experience our proven track record through our diverse portfolio.</p> :
                                <p className='text-[#333333] font-semibold'>Experience our proven track record through our diverse <br /> portfolio.</p>}
                            <button className=" mt-3 lg:mt-5 w-[30%] lg:w-[8vw] bg-[#FDC000] text-[#333333] font-bold  py-1.5 lg:py-2 rounded-md">Contact Now</button>
                        </div>
                        <div className=' mt-12'>
                            <img src={reviewsIMG} className="lg:w-[37vw] lg:h-[57vh]" />
                        </div>
                    </div>

                </section>
                <section className="flex flex-col gap-12 overflow-hidden">
                    <p className="lg:text-[2rem] text-[1.2rem] pl-[2rem] lg:pl-[130px] text-[#333333] font-semibold underline decoration-[#FDC000] underline-offset-8">
                        Our Latest Projects
                    </p>

                    <div className="relative  w-[92vw] mx-auto lg:mx-0 lg:w-[92vw] lg:ml-[60px] lg:mr-[60px] overflow-hidden  rounded-xl flex gap-2 lg:gap-4 py-4">
                        {[
                            c1, c2, c3, c4, c5,
                            c6, c7, c8, c9, c10,
                            c1, c2, c3, c4, c5,
                            c6, c7, c8, c9, c10
                        ].map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Project ${index + 1}`}
                                className="w-[27vw] h-[20vh] lg:w-[18vw] lg:h-[47vh] lg:object-cover rounded-lg animate-cardScroll"
                            />
                        ))}
                    </div>
                </section>


                <section className=' flex flex-col gap-20'>
                    <p className='text-[#333333] text-[1.2rem] lg:text-[2rem] pl-[2rem] lg:pl-40 underline decoration-[#FDC000] underline-offset-8'>Gallery</p>
                    <div className='flex  w-fit mx-4 lg:mx-auto   lg:gap-80'>
                        <div className='flex  flex-col w-[65%] lg:w-fit gap-3'>
                            <p className=' text-[1.3rem] lg:text-[4.2rem] text-[#333333] popins-bold leading-7 lg:leading-20'>Our <span className='text-[#FDC000]'>Work,</span> <br />  Captured in Action</p>
                            <p className='text-[0.8rem] lg:text-[1rem] text-[#333333] font-semibold'>Explore our gallery to see SVB Infra Projects’ commitment to quality,<br className='hidden lg:block' /> precision, and trusted execution in every project we deliver.</p>
                        </div>
                        <div className='flex flex-col w-[45%] lg:w-fit  place-items-center'>
                            <p className='popins-bold text-[#FDC000] text-[1.3rem] lg:text-[4rem]'>50+</p>
                            <p className='text-[0.8rem] lg:text-[2rem] text-[#333333] popins-bold lg:leading-10'>Total number <br /> of machinery</p>
                        </div>
                    </div>
                    <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance] mx-5 lg:mx-30">
                        {galleryImages.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`Gallery ${i + 1}`}
                                loading="lazy"
                                className="w-full mb-4 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300 break-inside-avoid"
                            />
                        ))}
                    </div>

                </section>
            </div>
        </>
    )
}

export default PortFolio