import React from "react";
import "./_loading.scss";


function Loading() {
  return (
    <div className="Loading">
      <div className="loader-wrapper">
        <div className="loader">
          <div className="loader loader-inner"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
