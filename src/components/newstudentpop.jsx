import React from "react";

export default function NewStudentPop() {
  return(
    <div className="m-10 ">
      <div className=" text-center text-5xl">Popular Courses</div>

        <div className="flex flex-wrap gap-11 mt-6">
          <a href="/courses/ENGL/ENGL161" >
            <div className="w-[250px] h-[70px] shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:scale-110 text-center  border cursor-pointer ">   
                <div className=" flex w-full justify-center h-full">
                    <div className="pt-5" >
                      <span className="font-sans font-semibold ">ENGL 161</span>
                    </div>
                </div>
            </div>
          </a>
          <a href="/courses/MATH/MATH180" >
            <div className="w-[250px] h-[70px] shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:scale-110 text-center  border cursor-pointer ">   
                <div className=" flex w-full justify-center h-full">
                    <div className="pt-5" >
                      <span className="font-sans font-semibold ">MATH 180</span>
                    </div>
                </div>
            </div>
          </a>
        </div>
    </div>
  )
}