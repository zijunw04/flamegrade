import React from "react";
import { coursesData } from "./data/coursesData";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Products */}

      <div className="flex flex-wrap m-10 gap-11">
        <div className="w-screen text-center text-5xl">Classes</div>
        {coursesData.map((item, ind) => (
          <div
            className="max-w-[250px] shadow-lg rounded-2xl border cursor-pointer"
            key={ind}
          >
            <div className="flex flex-col gap-2 px-16 py-4">
              <Link to={`/courses/${item.id}`}>
                <span className="font-sans font-semibold">{item.name}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;