import React, { useEffect } from "react";
import "./_home.scss";
import Entry from '../../components/MainCoderra/Entry/Entry';
import Courses from '../../components/MainCoderra/Courses/Courses';
import Motivation from '../../components/MainCoderra/Motivation/Motivation';
import InstructorSwiper from '../../components/MainCoderra/InstructorSwiper/InstructorSwiper';
import SwiperStudent from '../../components/MainCoderra/StudentSwiper/StudentSwiper';

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
    </div>
  );
}

export default Home;
