import React from "react";

export default function Introduction() {
  return(
    <div className="flex flex-wrap justify-center py-6">
          
          <h1 className="w-full text-center text-3xl text-ChicagoBlue ">
              Introduction</h1>
          <div className="w-full mt-2 px-[20%] flex flex-wrap flex-col">
            <span className=" text-2xl font-semibold">READ</span>
            <span className=" text-base text-black  ">This website is NOT affiliated with University of Illinois Chicago. The information provided on this website is intended solely for informational purposes and should not be the sole determinant in your course selection. I strongly recommend looking at additional sources, such as <a href="https://www.ratemyprofessors.com/" className="underline text-ChicagoBlue">Rate My Professor</a>, for a more comprehensive and personalized review of specific professors. Making well-informed decisions regarding your courses is crucial to ensuring a fulfilling academic experience. </span>
          </div>
          <div className="w-full mt-2 px-[20%] flex flex-wrap flex-col">
            <span className=" text-2xl font-semibold">Data</span>
            <span className=" text-base text-black  ">Website's data is provided by UIC's Grade Distribution data. You can access the database <a className="text-ChicagoBlue underline" target="_blanks" href="https://oir.uic.edu/data/student-data/grade-distribution/">online</a>. Currently, the website's data is ONLY available for the year Fall 2015 - Spring 2023. Some professor or their data may not be shown &#40;such as new prof / not within data year / pass and fail&#41; </span>
          </div>
          <div className="w-full mt-2 px-[20%] flex flex-wrap flex-col">
            <span className=" text-2xl font-semibold">Contribution</span>
            <span className=" text-base text-black  ">This is a open source project by <a href="https://www.floatsink.me" target="_blanks" className="text-ChicagoBlue underline">Zi Jun Wang</a>. If you are interested in contributing to the advancement of this project, you are encouraged to explore the  <a href="https://github.com/floatsinkfc/flamegrade" target="_blanks" className="text-ChicagoBlue underline">repository here</a>. I would love to hear a feedback from those who use this website! <a href="/feedback" className="text-ChicagoBlue underline">Submit a Feedback</a></span>
          </div>

    </div>
  )
}