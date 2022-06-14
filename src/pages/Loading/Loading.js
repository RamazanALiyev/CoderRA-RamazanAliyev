import React from "react";
import "./_loading.scss";


function Loading() {
  return (
    <div className="Loading">
      <div class="loader-wrapper">
        <div class="loader">
          <div class="loader loader-inner"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
