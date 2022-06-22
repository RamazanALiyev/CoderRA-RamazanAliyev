import React, { useRef } from "react";
import "./_connect.scss";
import emailjs from "@emailjs/browser";
import { GoLocation, GoClock } from "react-icons/go";
import { AiFillPhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { useLocation } from "react-router-dom";

function Connect() {
  const param = useLocation();
  console.log(param.pathname);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9lg8aql",
        "template_8ws3ors",
        form.current,
        "LwoqYB6NM1NvEQMhH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="Connect">
      <div className="center">
        <div className="connectInfo">
          <div className="eachDiv">
            <div className="iconDiv">
              <GoLocation className="icon" />
            </div>
            <h3>Ünvan</h3>
            <p>Online</p>
          </div>
          <div className="eachDiv">
            <div className="iconDiv">
              <GoClock className="icon" />
            </div>
            <h3>İş saatları</h3>
            <p>10:00-21:00</p>
          </div>
          <div className="eachDiv">
            <div className="iconDiv">
              <AiFillPhone className="icon" />
            </div>
            <h3>Telefon</h3>
            <p>+994556936913(WP)</p>
          </div>
          <div className="eachDiv">
            <div className="iconDiv">
              <FiMail className="icon" />
            </div>
            <h3>Email</h3>
            <p>aliyev.ramazan98@gmail.com</p>
          </div>
        </div>
        <form onSubmit={sendEmail} ref={form}>
          <div className="left">
            <h3>Bizimlə Əlaqə</h3>
            <div className="text">
              <label>Ad, Soyad</label>
              <input
                required
                type="text"
                placeholder="Daxil Edin"
                name="namE"
              />
            </div>
            <div className="email">
              <label>E-Poçt</label>
              <input
                required
                type="email"
                placeholder="Daxil Edin"
                name="emaiL"
              />
            </div>
            <div className="text">
              <label>Telefon</label>
              <input required type="phone" placeholder="+994" name="phonE" />
            </div>
          </div>
          <div className="right">
            <label>
              Suallarınızı qeyd edin, ən qısa vaxtda cavablandıracağıq.
              Təşəkkürlər!
            </label>
            <textarea placeholder="Qeydinizi daxil edin" name="messagE" />
            <button type="submit">Göndər</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Connect;
