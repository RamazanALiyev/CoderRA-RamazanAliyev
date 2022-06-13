import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import "./entry.scss";
import ramazan from "../../../assets/ramazan 1.svg";
import { motion } from "framer-motion";
import Apply from "../Apply/Apply";
import { Maincontext, useContext } from "../../../context";

function Entry() {
  const {apply, setApply} = useContext(Maincontext);
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const ShowApplyForm = () => {
    setApply(true);
    // document.getElementsByTagName("body")[0].style.overflow = "hidden";
  };
  return (
    <div className="Entry">
      {apply ? <Apply /> : null}
      <div className="center">
        <div className="EntryLeft">
          <motion.h2
            className="Welcome"
            initial={{ x: -600 }}
            animate={{ x: 0 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 50 }}
          >
            CoderRA Web Səhifəsinə <span>Xoş Gəlmisiniz!</span>
          </motion.h2>
          <motion.p
            className="titleInformation"
            initial={{ x: -600 }}
            animate={{ x: 0 }}
            transition={{ delay: 1.8, type: "spring", stiffness: 50 }}
          >
            <span>CoderRA</span> komandası olaraq bizim məqsədimiz <span>Front-End Proqramlaşdırma</span> biliklərinə yiyələnmək istəyən
            hər bir tələbələrimizə bu yolda dəstək olmaq və müəyyən bir yol xəritəsi ilə <span>Front-End Proqramlaşdırma</span>nı
            nəzəri və xüsusilə də praktiki olaraq onlara mənimsətməkdir.
          </motion.p>
          <motion.button
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.2 }}
            variants={variants}
            onClick={ShowApplyForm}
          >
            Müraciət Et
          </motion.button>
          <div className="socialIcons">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, type: "spring", stiffness: 50 }}
            >
              <BsInstagram />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, type: "spring", stiffness: 50 }}
            >
              <FaTiktok />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6, type: "spring", stiffness: 50 }}
            >
              <BsWhatsapp />
            </motion.div>
          </div>
        </div>
        <div className="EntryRight">
          <motion.img
            src={ramazan}
            alt="personpicture"
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 50 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Entry;
