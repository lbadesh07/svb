import React from 'react'
import s1 from '../assets/serviceCardIMG1.png'
import s2 from '../assets/serviceCardIMG2.png'
import s3 from '../assets/serviceCardIMG3.png'
import s4 from '../assets/serviceCardIMG4.png'
import LandingBanner from './LandingBanner'

const Service = () => {
    return (
        <>
            <div className='w-screen'>
                <LandingBanner></LandingBanner>
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