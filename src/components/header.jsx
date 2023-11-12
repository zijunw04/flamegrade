import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full items-center grid grid-cols-3 p-5 bg-UICRed z-10 relative">
      <div className="flex items-center justify-start">
        <a href="/" className="text-xl text-UICWhite">
          FlameGrades
        </a>

        <div
          className={`flex flex-col fixed top-0 right-0 h-full w-[70%] lg:w-[30%] sm:w-[35%] bg-red-500 text-white shadow-lg px-4 transform origin-right transition-transform ${menuOpen ? 'opacity-100 translate-x-[0%] transition-all' : 'opacity-0 translate-x-[100%] transition-all flex'}`}
        >
          <div className="w-full flex justify-center text-center lg:text-2xl text-xl mt-8">
            <h1 onClick={closeMenu} className=" cursor-pointer hover:scale-110">Flame Grades &times;</h1>
          </div>
          <div className="flex flex-col justify-start gap-9 mt-10">
            <a href="/" className={`w-[200px] text-xl block py-2 opacity-0 hover:underline hover:animate-pulse   transform translate-y-2 transition duration-300 delay-100 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0' : ''}`}>Home</a>
            <a href="/courses" className={`block text-xl  py-2 opacity-0 hover:underline hover:animate-pulse transform translate-y-2 transition duration-300 delay-200 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0' : ''}`}>All Courses</a>
            <a href="/gened" className={`block text-xl py-2 opacity-0 hover:underline hover:animate-pulse transform translate-y-2 transition duration-300 delay-300 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0' : ''}`}>Gen Ed Courses</a>
          </div>
        </div>
      </div>

      <div className="flex-grow lg:flex hidden items-center justify-center">
        <a href="https://uic.edu" target="_blanks" className="flex text-center items-center">
          <img src="https://chicago.medicine.uic.edu/wp-content/uploads/2018/04/CAMP.CIRC_.LG_.WHT_.png" alt="" className="h-[54px] w-[54px] mt-[2px]"></img>
          <p className="text-UICWhite font-sans font-normal ml-2">University of <p className="font-bold">Illinois Chicago</p></p>
        </a>
      </div>

      <div className="lg:hidden">

      </div>

      <div className="items-center flex justify-end z-[-1]">
        <div onClick={toggleMenu} className="cursor-pointer transition duration-300 transform hover:-translate-x-1 text-center">
          <img alt="" className="h-[54px] w-[54px]" src='/images/logo.png'/>
          <p className=" text-UICWhite font-bold" >Menu</p>
        </div>
      </div>
    </div>
  );
}
