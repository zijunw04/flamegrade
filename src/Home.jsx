import React from "react";
import { coursesData } from "./data/coursesData";
import { Link } from "react-router-dom";
import Hero from "./components/hero";

const Home = () => {
  return (
    <>
      {/* Products */}
      <div className="w-screen h-screen overflow-hidden">
        <Hero/>
        <div className="flex flex-wrap m-10 gap-11">
          
          <div className="w-screen text-center text-5xl">Courses by Category</div>
            {coursesData.map((item, ind) => (
              <div
                className="w-[200px] h-[50px] shadow-lg  text-center rounded-2xl border cursor-pointer "
                key={ind}
              >
                <div className="flex flex-col gap-2 w-full h-full">
                  <Link className="mt-3" to={`/courses/${item.id}`}>
                    <span className="font-sans font-semibold ">{item.name}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
      </div>
    </>
  );
};

export default Home;