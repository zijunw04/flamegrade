import React from "react";

export default function Footer() {
  return(
    <div class="w-full bg-UICRed text-UICWhite">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <div class="flex items-center mb-4 sm:mb-0">
                    <img src='/images/logo.png' class="h-8 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap ">Flame Grades</span>
                </div>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0">
                    <li>
                        <a href="https://www.ratemyprofessors.com/" target="_blanks" className="mr-4 hover:underline md:mr-6 ">RateMyProfessor</a>
                        <a href="https://uic.collegescheduler.com/entry" target="_blanks" className="mr-4 hover:underline md:mr-6 ">Register</a>
                        <a href="/feedback" className="mr-4 hover:underline md:mr-6 ">Contact</a>
                    </li>
                </ul>
            </div>
          
        </div>
    </div>


  )
}