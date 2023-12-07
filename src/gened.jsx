import React, { useState } from "react";
import { coursesData } from "./data/coursesData";

const GenEdCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState("Analyzing the Natural World");
  const [sortOrder, setSortOrder] = useState("none"); // Default to no sorting
  const [searchTerm, setSearchTerm] = useState("")

  const categoryClassNums = {
    "Analyzing the Natural World": ["ANTH102", "ANTH105", "ANTH238", "BIOS104", "BIOS110", "BIOS120", "CHE150", "CHEM100", "CHEM105", "CHEM115", "CHEM116", "CHEM118", "CHEM122", "CHEM123", "CHEM124", "CHEM125", "CHEM130", "CS100", "EAES101", "EAES105", "EAES111", "EAES200", "ECON106", "ECE115", "HON130", "HON131", "HON132", "HON133", "HON134", "HON145", "HN196", "KN152", "MCS260", "MATH125", "MATH160", "MATH165", "MATH170", "MATH180", "MATH181", "MATH210", "MUS116", "NATS105", "NATS106", "PHIL102", "PHIL105", "PHYS112", "PHYS116", "PHYS118", "PHYS131", "PHYS132", "PHYS141", "PHYS142", "PUBH120"],

    "Understanding the Individual and Society": ["ANTH101", "ANTH215", "ANTH216", "ANTH218", "ANTH238", "ANTH273", "ANTH277", "ANTH279","ARCH200", "ART110", "ART290", "AH101", "AH180","BLST100", "BLST103", "BLST104", "BLST207", "BLST263", "BLST271", "BLST272","CL208","COMM100", "COMM101", "COMM102", "COMM103", "COMM140","DLG220","DHD101", "DHD201", "DHD202", "DHD205","ECON106", "ECON111", "ECON120", "ECON121","ED100", "ED101", "ED135", "ED205", "ED217", "ED222", "ED258", "ED264","EPSY160", "EPSY242","ENGL135", "ENGL154", "ENGL230", "ENGL245", "ENGL247", "ENGL253", "ENGL258", "ENGL292","ENTR200","FIN250","GWS101", "GWS102", "GWS204", "GWS262","GEOG161", "GEOG203","GER120", "GER240","GLAS120", "GLAS210", "GLAS230", "GLAS250", "GLAS263","HIST117", "HIST137", "HIST211", "HIST213", "HIST214", "HIST220", "HIST224", "HIST233","HIST234", "HIST235", "HIST237", "HIST282","HON120", "HON121", "HON122", "HON123", "HON130", "HON140","HUM101", "HUM120","IE118","JST101", "JST102","KN150","LALS103", "LALS220", "LALS269", "LALS276","LING150", "LING160", "LING170", "LING260","MUS240","PHIL100", "PHIL101", "PHIL103", "PHIL104", "PHIL106", "PHIL108", "PHIL109", "PHIL110","PHIL111", "PHIL112", "PHIL113", "PHIL115", "PHIL120", "PHIL225", "PHIL240","POLS101", "POLS120", "POLS130", "POLS184", "POLS190","PSCH100", "PSCH210", "PSCH231", "PSCH270", "PSCH271","PPOL100", "PPOL232","PUBH100", "PUBH110","RELS100","SJ101","SOC100", "SOC105", "SOC215", "SOC224", "SOC225", "SOC228", "SOC229", "SOC241","SOC244", "SOC245", "SOC246", "SOC251", "SOC265", "SOC268", "SOC276","SPAN192","US100", "US140", "US205", "US208", "US220", "US222", "US230", "US231", "US235","US240", "US241", "US245", "US250", "US260", "US263", "US266", "US270", "US275","US276", "US279", "US280", "US284", "US286", "US290", "US291", "US292", "US293","US294", "US295","WGS101", "WGS102", "WGS202", "WGS210", "WGS240", "WGS242", "WGS245", "WGS247","WGS250", "WGS252", "WGS253", "WGS256", "WGS262", "WGS263", "WGS264", "WGS267","WGS268", "WGS269", "WGS270", "WGS271", "WGS272", "WGS276", "WGS279", "WGS282","WGS283", "WGS285", "WGS288", "WGS289", "WGS292", "WGS293", "WGS295","WRD104", "WRD204", "WRD206", "WRD210", "WRD213", "WRD214", "WRD217", "WRD220","WRD222", "WRD225", "WRD226", "WRD230", "WRD234", "WRD236", "WRD238", "WRD240"],

    "Understanding the Past": ["ANTH100", "ANTH102", "ANTH105", "ARAB250", "ARCH210", "AH122", "AH130", "AH209", "AH210", "AH259", "BLST101", "BLST125", "BLST246", "BLST247", "BLST248", "BLST249", "BLST263", "BLST265", "CL100", "CL101", "CL102", "CL103", "CL204", "CL205", "CL208", "CL218", "CL250", "CL251", "CL252", "CL253", "CL297", "ENGL208", "ENGL213", "GER125", "GER219", "GER240", "GLAS252", "GKM285", "GKM286", "GKM296", "HIST100", "HIST101", "HIST103", "HIST104", "HIST105", "HIST106", "HIST109", "HIST117", "HIST137", "HIST161", "HIST170", "HIST177", "HIST200", "HIST202", "HIST203", "HIST208", "HIST211", "HIST213", "HIST214", "HIST220", "HIST221", "HIST222", "HIST223", "HIST224", "HIST225", "HIST233", "HIST234", "HIST235", "HIST236", "HIST237", "HIST238", "HIST239", "HIST240", "HIST241", "HIST242", "HIST244", "HIST245", "HIST246", "HIST249", "HIST252", "HIST253", "HIST255", "HIST256", "HIST257", "HIST259", "HIST261", "HIST262", "HIST264", "HIST266", "HIST267", "HIST268", "HIST269", "HIST271", "HIST272", "HIST275", "HIST276", "HIST277", "HIST278", "HIST282", "HIST289", "HIST293", "HON120", "HON124", "HON125", "HON126", "HON131", "HON141", "HUM102", "ITAL230", "ITAL293", "JST102", "JST103", "JST124", "JST242", "LALS101", "LALS102", "LALS104", "LALS105", "LALS275", "LALS290", "MILS217", "MUS114", "MUS118", "NAST113", "NUEL244", "PHIL120", "POLS120", "PPOL230", "RELS120", "THTR101", "THTR103", "THTR159"],

    "Understanding the Creative Arts": ["ARAB270", "ARCH200", "ART110", "ART112", "ART130", "ART140", "ART150", "ART151", "ART160", "ART170", "ART190", "AH100", "AH110", "AH111", "AH122", "AH125", "AH160", "AH172", "AH180", "AH201", "AH209", "AH210", "AH211", "AH219", "AH220", "AH223", "AH230", "AH231", "AH242", "AH243", "AH244", "AH250", "AH251", "AH252", "AH259", "AH260", "AH261", "AH262", "AH263", "AH264", "AH265", "AH270", "AH271", "AH273", "AH274", "AH275", "BLST105", "BLST110", "BLST111", "BLST250", "BLST262", "CEES208", "CEES246", "CL102", "CL103", "CL204", "CL205", "CL250", "CL251", "CL252", "CL253", "CL297", "CME111", "DHD102", "DHD204", "ENGL101", "ENGL103", "ENGL104", "ENGL105", "ENGL123", "ENGL131", "ENGL132", "ENGL135", "ENGL154", "ENGL175", "ENGL207", "ENGL208", "ENGL209", "ENGL213", "ENGL223", "ENGL230", "ENGL232", "ENGL237", "ENGL245", "ENGL247", "ENGL251", "ENGL264", "ENGL267", "ENGL269", "ENGL290", "ENGL291", "ENGL292", "FR191", "FR297", "FR298", "GER100", "GER122", "GER123", "GER217", "GER219", "GLAS223", "HON121", "HON124", "HON127", "HON128", "HON132", "HON142", "IDEA110", "ITAL280", "ITAL293", "LALS109", "LALS110", "LALS260", "LALS278", "LALS295", "LCSL207", "LCSL250", "LITH130", "MUS100", "MUS107", "MUS113", "MUS114", "MUS115", "MUS117", "MUS118", "MUS119", "MUS127", "MUS227", "MUS240", "PHIL107", "POL120", "POL130", "POL140", "POL150", "POL220", "RUSS120", "RUSS130", "RUSS140", "RUSS150", "RUSS241", "RUSS242", "RUSS244", "RUSS247", "RUSS248", "SPAN210", "SPAN226", "SPED201", "THTR101", "THTR102", "THTR103", "THTR105", "THTR159", "THTR201", "THTR245"],

    "Exploring World Cultures": ["ANTH100", "ANTH101", "ANTH207", "ANTH208", "ANTH215", "ANTH216", "ANTH219", "ANTH273", "ANTH277", "ANTH279", "ARAB230", "ARAB250", "AH125", "AH172", "AH219", "AH220", "AH244", "AH263", "AH264", "AH270", "AH271", "AH273", "AH274", "AH275", "BLST101", "BLST207", "BLST221", "DHD203", "ENGL223", "FR191", "FR297", "FR298", "GWS102", "GWS255", "GWS262", "GEOG161", "GEOG203", "GER100", "GER120", "GER122", "GER123", "GER125", "GER217", "GLAS100", "GLAS201", "GLAS229", "GLAS242", "GLAS244", "GLAS248", "GLAS270", "GKM105", "GKM203", "HIST100", "HIST101", "HIST105", "HIST106", "HIST109", "HIST161", "HIST170", "HIST177", "HIST202", "HIST203", "HIST221", "HIST225", "HIST236", "HIST241", "HIST242", "HIST261", "HIST262", "HIST264", "HIST266", "HIST271", "HIST272", "HIST275", "HIST276", "HIST277", "HIST278", "HON122", "HON125", "HON127", "HON129", "HON133", "HON143", "HN202", "ITAL230", "ITAL280", "JST103", "JST203", "KOR130", "KOR230", "LALS101", "LALS104", "LALS105", "LALS108", "LALS110", "LALS220", "LALS256", "LALS260", "LALS269", "LALS275", "LALS278", "LING170", "LCSL207", "LCSL250", "LITH115", "LITH130", "MUS127", "MUS227", "NAST113", "PHIL240", "POL115", "POL120", "POL130", "POL140", "POL150", "POL220", "POLS184", "POLS231", "POLS232", "POLS243", "PPOL232", "PUBH110", "RELS101", "RELS130", "RELS230", "RELS250", "RUSS115", "RUSS116", "RUSS120", "RUSS130", "RUSS140", "RUSS150", "RUSS244", "SOC268", "SPAN192", "SPAN225", "SPAN226", "US100", "US220"],

    
  };

  // Check if the selected category exists in categoryClassNums
  if (!categoryClassNums[selectedCategory]) {
    console.error(`Category not found: ${selectedCategory}`);
    return null; // Handle the error appropriately, e.g., display an error message
  }

  const genEdCourses = coursesData.filter((course) =>
    categoryClassNums[selectedCategory].some((classNum) =>
      Object.keys(course.classes).includes(classNum)
    )
  );

  // Sort courses based on GPA
  const sortedCourses = genEdCourses
    .flatMap((item) => {
      const selectedClassNums = categoryClassNums[selectedCategory];
      return selectedClassNums.map((classNum) => {
        const classInfo = item.classes[classNum];
        if (!classInfo) return null; // Skip if classInfo is undefined
        const averageGPA = calculateAverageGPA(classInfo);
        return {
          classNum,
          className: classInfo.name,
          averageGPA,
        };
      });
    })
    .filter(Boolean); // Remove null values

  // Sort the courses based on GPA if sortOrder is specified
  if (sortOrder !== "none") {
    sortedCourses.sort((a, b) => {
      if (sortOrder === "highest") {
        return b.averageGPA - a.averageGPA;
      } else {
        return a.averageGPA - b.averageGPA;
      }
    });
  }

  const filteredCourses = sortedCourses.filter((course) =>
    course.classNum.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.className.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Selected Category:", selectedCategory);
  console.log("Filtered Courses:", filteredCourses);

  return (
    <>
      <div className="w-full min-h-screen overflow-hidden">
        <div className="flex flex-wrap justify-center px-[20%] gap-5 mt-16 mb-10">
          <div className="w-full text-center items-center">
            <a href="https://catalog.uic.edu/ucat/degree-programs/general-education/#text" target="_blanks" className="text-2xl text-ChicagoBlue hover:underline">General Education Courses</a>
          </div>

          <div className="w-full text-center flex justify-center gap-5 items-center flex-wrap">
            <label htmlFor="category" className="text-lg font-semibold">
              Select Category:
            </label>
            <select
              id="category"
              name="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full max-w-[400px] p-2 border rounded"
            >
              {Object.keys(categoryClassNums).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full text-center  flex justify-center gap-5 items-center flex-wrap">
            <label htmlFor="sortOrder" className="text-lg font-semibold">
              Sort Classes:
            </label>
            <select
              id="sortOrder"
              name="sortOrder"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className=" p-2 border rounded w-full max-w-[400px]"
            >
              <option value="none">Alphabetical &#40;A - Z&#41;</option>
              <option value="highest">Highest GPA to Lowest GPA</option>
              <option value="lowest">Lowest GPA to Highest GPA</option>
            </select>
          </div>
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
            />
          </div>
          
          <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {

              const categoryPrefix = course.classNum.replace(/\d+/g, '');

              return (
                <a href={`/courses/${categoryPrefix}/${course.classNum}`} key={course.classNum} className="border p-4">
                  <p className="font-bold">{course.classNum}</p>
                  <p>{course.className}</p>
                  <p>Average GPA: {course.averageGPA.toFixed(2)}</p>
                </a>
              );
            })}
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

export default GenEdCourses;
