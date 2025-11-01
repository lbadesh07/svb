import React from "react";
import LandingBanner from "./LandingBanner";
import constructionImg from "../assets/cap.png";
import pillarImg from "../assets/pillarsOfTrustIMG.png"
import "../CSS/Landing.css"
import { useState, useEffect } from "react";
import fleet1 from "../assets/fleet-img1.png"
import fleet2 from "../assets/fleet-img2.png"
import Cards from "./Cards";
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

const Landing = () => {
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
    <div className="w-screen ">
      {/* <LandingBanner></LandingBanner> */}
      <div id="landingBanner" className="w-screen h-[45vh] lg:h-[88vh]">
        <div className="lg:pt-[120px] lg:pl-[110px] pl-[40px] pt-[60px]">

          <div className="flex flex-col  gap-[10px] lg:gap-[16px]">
            <p className="text-[1.8rem] lg:text-[4rem] text-white aboutCom font-bold leading-8 lg:leading-19">Building the Future with <br /> <span className="text-[#FDC000]">Strength & Precision</span> </p>
            {isMobile ? <p className="text-white w-[88%]  text-[1rem] lg:text-[20px] popins">Delivering reliable infrastructure solutions  with modern machinery  and  expert execution.</p> :
              <p className="text-white text-[1.3rem] popins">Delivering reliable infrastructure solutions with modern machinery <br /> and expert execution.</p>}
          </div>
          <button className="lg:w-[10vw] lg:h-[7vh]  rounded-md text-[14px] px-3 lg:px-0 lg:py-0 py-2 lg:py-0  bg-[#FDC000] lg:rounded-md lg:text-[20px] popins-noweight font-semibold mt-[2.5rem]">See Our Fleet</button>
        </div>
      </div>


      <div className="flex flex-col  gap-[10vh] lg:gap-[20vh] my-15 lg:my-30  w-screen">
        <div>
          <section className="flex  flex-row w-full mx-2 lg:mx-0 lg:justify-center  text-gray-800  ">

            <div className="">
              <img
                src={constructionImg}
                alt="Construction site"
                className="rounded-2xl shadow-lg w-[50vw] h-[32vh] lg:w-[40vw] lg:h-[84vh]"
              />
            </div>


            <div className="lg:w-[33vw] w-[50vw]  h-fit  flex flex-col ">
              <p className="fontMon lg:leading-16 text-[1.5rem] leading-7  lg:p-4 rounded-bl-2xl -ml-20 p-2 lg:-ml-56 bg-white  text-[#333333] lg:text-[4rem] font-semibold">
                Great Relationships,
                <br /> Great <span></span>
                <span className="text-[#FDC000]">Infrastructure</span>
              </p>
              <div className="flex flex-col place-items-end">
                <p className=" text-[#4D4D4D] popins lg:w-[32vw] text-[0.6rem] lg:text-[1.25rem] px-2 pt-2 lg:pl-5 lg:pt-10  ">
                  <span className="font-semibold lg:mr-1">SVB Infra Projects</span>
                  is a 3rd generation family-run business. SVB has been managing
                  earthmoving projects since 2003. Based in Bangalore, we provide
                  a fast, flexible, reliable and professional service statewide.
                  We offer contract earthmoving services across the state
                  providing a professional and reliable service to the main and
                  sub contract civil engineering sector. We have had over 15
                  years’ experience for total excavation solution. We work with
                  some of the biggest names in construction and civil engineering
                  sector.
                </p>
                <button
                  className="popins  w-[calc(19vw+0px)] lg:w-[calc(9vw+0px)] mr-3 text-[calc(0.8rem+0px)] lg:text-[calc(1.3rem+0px)] bg-[#FDC000] py-[calc(0.5rem+0px)] rounded-md
             ">Know More
                </button>
              </div>
            </div>
          </section>
          <div className="flex gap-5 my-6 mx-auto lg:mx-0  lg:my-10 pl-[4vw] lg:pl-[9vw]">
            <div className="border lg:border-2 border-[#FDC000] rounded-md flex lg:w-[12vw] w-[27vw] justify-evenly h-[5vh]   lg:h-[11vh] place-items-center">
              <p className="popins text-lg lg:text-3xl font-semibold ">50+</p>
              <p className="popins font-medium text-[9px] lg:text-[15px] text-[#4D4D4D]  text-start">Successfull <br /> Project</p>
            </div>
            <div className="border lg:border-2 border-[#FDC000] rounded-md flex lg:w-[12vw] w-[27vw] justify-evenly h-[5vh]   lg:h-[11vh] place-items-center">
              <p className="popins text-lg lg:text-3xl font-semibold ">100+</p>
              <p className="popins font-medium text-[9px] lg:text-[15px] text-[#4D4D4D]  text-start">Machines <br /> Equipments</p>
            </div>
            <div className="border lg:border-2 border-[#FDC000] rounded-md flex lg:w-[12vw] w-[27vw] justify-evenly h-[5vh] lg:h-[11vh] place-items-center">
              <p className="popins text-lg lg:text-3xl font-semibold ">27/7</p>
              <p className="popins font-medium text-[9px] lg:text-[15px] text-[#4D4D4D]  text-start">Anywhere <br /> Assistance</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-10  ">
          <p className="fontMon text-[1.2rem] lg:text-[1.9rem] lg:pl-[120px] pl-[1.9rem] font-semibold underline decoration-[#FDC000] underline-offset-8">Pillars of Trust</p>
          <img src={pillarImg} className="lg:w-[75vw] lg:h-[101vh] mx-4 lg:mx-auto " />
        </div>
        <div className=" w-full flex flex-col gap-15 lg:gap-10">
          <p className="fontMon pl-[1.9rem] lg:pl-[120px] lg:text-[1.9rem] text-[1.2rem]  font-semibold underline decoration-[#FDC000] underline-offset-8">Our Fleet</p>
          <div className=" flex flex-col lg:flex-row  lg:mx-30 gap-7 lg:gap-5 lg:my-5">
            <div className="flex flex-col w-screen place-items-center lg:place-items-start  lg:w-[40vw] gap-4 lg:py-10 lg:gap-5  ">
              <p className="fontMon bold leading-9 lg:leading-18  bg-white text-[#333333] text-[1.5rem] lg:text-[4rem] font-bold text-center lg:text-start">Force Behind <br /> Every <span className="text-[#FDC000]">Foundation</span></p>
              <p className="text-[#4D4D4D] text-[1rem] font-medium text-center lg:text-start ">Starting out with only one JCB 3D, we now keep a well- <br /> maintained fleet of trucks and equipment.</p>
              <button className="popins-noweight font-semibold w-[calc(24vw+0px)] lg:w-[calc(9vw+0px)] bg-[#FDC000] py-[calc(0.5rem+0px)] rounded-md text-[#333333]">
                Explore All
              </button>

            </div>
            <div id="cont-fleet-img" className="relative mx-auto lg:mx-0 flex w-[95vw] lg:w-[40vw] lg:h-[43vh] overflow-hidden">
              <div className="flex animate-fleet-scroll">
                {/* animate-fleet-scroll */}
                <img src={fleet1} className="lg:w-[18vw] lg:h-[43vh] w-[46vw] h-[20vh]" />
                <img src={fleet2} className="lg:w-[18vw] lg:h-[43vh] w-[46vw] h-[20vh]" />
                <img src={fleet1} className="lg:w-[18vw] lg:h-[43vh] w-[46vw] h-[20vh]" />
                <img src={fleet2} className="lg:w-[18vw] lg:h-[43vh] w-[46vw] h-[20vh]" />
                <img src={fleet1} className="lg:w-[18vw] lg:h-[43vh] w-[46vw] h-[20vh]" />
                <img src={fleet2} className="lg:w-[18vw] lg:h-[43vh] w-[46vw] h-[20vh]" />


                <img src={fleet1} className="lg:w-[18vw] lg:h-[43vh] w-[46vw] h-[20vh]" />
                <img src={fleet2} className="lg:w-[18vw] lg:h-[43vh] w-[46vw] h-[20vh]" />
                <img src={fleet1} className="lg:w-[18vw] lg:h-[43vh] w-[46vw] h-[20vh]" />
                <img src={fleet2} className="lg:w-[18vw] lg:h-[43vh] w-[46vw] h-[20vh]" />
                <img src={fleet1} className="lg:w-[18vw] lg:h-[43vh] w-[46vw] h-[20vh]" />
                <img src={fleet2} className="lg:w-[18vw] lg:h-[43vh] w-[46vw] h-[20vh]" />
              </div>
            </div>
          </div>
        </div>
        <div className=" px-2 lg:px-40 ">
          <div id="infrastructure" className=" flex flex-col gap-y-8 lg:gap-y-20 w-[96vw] lg:w-[80vw] h-[30vh] lg:h-[87vh] z-10">
            <div className="border border-white/30 rounded-3xl w-fit font-[Poppins] text-[0.6rem] lg:text-[1.1rem] px-2 py-1 lg:px-6 lg:py-2 mt-3 lg:mt-5 
                 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 ml-3 lg:ml-5">Our Latest Project</div>
            <div className="flex flex-col gap-2 ml-4  lg:gap-2 lg:ml-8">
              <p className="popins-bold text-[1rem] lg:text-[4rem] text-white lg:leading-18">Powering Your Future with <br /> Innovative Infrastructure <br /> Projects</p>
              <p className="text-white text-[0.8rem] lg:text-[1.3rem]">SVB Infra – Engineering the Future of Infrastructure</p>
            </div>
            <button className="lg:ml-8 ml-4 popins-noweight font-semibold text-[9px] lg:text-[17px]  lg:w-[10vw] w-[15vw] bg-[#FDC000] py-1  lg:py-3 rounded-sm lg:rounded-md   lg:mt-15">Explore All</button>
          </div>
          <div className=" flex w-full py-2 lg:py-6 relative ">
            {isMobile ? <p className="text-[#4D4D4D] w-[40vw]  popins  text-[8px] lg:text-[16px] lg:mt-5 font-semibold ">We have successfully completed a wide range of  earthwork and excavation projects for leading  clients across Karnataka. Our portfolio includes  residential, commercial, and infrastructure  developments delivered with quality and precision.</p> :
              <p className="text-[#4D4D4D] popins  text-[0.8rem] lg:text-[1rem] lg:mt-5 font-semibold ">We have successfully completed a wide range of <br /> earthwork and excavation projects for leading <br /> clients across Karnataka. Our portfolio includes <br /> residential, commercial, and infrastructure <br /> developments delivered with quality and precision.</p>}
            <div className="absolute  left-[42vw] lg:left-[39vw] -top-[11vw] lg:-top-[7vw] lg:w-[50vw] py-2 lg:py-4  overflow-hidden ">

              <div className="flex lg:gap-x-6 gap-x-2 animate-scroll">

                <img src={c1} alt="" className="w-[17vw] h-[10vh] lg:w-[18vw] lg:h-[47vh]" />
                <img src={c2} alt="" className="w-17vw] h-[10vh] lg:w-[18vw] lg:h-[47vh]" />
                <img src={c3} alt="" className="w-17vw] h-[10vh] lg:w-[18vw] lg:h-[47vh]" />
                <img src={c4} alt="" className="w-17vw] h-[10vh] lg:w-[18vw] lg:h-[47vh]" />
                <img src={c5} alt="" className="w-17vw] h-[10vh] lg:w-[18vw] lg:h-[47vh]" />
                <img src={c6} alt="" className="w-17vw] h-[10vh] lg:w-[18vw] lg:h-[47vh]" />
                <img src={c7} alt="" className="w-17vw] h-[10vh] lg:w-[18vw] lg:h-[47vh]" />
                <img src={c8} alt="" className="w-17vw] h-[10vh] lg:w-[18vw] lg:h-[47vh]" />
                <img src={c9} alt="" className="w-17vw] h-[10vh] lg:w-[18vw] lg:h-[47vh]" />
                <img src={c10} alt="" className="w-17vw] h-[10vh] lg:w-[18vw] lg:h-[47vh]" />

              </div>
            </div>
          </div>

        </div>
        <div id="landing-contact" className="lg:w-[78vw] w-[95vw] px-3 lg:px-0  text-white lg:h-[37vh]  mx-auto flex  place-items-center justify-evenly gap-[4.2rem] lg:gap-70">
          <div className="">
            <p className="text-[0.8rem] lg:text-[1.5rem] popins-bold ">Let's Build Your Next Project Together</p>
            <p className="fontMon font-bold text-[1.2rem] lg:text-[3.5rem]">Contact With Us!</p>
          </div>
          <button
            className="lg:w-[calc(9vw+0px)] w-[calc(16vw+0px)] 
             rounded-sm lg:rounded-lg 
             text-[calc(9px+0px)] lg:text-[calc(16px+0px)] 
             h-[calc(3vh+0px)] lg:h-[calc(6vh+0px)] 
             bg-[#FDC000] ">
            Contact Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default Landing;
