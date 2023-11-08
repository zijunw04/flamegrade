import React from "react";

export default function Introduction() {
  return(
    <div className="flex flex-wrap justify-center mt-6">
          
          <h1 className="w-full text-center text-3xl text-ChicagoBlue ">
              Introduction</h1>
          <div className="w-full mt-2 px-[20%] flex flex-wrap flex-col">
            <span className=" text-2xl font-semibold">Data</span>
            <span className=" text-base text-black  ">Website's data is provided by UIC's Grade Distribution data. You can access the database <a className="text-ChicagoBlue underline" target="_blanks" href="https://oir.uic.edu/data/student-data/grade-distribution/">online</a>. Currently, the website's data is ONLY available for the year 2021-2023. Some professor may not be shown &#40;such as new prof / not within data year&#41; </span>
          </div>
          <div className="w-full mt-2 px-[20%] flex flex-wrap flex-col">
            <span className=" text-2xl font-semibold">Contribution</span>
            <span className=" text-base text-black  ">This is a open source project by <a href="https://www.linkedin.com/in/zi-jun-wang/" target="_blanks" className="text-ChicagoBlue underline">Zi Jun Wang</a> and here is the <a href="https://github.com/floatsinkfc/flamegrade" target="_blanks" className="text-ChicagoBlue underline">repo</a> if you wanted to contribute towards this project. By contributing, you can make pull requests and help organize codes or create pages that enhance this website.</span>
          </div>

    </div>
  )
}