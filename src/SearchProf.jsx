import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { coursesData } from "./data/coursesData";

const ProfessorsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedProfessors, setDisplayedProfessors] = useState([]);

  // Extract professors from coursesData
  const professors = Object.values(coursesData.reduce((acc, course) => {
    const courseProfessors = Object.values(course.classes).reduce((professors, classInfo) => {
      Object.entries(classInfo.professor).forEach(([professorID, professor]) => {
        if (!professors[professorID]) {
          professors[professorID] = {
            professorID,
            professorName: professor.professorName,
          };
        }
      });
      return professors;
    }, {});
    return { ...acc, ...courseProfessors };
  }, {}));

  useEffect(() => {
    // Debounce the search term to reduce the frequency of filtering
    const debounceTimeout = setTimeout(() => {
      const cleanedSearchTerm = searchTerm.replace(/\d/g, "").toLowerCase();
      const filteredProfessors = professors.filter(
        (professor) =>
          professor.professorName.toLowerCase().includes(cleanedSearchTerm) ||
          professor.professorID.toLowerCase().includes(cleanedSearchTerm)
      );
      setDisplayedProfessors(filteredProfessors.slice(0, 10));
    }, 300); // Adjust the debounce time according to your needs

    // Cleanup function to clear the timeout on component unmount or when the search term changes
    return () => clearTimeout(debounceTimeout);
  }, [searchTerm, professors]); // Include professors in the dependency array

  return (
    <>
      <div className="w-full min-h-screen overflow-hidden">
        <div className="flex flex-wrap justify-center px-[20%] gap-11 mt-16 mb-10">
          <div className="w-screen flex flex-wrap lg:justify-between gap-5 justify-center text-center items-center ">
            <p className="text-2xl">List of Professors</p>
            <div className="">
              <input
                type="text"
                placeholder="Search by Professor Name or ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-2 border w-[250px] border-gray-300 rounded-md text-sm"
              />
            </div>
          </div>
          {displayedProfessors.map((professor, ind) => (
            <Link
              className="w-[250px] h-[100px] shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:scale-110 text-center flex justify-center gap-0 border cursor-pointer"
              key={ind}
              to={`/professors/${professor.professorID}`}
            >
              <div className="flex w-[180px] justify-center h-full">
                <div className="pt-5 flex flex-col">
                  <span className="font-sans font-semibold text-sm">{professor.professorName}</span>
                  <span className="font-sans font-semibold text-sm">&#40;{professor.professorID}&#41;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfessorsList;
