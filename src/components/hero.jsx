import React from "react";

export default function Hero() {
  return(
    <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div className="relative items-center flex justify-center  ">
          <img className="w-full max-h-[200px] object-cover brightness-[.3]" alt="" src="/images/UICHero.jpg" />
          <h1 className="absolute lg:text-5xl text-3xl text-white font-bold ">
              Flame Grades</h1>
          <span className="absolute lg:text-base md:text-xs text-[10px] text-white top-3/4">View the grades of courses given by Professor at University of Illinois Chicago</span>
      </div>
    </div>
  )
}