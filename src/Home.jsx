import React, { useState } from "react";
import { coursesData } from "./data/coursesData";
import { Link } from "react-router-dom";
import Hero from "./components/hero";
import NewStudentPop from "./components/newstudentpop";
import Introduction from "./components/introduction";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = coursesData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>

      <div className="w-full min-h-screen overflow-hidden">
        <Hero/>
        <Introduction/>
        <NewStudentPop/>
        
        
        
        <div className="flex flex-wrap justify-center gap-11 mt-16">
          <div className="w-screen text-center items-center grid grid-cols-2">
            <p className="text-2xl">Courses by Departments</p>
            <div className=" mt-4">
              <input
                type="text"
                placeholder="Search by Courses"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
            {filteredCourses.map((item, ind) => (
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
