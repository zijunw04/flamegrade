import React from "react";
import { coursesData } from "./data/coursesData";
import { useParams, Link } from "react-router-dom";

const Courses = () => {
  const params = useParams();
  const { id } = params;
  const course = coursesData.find((item) => item.id === id);

  const classNumbers = Object.keys(course.classes);

  const levels = {};

  classNumbers.forEach((classNum) => {
    const classInfo = course.classes[classNum];
    const level = classInfo.level;
    if (!levels[level]) {
      levels[level] = [];
    }
    levels[level].push(classInfo);
  });

  return (
    <>
      <div className="w-screen h-screen overflow-hidden">
        {/* ... */}
        <div className="bg-white border p-5 shadow-xl">
          <span className="font-bold text-xl mb-5 block text-center">Classes:</span>

          <div className="flex flex-wrap justify-between">
            {Object.keys(levels).map((level) => (
              <div key={level} className="mb-5 w-screen mx-auto flex ">
                <div className="flex flex-wrap items-center  mb-2">
                  <h2 className="text-xl font-bold mr-2">{level} Level</h2>
                  {levels[level].map((classInfo) => (
                    <div key={classInfo.classNum} className="p-5 border-r-black border-b-2 text-center">
                      <Link to={`/courses/${course.id}/${classInfo.classNum}`}>
                        <span className="font-sans font-semibold">{classInfo.classNum}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
