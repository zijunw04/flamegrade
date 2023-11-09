import React, { useState } from "react";
import { coursesData } from "./data/coursesData";
import { Link } from "react-router-dom";
import Hero from "./components/hero";
import NewStudentPop from "./components/newstudentpop";
import Introduction from "./components/introduction";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = coursesData.filter(item => {
  const cleanedSearchTerm = searchTerm.replace(/\d/g, "").toLowerCase(); 
  return (
    item.name.toLowerCase().includes(cleanedSearchTerm) ||
    item.id.toLowerCase().includes(cleanedSearchTerm)
  );
});


  const displayedCourses = filteredCourses.slice(0, 8); // Limit to first 10 items

  return (
    <>
      <div className="w-full min-h-screen overflow-hidden">
        <Hero/>
        <Introduction/>
        <NewStudentPop/>
        
        <div className="flex flex-wrap justify-center px-[20%] gap-11 mt-16 mb-10">
          <div className="w-screen flex-wrap text-center items-center grid grid-cols-2">
            <p className="text-2xl">Courses by Departments</p>
            <div className="">
              <input
                type="text"
                placeholder="Search by Courses (ex. ENGL)"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="px-3 py-2 border w-[250px] border-gray-300 rounded-md"
              />
            </div>
          </div>
          {displayedCourses.map((item, ind) => (
            <Link
              className="w-[250px] h-[70px] shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:scale-110 text-center grid grid-cols-4 gap-0  border cursor-pointer "
              key={ind}
              to={`/courses/${item.id}`} >
              <div className="w-[70px]">
                <img alt="" src={item.image} className="h-[50px] w-[50px] mt-3 object-contain ml-2"></img>
              </div>
              
              <div className=" flex w-[180px] justify-center h-full">
                <div className="pt-5" >
                  <span className="font-sans font-semibold ">{item.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
