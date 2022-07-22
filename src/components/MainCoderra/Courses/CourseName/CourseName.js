import React from "react";
import "./_coursename.scss";
import { Link } from 'react-router-dom'

function CourseName({ name, payment, time, merhele }) {
  return (
    <Link className="linkCourse" to='/coursedetail'>
      <div className="CourseName">
        <h4>Front-End Proqramlaşdırma</h4>
        <p>{merhele}</p>
        <p>{name}</p>
        <div>
          <span className="payment">{time}</span>
          <span className="time">{payment}</span>
        </div>
      </div>
    </Link>
  );
}

export default CourseName;
