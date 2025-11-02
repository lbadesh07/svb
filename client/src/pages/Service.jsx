import React from 'react'
import s1 from '../assets/serviceCardIMG1.png'
import s2 from '../assets/serviceCardIMG2.png'
import s3 from '../assets/serviceCardIMG3.png'
import s4 from '../assets/serviceCardIMG4.png'
import { Link } from "react-router-dom";
import '../CSS/Service.css'
import '../CSS/About.css'
import { useState, useEffect } from 'react'

const Service = () => {
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
            <div className='w-screen'>
                {/* <LandingBanner></LandingBanner> */}
                <div id='serviceBanner' className='w-screen h-[45vh] lg:h-[95vh] '>
                    <div className=' pt-[80px] ml-[30px] lg:pt-[120px] lg:ml-[120px] '>
                        <p className='text-white text-[1.5rem] lg:text-[4rem]  aboutCom leading-8 lg:leading-19'> Your Trusted Partner for <br /> Every Construction <br /> <span className='text-[#FDC000]'>Machine You Need</span> </p>
                        {isMobile ? <p className='popins text-[10px] lg:text-[20px] text-white mt-[18px]'>Delivering top-quality machinery and equipment  <br /> to ensure every project runs smoothly, <br /> safely, and efficiently.</p> :
                            <p className='popins text-[10px] lg:text-[20px] text-white mt-[18px]'>Delivering top-quality machinery and equipment to ensure every project runs smoothly, <br /> safely, and efficiently.</p>}
                    </div>
                </div>
                <div className=' w-fit flex flex-col gap-6 lg:gap-5 mx-auto -mt-[100px] lg:-mt-[150px] pb-20'>
                    <p className='font-semibold text-white text-[1rem] lg:text-[1.4rem] underline decoration-[#FDC000] underline-offset-8 pl-3'>Our Services</p>
                    <div className='flex lg:gap-3'>
                        <Link to='/ese'>

                            <img src={s1} className="w-[24vw] h-[14vh] lg:w-[18vw] lg:h-[47vh]" />
                        </Link>
                        <Link to='/rep'>

                            <img src={s2} className="w-[24vw] h-[14vh] lg:w-[18vw] lg:h-[47vh]" />
                        </Link>
                        <Link to='/ds'>

                            <img src={s3} className="w-[24vw] h-[14vh] lg:w-[18vw] lg:h-[47vh]" />
                        </Link>
                        <Link to='/srp'>

                            <img src={s4} className="w-[24vw] h-[14vh] lg:w-[18vw] lg:h-[47vh]" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service