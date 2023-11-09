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
    <div className="w-full min-h-screen  overflow-hidden px-[20%] ">
      <div className="mt-20 flex border justify-center min-h-screen py-6  px-6 flex-wrap">
        <div className="mt-4 flex py-5  lg:w-[350px] lg:h-[350px] sm:w-[300px] w-[100px] ">
            <img alt="" className="border-UICBlue  border-8 rounded-full lg:w-[300px] lg:h-[300px] sm:w-[300px] sm:h-[300px] w-[150px] h-[150px] object-cover " src={`/images/${professor.professorID}.png`}></img>
        </div>
        <div className="mt-2 flex py-5 max-w-[1000px] ">
          <div className="flex flex-col pl-9  gap-3 font-sans ">
            <span className="font-semibold font-sans text-4xl">
              Professor. {professor.professorName}
            </span>
            <span className="font-normal  text-2xl">
              UIC - {course.classes[classNum].classNum}
            </span>
            <span className="">
              A: {professor.APercentage}
            </span>
            <span className="">
              B: {professor.BPercentage}
            </span>
            <span className="">
              C: {professor.CPercentage}
            </span>
            <span className="">
              D: {professor.DPercentage}
            </span>
            <span className="">
              F: {professor.FPercentage}
            </span>
            <span className="">
              Withdrew: {professor.WPercentage}
            </span>
            <span className="">
              Average Class GPA: {professor.GPA}
            </span>
            
          </div>
        </div>

        <div className=" flex h-full w-screen ">
          <div className="flex flex-col pl-9 gap-3 font-sans w-full">
            <span className="font-semibold font-sans text-2xl mb-4">
              Graphs
            </span>

            <div className="flex items-center">
              <span className="w-20">A:</span>
              <div className="relative w-full h-6 bg-white border border-gray-300">
                <div className={`absolute h-full bg-blue-400`} style={{ width: `${professor.APercentage}` }}></div>
              </div>
            </div>

            <div className="flex items-center">
              <span className="w-20">B:</span>
              <div className="relative w-full h-6 bg-white border border-gray-300">
                <div className={`absolute h-full bg-blue-400`} style={{ width: `${professor.BPercentage}` }}></div>
              </div>
            </div>

            <div className="flex items-center">
              <span className="w-20">C:</span>
              <div className="relative w-full h-6 bg-white border border-gray-300">
                <div className={`absolute h-full bg-blue-400`} style={{ width: `${professor.CPercentage}` }}></div>
              </div>
            </div>

            <div className="flex items-center">
              <span className="w-20">D:</span>
              <div className="relative w-full h-6 bg-white border border-gray-300">
                <div className={`absolute h-full bg-blue-400`} style={{ width: `${professor.DPercentage}` }}></div>
              </div>
            </div>

            <div className="flex items-center">
              <span className="w-20">F:</span>
              <div className="relative w-full h-6 bg-white border border-gray-300">
                <div className={`absolute h-full bg-blue-400`} style={{ width: `${professor.FPercentage}` }}></div>
              </div>
            </div>

            <div className="flex items-center">
              <span className="w-20">W:</span>
              <div className="relative w-full h-6 bg-white border border-gray-300">
                <div className={`absolute h-full bg-blue-400`} style={{ width: `${professor.WPercentage}` }}></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorGrade;
