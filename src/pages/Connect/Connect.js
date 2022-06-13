import React from "react";
import "./_connect.scss";
import { GoLocation, GoClock } from "react-icons/go";
import { AiFillPhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

function Connect() {
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
        <form>
          <div className="left">
            <h3>Bizimlə Əlaqə</h3>
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
          </div>
          <div className="right">
            <label>
              Suallarınızı qeyd edin, ən qısa vaxtda cavablandıracağıq.
              Təşəkkürlər!
            </label>
            <textarea placeholder="Qeydinizi daxil edin" />
            <button>Göndər</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Connect;
