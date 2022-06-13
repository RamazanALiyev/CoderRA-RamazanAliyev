import React from "react";
import { Link } from "react-router-dom";
import "./_motivation.scss";

function Motivation() {
  return (
    <div className="Motivation">
      <div className="center">
        <div className="left">
          <p>Proqramlaşdırma öyrənməyə bugündən başla!</p>
          <Link className="link" to='/courses'><h5>CoderRA-a gəl</h5></Link>
        </div>
        <div className="right">
        <iframe width="600" height="400" src="https://www.youtube.com/embed/Jk1CEXwwrt8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default Motivation;
