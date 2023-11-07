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
    <div className="">
      <div className="flex m-5 border shadow-2xl w-full justify-between">
        <div className="flex flex-col pl-9 items-start gap-3 justify-center">
          <span className="font-semibold font-sans text-2xl">
            Professor Name: {professor.professorName}
          </span>
          <span className="font-sans">
            Professor ID: {professor.professorID}
          </span>
          <span className="font-sans">
            Total Grades: {professor.TotalGrade}
          </span>
          <span className="font-sans">
            A: {professor.AGrade}
          </span>
          <span className="font-sans">
            B: {professor.BGrade}
          </span>
          <span className="font-sans">
            C: {professor.CGrade}
          </span>
          <span className="font-sans">
            D: {professor.DGrade}
          </span>
          <span className="font-sans">
            F: {professor.FGrade}
          </span>
        </div>
        <img alt="" className="w-[300px] h-[300px] mr-9" src={professor.professorPhoto}></img>
      </div>
    </div>
  );
};

export default ProfessorGrade;
