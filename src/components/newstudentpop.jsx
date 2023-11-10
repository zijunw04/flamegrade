import React from "react";

export default function NewStudentPop() {
  return(
    <div className="m-10 px-[20%]">
      <div className=" text-center text-3xl text-ChicagoBlue">Popular Category</div>

        <div className="flex flex-wrap justify-center gap-11 mt-6">
          <a href="/courses/ENGL" >
            <div className="w-[250px] h-[100px] shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:scale-110 text-center  border cursor-pointer ">   
                <div className=" flex w-full justify-center h-full">
                    <div className="pt-5" >
                      <span className="font-sans font-semibold ">ENGLISH</span>
                    </div>
                </div>
            </div>
          </a>
          <a href="/courses/MATH" >
            <div className="w-[250px] h-[100px] shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:scale-110 text-center  border cursor-pointer ">   
                <div className=" flex w-full justify-center h-full">
                    <div className="pt-5" >
                      <span className="font-sans font-semibold ">MATH</span>
                    </div>
                </div>
            </div>
          </a>
          <a href="/courses/CS" >
            <div className="w-[250px] h-[100px] shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:scale-110 text-center  border cursor-pointer ">   
                <div className=" flex w-full justify-center h-full">
                    <div className="pt-5" >
                      <span className="font-sans font-semibold ">Computer Science</span>
                    </div>
                </div>
            </div>
          </a>
        </div>
    </div>
  )
}