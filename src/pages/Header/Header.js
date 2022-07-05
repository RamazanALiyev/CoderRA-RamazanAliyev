import React, { useState, useRef } from "react";
import "./_header.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { motion } from "framer-motion";
import { FcSearch } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useContext, Maincontext } from "../../context";
import logo from "../../assets/undraw_dev_focus_re_6iwt.svg";

function Header() {
  const { setSidebar } = useContext(Maincontext);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor("true");
    } else {
      setColor("false");
    }
  };
  window.addEventListener("scroll", changeColor);
  const popupOpen = (e) => {
    e.preventDefault();
    alert("Hal-Hazirda Axtarış Etmək Mümkün Deyil!");
    e.target.children[1].value = "";
  };
  const openSidebar = () => {
    setSidebar(true);
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  };

  const inputRef = useRef(null);
  return (
    <div className={color ? "Header Header-bg" : "Header"}>
      <div className="center">
        <div className="CoderraLogo">
          <Link className="link" to="/">
            <motion.h1
              initial={{ x: -250 }}
              animate={{ x: -10 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
            >
              <img src={logo} alt="pic" />
              <span>CoderRA</span>
            </motion.h1>
          </Link>
          <GiHamburgerMenu onClick={openSidebar} className="hamburger" />
        </div>
        <div className="HeaderNavbar">
          <motion.ul
            className="headerLists"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Link className="link" to="/courses">
              <li>Kurslarımız</li>
            </Link>
            <Link className="link" to="/instructorswiper">
              <li>Təlimçilərimiz</li>
            </Link>
            <Link className="link" to="/studentswiper">
              <li>Tələbələrimiz</li>
            </Link>
            <Link className="link" to="/connect">
              <li>Əlaqə</li>
            </Link>
            <li>
              <form onSubmit={popupOpen}>
                <FcSearch
                  className="search"
                  onClick={() => inputRef.current.focus()}
                />
                <input ref={inputRef} placeholder="Search..." />
              </form>
            </li>
            <li>
              <BsThreeDotsVertical />
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
