import React from "react";
import "./_home.scss";
import Entry from '../../components/MainCoderra/Entry/Entry';
import Courses from '../../components/MainCoderra/Courses/Courses';
import Motivation from '../../components/MainCoderra/Motivation/Motivation';
import InstructorSwiper from '../../components/MainCoderra/InstructorSwiper/InstructorSwiper';
import SwiperStudent from '../../components/MainCoderra/StudentSwiper/StudentSwiper';
import Instagram from "../../components/MainCoderra/Instagram/Instagram";
import { useEffect } from "react";

function Home() {
  useEffect(() =>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }, [])
  return (
    <div className="Home">
      <Entry />
      <Courses />
      <Motivation />
      <InstructorSwiper />
      <SwiperStudent />
      <Instagram />
    </div>
  );
}

export default Home;
