import React from "react";
import "./_apply.scss";
import { Maincontext, useContext } from "../../../context";
import { GiSplitCross } from "react-icons/gi";

function Apply() {
  const { setApply } = useContext(Maincontext);
  const closeApplyForm = () => {
    setApply(false);
    // document.getElementsByTagName("body")[0].style.overflow = "scroll";
  };
  return (
    <div className="common">
      <div className="Apply"></div>
      <div className="center">
        <form>
        <GiSplitCross className="cross" onClick={closeApplyForm} />
        <div className="left">
            <h3>Bizimlə Əlaqə</h3>
            <div className="text">
                <label>Ad, Soyad</label>
                <input required type='text' placeholder="Daxil Edin"/>
            </div>
            <div className="email">
                <label>E-Poçt</label>
                <input required type='email' placeholder="Daxil Edin"/>
            </div>
            <div className="text">
                <label>Telefon</label>
                <input required type='phone' placeholder="+994"/>
            </div>
        </div>
        <div className="right">
            <label className="first">Suallarınızı qeyd edin, ən qısa vaxtda cavablandıracağıq. Təşəkkürlər!</label>
            <textarea placeholder="Qeydinizi daxil edin"/>
            <label className="second">Suallarınızı qeyd edin, ən qısa vaxtda cavablandıracağıq. Təşəkkürlər!</label>
            <button>Göndər</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Apply;
