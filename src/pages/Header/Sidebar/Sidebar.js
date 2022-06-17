import React from "react";
import "./_sidebar.scss";
import { GiCancel } from "react-icons/gi";
import { useContext, Maincontext } from "../../../context";
import { Link } from "react-router-dom";
import Interestingload from "./InterestingLoad/Interestingload";

function Sidebar() {
  const { setSidebar } = useContext(Maincontext);
  const closeSidebar = () => {
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
    setSidebar(false);
  };
  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-header">
          <Link onClick={closeSidebar} className="titleLink" to="/">
            <h1 className="title">CoderRA</h1>
          </Link>
          <GiCancel onClick={closeSidebar} className="cancel" />
        </div>
        <ul className="menu-links">
          <Link onClick={closeSidebar} className="link" to="/courses">
            <li>Kurslarımız</li>
          </Link>
          <Link onClick={closeSidebar} className="link" to="/instructorswiper">
            <li>Təlimçilərimiz</li>
          </Link>
          <Link onClick={closeSidebar} className="link" to="/studentswiper">
            <li>Tələbələrimiz</li>
          </Link>
          <Link onClick={closeSidebar} className="link" to="/connect">
            <li>Əlaqə</li>
          </Link>
        </ul>
        <div className="sidebar-bottom-loading">
          <Interestingload />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
