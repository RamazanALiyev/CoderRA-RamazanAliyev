import React from "react";
import "./_loading.scss";
import { Helmet } from "react-helmet";

function Loading() {
  return (
    <div className="Loading">
      <Helmet>
        <title>Loading</title>
      </Helmet>
      <div class="loader"></div>
    </div>
  );
}

export default Loading;
