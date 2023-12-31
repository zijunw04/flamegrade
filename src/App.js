import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import Professors from "./Professors";
import ProfGrade from "./ProfGrades";
import Header from "./components/header";
import Footer from "./components/footer";
import AllCourses from "./AllCourse";
import GenEdCourses from "./gened";
import ContactPage from "./feedback";
import ProfessorsList from "./SearchProf";
import ProfessorCourses from "./courseTaughtbyProf";

const App = () => {

  

  return (
    <div className="w-full overflow-x-hidden">
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:id" element={<Courses />} />
          <Route path="/courses/:id/:classNum" element={<Professors />} />
          <Route path="/courses/:id/:classNum/:professorID" element={<ProfGrade />} />
          <Route path="/professors" element={<ProfessorsList/>} />
          <Route path="/professors/:professorID" element={<ProfessorCourses />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/gened" element={<GenEdCourses />} />
          <Route path="/feedback" element={<ContactPage />} />
        </Routes>
      <Footer/>

    </div>
  );
};

export default App;
