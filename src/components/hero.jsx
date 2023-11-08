import React from "react";

export default function Hero() {
  return(
    <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div className="relative  ">
          <img className="w-full max-h-[200px] object-cover brightness-[.3]" alt="" src="https://www.commonapp.org/static/5d13ea34f4ea8859e1fa0d5ecf671e3a/university-illinois-chicago_544.jpg" />
          <h1 className="absolute text-5xl text-white top-[50%] left-1/2 -translate-x-1/2 font-bold -translate-y-1/2">
              Flame Grades</h1>
          <span className="absolute lg:text-base md:text-xs text-xs text-white top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2">View the grades of courses given by Professor at University of Illinois Chicago</span>
      </div>
    </div>
  )
}