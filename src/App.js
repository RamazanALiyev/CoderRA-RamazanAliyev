import React, { useState } from "react";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Courses from "./components/MainCoderra/Courses/Courses";
import InstructorSwiper from "./components/MainCoderra/InstructorSwiper/InstructorSwiper";
import StudentSwiper from "./components/MainCoderra/StudentSwiper/StudentSwiper";
import { Maincontext } from "./context";
import { Routes, Route } from "react-router-dom";
import Connect from "./pages/Connect/Connect";
import Loading from './pages/Loading/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  const [apply, setApply] = useState(false);
  const [forCourseApply, setForCourseApply] = useState(false);
  setTimeout(() => {
    setLoading(false);
  }, 5000);
  const data = {
    apply,
    setApply,
    forCourseApply,
    setForCourseApply,
  };
  return (
    <Maincontext.Provider value={data}>
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/instructorswiper" element={<InstructorSwiper />} />
            <Route path="/studentswiper" element={<StudentSwiper />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Maincontext.Provider>
  );
}

export default App;
