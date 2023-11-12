import React, { useState } from "react";
import { coursesData } from "./data/coursesData";
import { useNavigate } from "react-router-dom";
import Hero from "./components/hero";
import NewStudentPop from "./components/newstudentpop";
import Introduction from "./components/introduction";

const Home = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCourseNumber, setSelectedCourseNumber] = useState("");
  const [selectedProfessor, setSelectedProfessor] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (selectedCourse && selectedCourseNumber && selectedProfessor) {
      const link = `/courses/${selectedCourse}/${selectedCourseNumber}/${selectedProfessor}`;
      navigate(link);
    } else {
      alert("Please select all options");
    }
  };

  return (
    <>
      <Hero/>
      <Introduction/>
      <NewStudentPop/>

      <div className="w-full px-[20%] p-6 flex flex-col items-center mb-9 ">
        <h2 className="text-center text-3xl text-ChicagoBlue">Quick Search</h2>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <select
            className="px-3 py-2 border w-[200px] border-gray-300 rounded-md text-sm"
            value={selectedCourse}
            onChange={(e) => {
              setSelectedCourse(e.target.value);
              setSelectedCourseNumber("");
              setSelectedProfessor("");
            }}
          >
            <option value="">Select Category</option>
            {coursesData.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
          <select
            className="px-3 py-2 border w-[200px] border-gray-300 rounded-md text-sm"
            value={selectedCourseNumber}
            onChange={(e) => setSelectedCourseNumber(e.target.value)}
          >
            <option value="">Select Course Number</option>
            {selectedCourse &&
              coursesData
                .find((course) => course.id === selectedCourse)
                ?.classes &&
              Object.keys(
                coursesData.find((course) => course.id === selectedCourse).classes
              ).map((classNum) => (
                <option key={classNum} value={classNum}>
                  {classNum}
                </option>
              ))}
          </select>

          <select
            className="px-3 py-2 border w-[200px] border-gray-300 rounded-md text-sm"
            value={selectedProfessor}
            onChange={(e) => setSelectedProfessor(e.target.value)}
          >
            <option value="">Select Professor</option>
            {selectedCourse &&
              selectedCourseNumber &&
              coursesData
                .find((course) => course.id === selectedCourse)
                ?.classes[selectedCourseNumber]?.professor &&
              Object.values(
                coursesData
                  .find((course) => course.id === selectedCourse)
                  .classes[selectedCourseNumber].professor
              ).map((prof) => (
                <option key={prof.professorID} value={prof.professorID}>
                  {prof.professorName}
                </option>
              ))}
          </select>

          <button
            className="px-4 py-2 bg-ChicagoBlue text-white rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
