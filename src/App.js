import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import Professors from "./Professors";
import ProfGrade from "./ProfGrades";
import Header from "./components/header";

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<Courses />} />
        <Route path="/courses/:id/:classNum" element={<Professors />} />
        <Route path="/courses/:id/:classNum/:professorID" element={<ProfGrade />} />
      </Routes>
    </>
  );
};

export default App;
