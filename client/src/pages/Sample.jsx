<div
  className="flex flex-col gap-[calc(0.5rem+0.4vw)] animate-fadeUp opacity-0 translate-y-3"
>
  <p className="text-[calc(1.2rem+1vw)] lg:text-[calc(2.5rem+1.5vw)] text-white aboutCom font-bold leading-[calc(1.8rem+0.6vw)] lg:leading-[calc(3rem+1vw)]">
    Building the Future with <br /> 
    <span className="text-[#FDC000]">Strength & Precision</span>
  </p>

  {isMobile ? (
    <p className="text-white w-[88%] text-[calc(0.9rem+0.3vw)] popins leading-[calc(1.4rem+0.3vw)]">
      Delivering reliable infrastructure solutions with modern machinery and expert execution.
    </p>
  ) : (
    <p className="text-white text-[calc(1rem+0.5vw)] popins leading-[calc(1.5rem+0.4vw)]">
      Delivering reliable infrastructure solutions with modern machinery <br /> and expert execution.
    </p>
  )}

  <button
    className="mt-[calc(1.5rem+0.5vw)] rounded-md bg-[#FDC000] text-[calc(0.8rem+0.3vw)] 
               font-semibold px-[calc(1rem+0.5vw)] py-[calc(0.4rem+0.3vw)] 
               lg:w-[calc(8vw+1rem)] lg:h-[calc(5vh+1rem)] popins-noweight
               hover:bg-[#ffcf33] transition-all duration-300"
  >
    See Our Fleet
  </button>
</div>
