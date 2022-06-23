import React from "react";
import "./_loading.scss";
import { Helmet } from "react-helmet";

function Loading() {
  return (
    <div className="Loading">
      <Helmet>
        <title>Loading</title>
      </Helmet>
      <div className="loader-wrapper">
        <div className="loader">
          <div className="loader loader-inner"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
