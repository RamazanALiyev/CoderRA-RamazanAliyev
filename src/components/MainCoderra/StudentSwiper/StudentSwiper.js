import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./_studentswiper.scss";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import Student1 from "../../../assets/Student1.jpeg";

export default function App() {
  return (
    <div className="Swiper">
      <h3 className="students">Tələbələrimiz</h3>
      <p className="opinion">Rəyləri</p>
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
          <img src={Student1} alt="pic" />
          <h3 className="person">Aysel Qasımova</h3>
          <p className="watcher">
            <span>'coderra.az'</span>tələbəsi
          </p>
          <hr />
          <div className="personText">
            Salam ,dersler haqqinda tek kelime ile deye bilerem ki,
            mükemmeldir🙂. İzahiniz aydindir ,dilinizi rahat şekilde anlamaq
            olur. Anlatim şekliniz elediki insan yorulmur,sıxılmır ,yeni neçe
            saat davam etse de dersiniz biz hevesle dinleyerik).Sizin derslere
            başlayanda front end haqqinda heç biliyim yox idi ,indi amma dersler
            sayesinde müeyyen qeder Html ,Css baresinde bilirem ve ümid edirem
            ki, daha da tekmilleşer🙂. Birde bu saheye nece addimladiğinizi
            çetinliklerle qarşilaşdiginizda neler etdiyinizi ,pes etmemek üçün
            nece motivasiya oldugunuzu deseniz (çünki derslerin birinde demişdiz
            ki Javascripti oyrenen de cetinliye gore bir ara proqramlasdirmanin
            basini buraxmaq isteyirdim,ona gore mene de maraqli geldi bu
            haqqinda) bizde memnun olariq ki, yol çize bilek özümüz üçün ve bu
            yol üçün de bu yolu çizmiş birinin dediklerini eşitsek daha da yaxşi
            olar mence.
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={Student1} alt="pic" />
          <h3 className="person">Ramazanlı Aytac</h3>
          <p className="watcher">
            <span>'coderra.az'</span>tələbəsi
          </p>
          <hr />
          <div className="personText">
            Bu səhifəni kəsf edəndən bəri heç bir dərsi qaçırmıram. Müəllim hər
            bir şeyi en xırda ayrıntısına kimi izah edir . Heç bir sual işarəsi
            qalmır ağılda . Həmçinin müəllim çox həvəslidir və buda bizi
            öyrənmək istəyənləri çox motive edir. Hər beyninizdə yaranan sualı
            ətraflı şəkildə izah olunur. Bundan əlavə dərslər recorda olunur
            buda ayrı bir üstünlükdür. Və dərslər həftədə 2 dəfə hətta 3 dəfə də
            olur. Müəllim çəkdiyi dərslər sayəsində bir çox şey öyrəndim.
            Temennasız şekilde bir çox tələbənin bu sahəyə olan hevesini
            canlandırdınız. Və bu özgüvəni yaratdınız .Bu sahəyə hevesi olan bir
            çox gəncə öyrənmək üçün yol açdınız. Mən bu sehifeni kəşf etdiyim
            üçün çox şanslıyam.Coderra.az xüsusi teşekkürlerimi bildirirəm.
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
