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
    <div className={`w-full items-center grid lg:grid-cols-3 grid-cols-2 p-5 bg-UICRed z-10 relative ${menuOpen ? 'overflow-hidden' : ''}`}>
      {menuOpen && <div className="fixed inset-0 bg-black backdrop-blur-lg opacity-50 z-20" onClick={closeMenu}></div>}

      <div className="flex items-center justify-start relative z-30">
        <a href="/" className="text-xl text-UICWhite">
          FlameGrades
        </a>

        <div
          className={`flex flex-col fixed top-0 right-0 h-full w-[70%] lg:w-[30%] sm:w-[35%] bg-UICRed text-white shadow-lg px-4 transform origin-right transition-transform ${menuOpen ? 'opacity-100 translate-x-[0%] transition-all' : 'opacity-0 translate-x-[100%] transition-all flex'}`}
          style={{ backdropFilter: menuOpen ? 'blur(8px)' : 'none' }}
        >
          <div className="w-full flex justify-center text-center lg:text-2xl text-xl mt-8">
            <h1 onClick={closeMenu} className="cursor-pointer hover:scale-110">Flame Grades &times;</h1>
          </div>
          <div className="flex z-30 flex-col justify-start gap-9 mt-10">
            <a href="/" className={`w-[200px] text-xl block py-2 opacity-0 hover:underline hover:animate-pulse transform translate-y-2  ${menuOpen ? 'opacity-100 translate-y-0' : ''}`}>Home</a>
            <a href="/courses" className={`block text-xl  py-2 opacity-0 hover:underline hover:animate-pulse transform translate-y-2 ${menuOpen ? 'opacity-100 translate-y-0' : ''}`}>All Courses</a>
            <a href="/professors" className={`block text-xl py-2 opacity-0 hover:underline hover:animate-pulse transform translate-y-2 ${menuOpen ? 'opacity-100 translate-y-0' : ''}`}>Professors</a>
            <a href="/gened" className={`block text-xl py-2 opacity-0 hover:underline hover:animate-pulse transform translate-y-2 ${menuOpen ? 'opacity-100 translate-y-0' : ''}`}>Gen Ed Courses</a>
            <a href="/feedback" className={`block text-xl  py-2 opacity-0 hover:underline hover:animate-pulse transform translate-y-2  ${menuOpen ? 'opacity-100 translate-y-0' : ''}`}>Feedback</a>
          </div>
        </div>
      </div>

      <div className="flex-grow lg:flex hidden items-center justify-center">
        <a href="https://uic.edu" target="_blank" rel="noopener noreferrer" className="flex text-center items-center">
          <p className="text-UICWhite font-sans font-normal ml-2">University of <p className="font-bold text-2xl">Illinois Chicago</p></p>
        </a>
      </div>

      <div className="items-center flex justify-end z-[-1]">
        <div onClick={toggleMenu} className="cursor-pointer transition duration-300 transform hover:-translate-x-1 text-center">
          <img alt="" className="h-[54px] w-[54px]" src='/images/logo.png'/>
          <p className="text-UICWhite font-bold" >Menu</p>
        </div>
      </div>
    </div>
  );
}
