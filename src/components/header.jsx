import React from "react";

export default function Header() {
  return(
    <div className="absolute w-screen flex justify-between items- p-4 bg-UICRed z-10">
      <a href="/" className="text-xl text-UICWhite">FlameGrades</a>
      <div className="flex">
        <a href="https://uic.collegescheduler.com/entry" target="_blanks" className="text-xl text-UICWhite mr-5">Start Planning</a>
        <a href="https://uic.edu" target="_blanks"><img src="https://chicago.medicine.uic.edu/wp-content/uploads/2018/04/CAMP.CIRC_.LG_.WHT_.png" alt="" className="h-[28px] w-[28px] mt-[2px] "></img></a>
      </div>
    </div>
  )
}