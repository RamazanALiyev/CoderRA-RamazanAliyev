import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ramazan from "../../../assets/RamazanBuz.png"
import "./_instructorswiper.scss";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default function App() {
  return (
    <div className="Swiper swi">
      <h3 className="students">Təlimçilərimiz</h3>
      <p className="about">Haqqında</p>
      <Swiper
        autoplay={{
          delay: 4000,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <img src={ramazan} alt="pic" />
          <h3 className="person"><a href="https://ramazanaliyev.netlify.app/">Ramazan Aliyev</a></h3>
          <p className="watcher">
            <span>'coderra.az'</span>təlimçisi
          </p>
          <hr />
          <div className="personText">
            Salam, mənim adım Ramazandır. 24 yaşım var. Azərbaycan Dövlət Neft
            və Sənaye Universitetinin Neft Mexanika fakültəsinin Mexanika
            Mühəndisliyi ixtisası təhsilinin bakalavr və magistr dərəcələrində
            təhsil almışam. CoderRA-nın TeamLeader-i və qurucusuyam. Eyni
            zamanda CoderRA-da Təlimçi vəzifəsində istirak edirəm. İxtisasım
            fərqli kontentdə olsada proqramlaşdırmaya olan marağm nəticəsində
            artıq 1 ildən çox olaraq Front-End Proqramlaşırma sahəsindəyəm.
            İlkin olaraq məqsədim Front-End Proqramlaşdırma öyrənmək istəyən
            dostlarımıza dəstək olmaq və onlara bu yolda maksimum köməklik
            göstərə bilməyimdir. Buna görə ödənişsiz olaraq öz bilik çərçivəmdə
            bu məqsədimi reallaşdırmağa çalışıram. Düşünürəmki imkan daxilində
            hər birimiz bu kimi addımları atsaq cəmiyyətiiz üçün çox faydalı ola
            bilər. Mənim haqqımda ümumi məlumatlar üçün Portfolio səhifəmə keçid
            edə bilərsiniz!
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
