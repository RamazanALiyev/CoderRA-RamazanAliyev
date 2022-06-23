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
            time="2 ay"
            payment="Aylıq: 50 ₼"
            name="Html, Css, Bootstrap"
          />
          <CourseName
            time="4 ay"
            payment="Aylıq: 50 ₼"
            name="Html, Css, Bootstrap, Sass/Scss, Git, Github, Javascript"
          />
          <CourseName
            time="7 ay"
            payment="Aylıq: 50 ₼"
            name="Html, Css, Bootstrap, Sass/Scss, Git, Github, Javascript, React Js, Final Project"
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
