import React from "react";

export default function Header() {
  return(
    <div className="w-full  items-center grid grid-cols-3 p-5 bg-UICRed z-10 overflow-hidden">
      <div className="flex items-center justify-start">
        <a href="/" className="text-xl text-UICWhite">FlameGrades</a>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <a href="https://uic.edu" target="_blanks" className="flex text-center items-center">
          <img src="https://chicago.medicine.uic.edu/wp-content/uploads/2018/04/CAMP.CIRC_.LG_.WHT_.png" alt="" className="h-[54px] w-[54px] mt-[2px] "></img>
          <p className="text-UICWhite font-sans font-normal ml-2">University of <p className="font-bold">Illinois Chicago</p></p>
        </a>
      </div>
      <div className="flex items-center justify-end">
        <a href="https://www.ratemyprofessors.com/" target="_blanks" className="text-xl text-UICWhite mr-5">RateMyProfessor</a>
        <a href="https://uic.collegescheduler.com/entry" target="_blanks" className="text-xl text-UICWhite mr-5">Register</a>
        <a href="/" target="_blanks" className="text-xl text-UICWhite mr-5">Contact</a>
      </div>
    </div>
  )
}
