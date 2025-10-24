import React from "react";
import LandingBanner from "./LandingBanner";
import constructionImg from "../assets/cap.png";

const Landing = () => {
  return (
    <div className="w-screen">
      <LandingBanner></LandingBanner>
      <div>
        <section className="flex flex-row w-full justify-center  text-gray-800  py-30">
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
            <p className="popins leading-16   p-4 rounded-bl-2xl -ml-56 bg-white text-black text-[4rem] font-semibold">
              Great Relationships,
              <br /> Great{" "}
              <span className="text-[#FDC000]">Infrastructure</span>
            </p>
            <div className="flex flex-col place-items-end">
              <p className="popins text-[#4D4D4D] w-[32vw] text-[1.25rem] pl-5 pt-10  ">
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
              <button className="popins  w-[9vw] bg-[#FDC000]  py-2 rounded-md">
                Know More
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
