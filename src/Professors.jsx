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
      <div className="w-screen h-screen overflow-hidden flex flex-wrap">
        <div>
          <div className="w-screen p-10 text-center text-5xl">Professors: </div>
          <div className="flex m-5 border shadow-2xl">
            <div className="flex flex-col pl-9 items-start gap-3 justify-center">
              <div className="">
                {Object.keys(professors).map(professorKey => (
                  <div className="p-5 border-r-black border-b-2" key={professorKey}>
                    <Link key={professorKey} to={`/courses/${course.id}/${course.classes[classNum].classNum}/${professors[professorKey].professorID}`}>
                      <span className="font-sans font-semibold">{professors[professorKey].professorName}</span>
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
