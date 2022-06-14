import React, {useRef, useState} from "react";
import "./_applyformcourse.scss";
import emailjs from '@emailjs/browser';
import { Maincontext, useContext } from "../../../../context";
import { GiSplitCross } from "react-icons/gi";

function ApplyFormCourse() {
  const [status, setStatus] = useState(null)

  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_9lg8aql', 'template_7qy5qyq', form.current, 'LwoqYB6NM1NvEQMhH')
      .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
    });

    e.target.reset();
}

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
        <form onSubmit={sendEmail} ref={form}>
          <h3>Müraciət Et</h3>
          <div className="text">
            <label>Ad, Soyad</label>
            <input required type="text" name="name" placeholder="Daxil Edin" />
          </div>
          <div className="email">
            <label>E-Poçt</label>
            <input required type="email" name="email" placeholder="Daxil Edin" />
          </div>
          <div className="text">
            <label>Telefon</label>
            <input required type="phone" name="phone" placeholder="+994" />
          </div>
          <div className="select">
            <label>Kurs</label>
            <select onChange={(e) => setStatus(e.target.value)} name='status' value={status}>
              <optgroup label="Front-End Proqramlaşdırma">
                <option value="Html, Css, Bootstrap" name={status}>Html, Css, Bootstrap</option>
                <option value="Html, Css, Bootstrap, Sass/Scss, Git, Github, Javascript" name={status}>
                  Html, Css, Bootstrap, Sass/Scss, Git, Github, Javascript
                </option>
                <option value="Html, Css, Bootstrap, Sass/Scss, Git, Github, Javascript,
                  React Js, TypeScript" name={status}>
                  Html, Css, Bootstrap, Sass/Scss, Git, Github, Javascript,
                  React Js, TypeScript
                </option>
                <option value="Final Project" name={status}>
                  Final Project
                </option>
              </optgroup>
            </select>
          </div>
          <button type="submit">Göndər</button>
        </form>
      </div>
    </div>
  );
}

export default ApplyFormCourse;
