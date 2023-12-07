import React from "react";
import { Link, useParams } from "react-router-dom";
import { coursesData } from "./data/coursesData";

const ProfessorCourses = () => {
  const { professorID } = useParams();

  const professorCourses = coursesData.reduce((acc, course) => {
    const coursesTaught = Object.entries(course.classes).reduce((classList, [classNum, classInfo]) => {
      Object.entries(classInfo.professor).forEach(([profID, professor]) => {
        if (profID.includes(professorID)) {
          classList.push({
            courseID: course.id,
            classNum: classNum,
            professorID: professorID,
            professorName: professor.professorName,
            className: classInfo.name,
          });
        }
      });
      return classList;
    }, []);
    return [...acc, ...coursesTaught];
  }, []);

  return (
    <>
      <div className="w-full min-h-screen overflow-hidden">
        <div className="flex flex-wrap justify-center px-[20%] gap-5 mt-16 mb-10">
          <div className="w-full text-center items-center">
            <h2 className="text-2xl text-ChicagoBlue">{professorCourses.length > 0 ? professorCourses[0].professorName : ''}'s Courses</h2>
          </div>
          <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professorCourses.map(({ courseID, classNum, professorID, professorName, className }) => (
              <div key={classNum} className="border p-4">
                <Link to={`/courses/${courseID}/${classNum}/${professorID}`}>
                  <p className="font-bold">{classNum}</p>
                </Link>
                <p>{className}</p>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessorCourses;
