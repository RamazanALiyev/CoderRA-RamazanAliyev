import React from "react";
import CourseName from "./CourseName/CourseName";
import "./_courses.scss";
import { Maincontext, useContext } from "../../../context";
import ApplyFormCourse from "./ApplyFormCourse/ApplyFormCourse";
function Courses() {
  const showforCourseApply = () => {
    setForCourseApply(true);
  };
  const { forCourseApply, setForCourseApply } = useContext(Maincontext);
  return (
    <div className="Courses">
      {forCourseApply ? <ApplyFormCourse /> : null}
      <div className="center">
        <div className="top">
          <h2>Kurslarımız</h2>
          <p>Tədris etdiyimiz kurslar</p>
        </div>
        <div className="bottom">
          <CourseName
            time="1.5 ay"
            payment="Aylıq: 200 ₼"
            name="Html, Css, Bootstrap, Git, Github"
            merhele="1-ci mərhələ"
          />
          <CourseName
            time="2 ay"
            payment="Aylıq: 200 ₼"
            name="Sass / Scss, Javascript, Tailwind Css"
            merhele="2-ci mərhələ"
          />
          <CourseName
            time="2.5 ay"
            payment="Aylıq: 200 ₼"
            name="Advanced Javascript, React Js, Redux, Typescript"
            merhele="3-cü mərhələ"
          />
        </div>
        <button className="mainBtn" onClick={showforCourseApply}>
          İndi Müraciət Et
        </button>
      </div>
    </div>
  );
}

export default Courses;
