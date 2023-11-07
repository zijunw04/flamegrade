import React from "react";
import { coursesData } from "./data/coursesData";
import { useParams, Link } from "react-router-dom";

const Courses = () => {
  const params = useParams();
  const { id } = params;
  const course = coursesData.find((item) => item.id === id);

  // Assuming you have an array of class numbers for the current course
  const classNumbers = Object.keys(course.classes);

  return (
    <>
      <div>
        <div>
          <div className="flex m-5 border shadow-2xl">
            <div className="flex w-screen p-10 flex-col gap-3 justify-center">
              <span className="font-semibold font-sans text-center text-4xl">
                {course.name}
              </span>
            </div>
          </div>
          <div className="bg-white border flex flex-wrap p-5 shadow-xl">
            <span className="font-bold text-xl w-screen">Classes:</span>

            <div className="mt-5">
            {classNumbers.map(classNum => (
              <Link key={classNum} to={`/courses/${course.id}/${course.classes[classNum].classNum}`}>
                <span className="font-sans font-semibold">{course.classes[classNum].classNum}</span>
              </Link>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
