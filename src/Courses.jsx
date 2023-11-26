import React, { useState } from "react";
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

  const [selectedLevel, setSelectedLevel] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // Add state for search term

  return (
    <>
      <div className="w-full min-h-screen overflow-hidden">
        <div className="flex flex-wrap justify-center px-[20%] gap-5 mt-16 mb-10">
          <div className="w-full text-center items-center">
            <h2 className="text-2xl text-ChicagoBlue">Classes: {course.id}</h2>
          </div>
          {/* Dropdown for selecting class level */}
          <div className="w-full text-center flex justify-center gap-5 items-center flex-wrap">
            <label htmlFor="classLevel" className="text-lg font-semibold">
              Select Class Level:
            </label>
            <select
              id="classLevel"
              name="classLevel"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full max-w-[400px] p-2 border rounded"
            >
              <option value="">All Levels</option>
              {Object.keys(levels).map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          {/* Search bar for specific course by number or name */}
          <div className="w-full text-center flex justify-center gap-5 items-center flex-wrap">
            <label htmlFor="search" className="text-lg font-semibold">
              Search:
            </label>
            <input
              type="text"
              id="search"
              name="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border rounded w-full max-w-[400px]"
              placeholder="Search by course number or name"
            />
          </div>
          {/* Display classes with average GPA */}
          <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(levels).map((level) =>
              levels[level].map((classInfo) =>
                // Check if the selected level matches or if no level is selected
                (selectedLevel === "" || selectedLevel === level) &&
                // Check if the search term matches the class number or name
                (classInfo.classNum.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  classInfo.name.toLowerCase().includes(searchTerm.toLowerCase())) && (
                  <div key={classInfo.classNum} className="border p-4">
                    <Link to={`/courses/${course.id}/${classInfo.classNum}`}>
                      <p className="font-bold">{classInfo.classNum}</p>
                    </Link>
                    <p>{classInfo.name}</p>
                    <p>Average GPA: {calculateAverageGPA(classInfo).toFixed(2)}</p>
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const calculateAverageGPA = (classInfo) => {
  const allGPAs = Object.values(classInfo.professor).map(
    (professorInfo) => parseFloat(professorInfo.GPA) || 0
  );
  const averageGPA =
    allGPAs.reduce((sum, gpa) => sum + gpa, 0) / (allGPAs.length || 1);
  return averageGPA;
};

export default Courses;
