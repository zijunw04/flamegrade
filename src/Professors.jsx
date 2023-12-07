
import React from "react";
import { coursesData } from "./data/coursesData";
import { useParams, Link } from "react-router-dom";

const Professors = () => {
  const params = useParams();
  const { id, classNum } = params;
  const course = coursesData.find((item) => item.id === id);

  if (!course || !course.classes[classNum]) {
    return <div>Invalid course or class number</div>;
  }

  const professors = course.classes[classNum].professor;

  return (
    <>
      <div className="w-screen min-h-screen overflow-hidden flex flex-wrap">
        <div>
          <div className="mt-20 w-screen p-10 text-center text-5xl">{course.classes[classNum].classNum} Professors: </div>
          <div className="flex m-5 border shadow-2xl">
            <div className="flex flex-col px-5 justify-center w-full">
              <div className="flex flex-wrap justify-start">
                {Object.keys(professors).map(professorKey => (
                  <div className="w-[300px] mx-auto my-10 bg-white rounded-lg shadow-md p-5" key={professorKey}>
                    <Link key={professorKey} to={`/courses/${course.id}/${course.classes[classNum].classNum}/${professors[professorKey].professorID}`} className="">
                      <img class="w-32 h-32 rounded-full mx-auto object-cover" src={`/images/professorPhoto/${professors[professorKey].professorID}.png`} alt=""></img>
                      <h2 class="text-center text-2xl font-semibold mt-3">{professors[professorKey].professorName}</h2>
                      <p class="text-center text-gray-600 mt-1">Average GPA: {professors[professorKey].GPA}</p>

                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Professors;

