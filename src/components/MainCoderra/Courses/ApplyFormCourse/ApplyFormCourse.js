import React from "react";
import "./_applyformcourse.scss";
import { Maincontext, useContext } from "../../../../context";
import { GiSplitCross } from "react-icons/gi";

function ApplyFormCourse() {
  const { setForCourseApply } = useContext(Maincontext);
  return (
    <div className="parentContainer">
      <div className="ApplyFormCourse"></div>
      <div className="courseForm">
        <GiSplitCross
          className="cross"
          onClick={() => {
            setForCourseApply(false);
          }}
        />
        <form>
          <h3>Müraciət Et</h3>
          <div className="text">
            <label>Ad, Soyad</label>
            <input required type="text" placeholder="Daxil Edin" />
          </div>
          <div className="email">
            <label>E-Poçt</label>
            <input required type="email" placeholder="Daxil Edin" />
          </div>
          <div className="text">
            <label>Telefon</label>
            <input required type="phone" placeholder="+994" />
          </div>
          <div className="select">
            <label>Kurs</label>
            <select>
              <optgroup label="Front-End Proqramlaşdırma">
                <option value="course1">Html, Css, Bootstrap</option>
                <option value="course1">
                  Html, Css, Bootstrap, Sass/Scss, Git, Github, Javascript
                </option>
                <option value="course1">
                  Html, Css, Bootstrap, Sass/Scss, Git, Github, Javascript,
                  React Js, TypeScript
                </option>
                <option value="course1">
                  Final Project
                </option>
              </optgroup>
            </select>
          </div>
          <button>Göndər</button>
        </form>
      </div>
    </div>
  );
}

export default ApplyFormCourse;
