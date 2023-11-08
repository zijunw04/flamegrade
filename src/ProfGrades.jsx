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
    <div className="overflow-hidden w-screen h-screen">
      <div className="mt-20 flex m-5 border py-5 shadow-2xl w-full justify-between">
        <div className="flex flex-col pl-9 items-start gap-3 justify-center">
          <span className="font-semibold font-sans text-2xl">
            Professor. {professor.professorName}
          </span>
          <span className="font-sans">
            Professor ID: {professor.professorID}
          </span>
          <span className="font-sans">
            Total Student Graded: {professor.TotalGrade}
          </span>
          <span className="font-sans">
            A: {professor.APercentage}
          </span>
          <span className="font-sans">
            B: {professor.BPercentage}
          </span>
          <span className="font-sans">
            C: {professor.CPercentage}
          </span>
          <span className="font-sans">
            D: {professor.DPercentage}
          </span>
          <span className="font-sans">
            F: {professor.FPercentage}
          </span>
          <span className="font-sans">
            GPA: {professor.GPA}
          </span>
          <span className="font-sans">
            Withdrew: {professor.WithDrew}
          </span>
        </div>
        <div className="">
          <img alt="" className="border-UICBlue border-8 rounded-full w-[300px] h-[300px] mr-9  object-cover " src={professor.professorPhoto}></img>
        </div>
      </div>
    </div>
  );
};

export default ProfessorGrade;
