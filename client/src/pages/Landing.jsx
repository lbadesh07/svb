import React from "react";
import LandingBanner from "./LandingBanner";
import constructionImg from "../assets/cap.png";
import pillarImg from "../assets/pillarsOfTrustIMG.png"
import "../CSS/Landing.css"
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

const Landing = ({
  title = "Total Environment",
  description = "Location–Pursuit of a radical rhapsody white field.",
  year = "2019",
  logoSrc = "/logo.png", // default expects logo in public folder
}) => {
  return (
    <div className="w-screen bg-[#F8F8F8]">
      <LandingBanner></LandingBanner>
     

      <div className="flex flex-col gap-[20vh] my-30  w-screen">
        <div>
          <section className="flex  flex-row w-full justify-center  text-gray-800  ">
            {/* Left Image Section */}
            <div className="">
              <img
                src={constructionImg}
                alt="Construction site"
                className="rounded-2xl shadow-lg w-[40vw] h-[84vh]"
              />
            </div>

            {/* Right Text Section */}
            <div className="w-[33vw] h-fit  flex flex-col">
              <p className="popins leading-16   p-4 rounded-bl-2xl -ml-56 bg-[#F8F8F8] text-black text-[4rem] font-semibold">
                Great Relationships,
                <br /> Great{" "}
                <span className="text-[#FDC000]">Infrastructure</span>
              </p>
              <div className="flex flex-col place-items-end">
                <p className=" text-[#4D4D4D] w-[32vw] text-[1.25rem] pl-5 pt-10  ">
                  <span className="font-semibold mr-1">SVB Infra Projects</span>
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
                <button className="popins  w-[9vw] bg-[#FDC000]  py-2 rounded-md ">
                  Know More
                </button>
              </div>
            </div>
          </section>
          <div className="flex gap-5  my-10 pl-[9vw]">
            <div className="border-2 border-[#FDC000] rounded-md flex w-[12vw] justify-evenly   h-[11vh] place-items-center">
              <p className="popins text-3xl font-semibold ">50+</p>
              <p className="popins font-medium text-[15px] text-[#4D4D4D]  text-start">Successfull <br /> Project</p>
            </div>
            <div className="border-2 border-[#FDC000] rounded-md flex w-[12vw] justify-evenly  h-[11vh] place-items-center">
              <p className="popins text-3xl font-semibold ">100+</p>
              <p className="popins font-medium text-[15px] text-[#4D4D4D]  text-start">Machines <br /> Equipments</p>
            </div>
            <div className="border-2 border-[#FDC000] rounded-md flex w-[12vw] justify-evenly  h-[11vh] place-items-center">
              <p className="popins text-3xl font-semibold">27/7</p>
              <p className="popins font-medium text-[15px] text-[#4D4D4D]  text-start">Anywhere <br /> Assistance</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-10  ">
          <p className="popins text-[30px] pl-[190px] font-semibold underline decoration-[#FDC000] underline-offset-8">Pillars of Trust</p>
          <img src={pillarImg} className="w-[75vw] h-[101vh] mx-auto " />
        </div>
        <div className=" w-full flex flex-col gap-10">
          <p className="popins pl-[198px] text-[30px]  font-semibold underline decoration-[#FDC000] underline-offset-8">Our Fleet</p>
          <div className=" flex mx-40 gap-5 my-5">
            <div className="flex flex-col  w-[40vw] py-10 gap-5  ">
              <p className="popins-bold  leading-18  bg-white text-black text-[4rem] font-bold">Force Behind <br /> Every <span className="text-[#FDC000]">Foundation</span></p>
              <p className="text-[#4D4D4D] text-[1rem] font-medium ">Starting out with only one JCB 3D, we now keep a well- <br /> maintained fleet of trucks and equipment.</p>
              <button className="popins-bold  w-[9vw] bg-[#FDC000]  py-2 rounded-md">Explore All</button>
            </div>
            <div id="cont-fleet-img" className="relative flex w-[40vw] h-[43vh] overflow-hidden">
              <div className="flex animate-fleet-scroll">
                <img src={fleet1} className="w-[18vw] h-[43vh]" />
                <img src={fleet2} className="w-[18vw] h-[43vh]" />
                <img src={fleet1} className="w-[18vw] h-[43vh]" />
                <img src={fleet1} className="w-[18vw] h-[43vh]" />
                <img src={fleet2} className="w-[18vw] h-[43vh]" />
                <img src={fleet1} className="w-[18vw] h-[43vh]" />

                {/* duplicate for seamless infinite loop */}
                <img src={fleet1} className="w-[18vw] h-[43vh]" />
                <img src={fleet2} className="w-[18vw] h-[43vh]" />
                <img src={fleet1} className="w-[18vw] h-[43vh]" />
                <img src={fleet1} className="w-[18vw] h-[43vh]" />
                <img src={fleet2} className="w-[18vw] h-[43vh]" />
                <img src={fleet1} className="w-[18vw] h-[43vh]" />
              </div>
            </div>
          </div>
        </div>
        <div className=" px-40">
          <div id="infrastructure" className=" flex flex-col gap-y-20 w-[80vw] h-[87vh] z-10">
            <div className="border border-white/30 rounded-3xl w-fit font-[Poppins] text-[1.1rem] px-6 py-2 mt-5 
                 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 ml-5">Our Latest Project</div>
            <div className="flex flex-col gap-2 ml-8">
              <p className="popins-bold text-[4rem] text-white leading-20">Powering Your Future with <br /> Innovative Infrastructure <br /> Projects</p>
              <p className="text-white text-md">SVB Infra – Engineering the Future of Infrastructure</p>
            </div>
            <button className="ml-8 popins-bold  w-[10vw] bg-[#FDC000]  py-3 rounded-md mt-15">Explore All</button>
          </div>
          <div className=" flex w-full py-6 relative ">
            <p className="text-[#4D4D4D] popins text-[16px] mt-5 font-semibold text-lg">We have successfully completed a wide range of <br /> earthwork and excavation projects for leading <br /> clients across Karnataka. Our portfolio includes <br /> residential, commercial, and infrastructure <br /> developments delivered with quality and precision.</p>
            <div className="absolute left-[35vw] -top-[7vw] w-[50vw] py-4  overflow-hidden ">
              {/* ✅ Scroll track (inside box) */}
              <div className="flex gap-x-6 animate-scroll">
                {/* Duplicate cards for seamless looping */}
               <img src={c1} alt="" className="w-[18vw] h-[47vh]" />
               <img src={c2} alt="" className="w-[18vw] h-[47vh]" />
               <img src={c3} alt="" className="w-[18vw] h-[47vh]" />
               <img src={c4} alt="" className="w-[18vw] h-[47vh]" />
               <img src={c5} alt="" className="w-[18vw] h-[47vh]" />
               <img src={c6} alt="" className="w-[18vw] h-[47vh]" />
               <img src={c7} alt="" className="w-[18vw] h-[47vh]" />
               <img src={c8} alt="" className="w-[18vw] h-[47vh]" />
               <img src={c9} alt="" className="w-[18vw] h-[47vh]" />
               <img src={c10} alt="" className="w-[18vw] h-[47vh]" />

              </div>
            </div>
          </div>

        </div>
        <div id="landing-contact" className="w-[78vw] h-[37vh] border-2 mx-auto flex  place-items-center justify-evenly gap-70">
            <div>
              <p className="text-[1.5rem] popins-bold">Let's Build Your Next Project Together</p>
              <p className="popins-bold text-[3.5rem]">Contact With Us!</p>
            </div>
           <button className="w-[9vw] h-[6vh] bg-[#FDC000] rounded-lg">Contact Now</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
