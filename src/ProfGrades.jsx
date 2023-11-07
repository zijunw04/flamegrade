import React from "react";
import { coursesData } from "./data/coursesData";
import { useParams } from "react-router-dom";

const ProfessorGrade = () => {
  const params = useParams();
  const { id, classNum, professorID } = params;
  const course = coursesData.find((item) => item.id === id);

  if (!course || !course.classes[classNum] || !course.classes[classNum].professor[professorID]) {
    return <div>Invalid course, class, or professor</div>;
  }

  const professor = course.classes[classNum].professor[professorID];

  return (
    <div>
      <div className="flex m-5 border shadow-2xl">
        <div className="flex flex-col pl-9 items-start gap-3 justify-center">
          <span className="font-semibold font-sans text-2xl">
            Professor Name: {professor.professorName}
          </span>
          <span className="font-sans">
            Professor ID: {professor.professorID}
          </span>
          <span className="font-sans">
            Grade: {professor.AGrade}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfessorGrade;
