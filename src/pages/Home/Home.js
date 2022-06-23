import React, { useEffect } from "react";
import "./_home.scss";
import Entry from "../../components/MainCoderra/Entry/Entry";
import Courses from "../../components/MainCoderra/Courses/Courses";
import Motivation from "../../components/MainCoderra/Motivation/Motivation";
import InstructorSwiper from "../../components/MainCoderra/InstructorSwiper/InstructorSwiper";
import SwiperStudent from "../../components/MainCoderra/StudentSwiper/StudentSwiper";
import Newsabout from "../../components/MainCoderra/Newsabout/Newsabout";
import { Helmet } from "react-helmet";
function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="Home">
      <Helmet>
        <title>CoderRA</title>
      </Helmet>
      <Entry />
      <Courses />
      <Motivation />
      <InstructorSwiper />
      <SwiperStudent />
      <Newsabout />
    </div>
  );
}

export default Home;
