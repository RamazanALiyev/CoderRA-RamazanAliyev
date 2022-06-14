import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);
  return <div></div>;
};

export default ToTop;
