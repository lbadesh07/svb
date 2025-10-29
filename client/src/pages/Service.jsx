import React from 'react'
import s1 from '../assets/serviceCardIMG1.png'
import s2 from '../assets/serviceCardIMG2.png'
import s3 from '../assets/serviceCardIMG3.png'
import s4 from '../assets/serviceCardIMG4.png'
import LandingBanner from './LandingBanner'
import '../CSS/Service.css'
import '../CSS/About.css'

const Service = () => {
    return (
        <>
            <div className='w-screen'>
                {/* <LandingBanner></LandingBanner> */}
                <div id='serviceBanner' className='w-screen h-[95vh]'>
                    <div className='pt-[120px] ml-[120px] '>
                        <p className='text-white text-[4rem]  aboutCom leading-19'> Your Trusted Partner for <br /> Every Construction <br /> <span className='text-[#FDC000]'>Machine You Need</span> </p>
                        <p className='popins text-[20px] text-white mt-[18px]'>Delivering top-quality machinery and equipment to ensure every project runs smoothly, <br /> safely, and efficiently.</p>
                    </div>
                </div>
                <div className=' w-fit flex flex-col gap-5 mx-auto -mt-[150px] pb-20'>
                    <p className='font-semibold text-white text-[1.4rem] underline decoration-[#FDC000] underline-offset-8 pl-3'>Our Services</p>
                    <div className='flex gap-3'>
                        <img src={s1} className="w-[18vw] h-[47vh]" />
                        <img src={s2} className="w-[18vw] h-[47vh]" />
                        <img src={s3} className="w-[18vw] h-[47vh]" />
                        <img src={s4} className="w-[18vw] h-[47vh]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service