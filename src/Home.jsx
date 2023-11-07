import React from "react";
import { coursesData } from "./data/coursesData";
import { Link } from "react-router-dom";
import Hero from "./components/hero";
import NewStudentPop from "./components/newstudentpop";

const Home = () => {
  return (
    <>
      {/* Products */}
      <div className="w-screen h-screen overflow-hidden">
        <Hero/>
        <NewStudentPop/>
        <div className="flex flex-wrap m-10 gap-11">
          
          <div className="w-screen text-center text-5xl">Courses by Category</div>
            {coursesData.map((item, ind) => (
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