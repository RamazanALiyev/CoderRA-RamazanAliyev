import React, {useRef} from "react";
import "./_apply.scss";
import emailjs from '@emailjs/browser';
import { Maincontext, useContext } from "../../../context";
import { GiSplitCross } from "react-icons/gi";

function Apply() {
  const { setApply } = useContext(Maincontext);

  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_9lg8aql', 'template_8ws3ors', form.current, 'LwoqYB6NM1NvEQMhH')
      .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
    });

    e.target.reset();
  }
  
  const closeApplyForm = () => {
    setApply(false);
    // document.getElementsByTagName("body")[0].style.overflow = "scroll";
  };
  return (
    <div className="common">
      <div className="Apply"></div>
      <div className="center">
        <form onSubmit={sendEmail} ref={form}>
        <GiSplitCross className="cross" onClick={closeApplyForm} />
        <div className="left">
            <h3>Bizimlə Əlaqə</h3>
            <div className="text">
                <label>Ad, Soyad</label>
                <input required type='text' name="namE" placeholder="Daxil Edin"/>
            </div>
            <div className="email">
                <label>E-Poçt</label>
                <input required type='email' name="emaiL" placeholder="Daxil Edin"/>
            </div>
            <div className="text">
                <label>Telefon</label>
                <input required type='phone' name="phonE" placeholder="+994"/>
            </div>
        </div>
        <div className="right">
            <label className="first">Suallarınızı qeyd edin, ən qısa vaxtda cavablandıracağıq. Təşəkkürlər!</label>
            <textarea placeholder="Qeydinizi daxil edin" name="messagE"/>
            <label className="second">Suallarınızı qeyd edin, ən qısa vaxtda cavablandıracağıq. Təşəkkürlər!</label>
            <button type="submit">Göndər</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Apply;
