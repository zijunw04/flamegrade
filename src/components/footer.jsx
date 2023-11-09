import React from "react";

export default function Footer() {
  return(
    <div class="w-full bg-UICRed text-UICWhite">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <div class="flex items-center mb-4 sm:mb-0">
                    <img src="https://media.discordapp.net/attachments/1128083576974479420/1171973555987169331/110D75AC-32A4-41D6-A13F-DA44E52B5567.png?ex=655ea06d&is=654c2b6d&hm=ae8324a5f96696f085eecf52a38c09b9cd354ad0fc5f08c9bf1af43e282b3241&=&width=889&height=889" class="h-8 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap ">Flame Grades</span>
                </div>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0">
                    <li>
                        <a href="https://www.ratemyprofessors.com/" target="_blanks" className="mr-4 hover:underline md:mr-6 ">RateMyProfessor</a>
                        <a href="https://uic.collegescheduler.com/entry" target="_blanks" className="mr-4 hover:underline md:mr-6 ">Register</a>
                        <a href="/" target="_blanks" className="mr-4 hover:underline md:mr-6 ">Contact</a>
                    </li>
                </ul>
            </div>
          
        </div>
    </div>


  )
}