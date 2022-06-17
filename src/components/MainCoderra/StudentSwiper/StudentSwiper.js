import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./_studentswiper.scss";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import Student1 from "../../../assets/Student1.jpeg";
import Student2 from "../../../assets/Student2.jpeg";
import Student3 from "../../../assets/Student3.jpeg";
import StudentAnonimWoman from "../../../assets/Student4.jpeg";

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
            saat davam etse de dersiniz biz hevesle dinleyerik. Sizin derslere
            başlayanda front end haqqinda heç biliyim yox idi ,indi amma dersler
            sayesinde müeyyen qeder Html ,Css baresinde bilirem ve ümid edirem
            ki, daha da tekmilleşer🙂. Birde bu saheye nece addimladiğinizi
            çetinliklerle qarşilaşdiginizda neler etdiyinizi ,pes etmemek üçün
            nece motivasiya oldugunuzu deseniz (çünki derslerin birinde demişdiz
            olar mence. ki Javascripti oyrenen de cetinliye gore bir ara
            proqramlasdirmanin basini buraxmaq isteyirdim,ona gore mene de
            maraqli geldi bu haqqinda) bizde memnun olariq ki, yol çize bilek
            özümüz üçün ve bu yol üçün de bu yolu çizmiş birinin dediklerini
            eşitsek daha da yaxşi
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={Student2} alt="pic" />
          <h3 className="person">Hamid Pashayev</h3>
          <p className="watcher">
            <span>'coderra.az'</span>tələbəsi
          </p>
          <hr />
          <div className="personText">
            Ramazan müəllimin keçdiyi front end dərsləri bir çox tədrisçilərin
            keçdiyi dərslərdən müəyyən kriteriyalarına görə çox fərqlənir. Ən
            bəsit mərhələlərin izahında belə Ramazan müəllim bizdən hər hansı
            qaranlıq qalan məsələ haqqında suallarımızı verməyimizi istəyir,
            sual yaranarsa belə tələbə tam başa düşənə və praktikada tətbiq edə
            bilənə qədər təkrar izah edir. Praktika qeyd etmişkən, hər bir dərs
            mütləq və mütləq nümunələr üzərində izah edilir, dərsdən sonra
            müstəqil işləmək üçün tapşırıqlar verilir.Dərsdənkənar müstəqil
            çalışmaları həll edərkən tələbənin sualları olarsa, müəllim köməklik
            göstərir.
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={Student3} alt="pic" />
          <h3 className="person">Elchin Sadatov</h3>
          <p className="watcher">
            <span>'coderra.az'</span>tələbəsi
          </p>
          <hr />
          <div className="personText">
            İlk öncə salam .demək istədiyim front-endə yonələndən sonra evdə tək
            özün öyrənmək açıqcası çox çətin oldu . 1 gün internetdən öyrəndim 2
            günü bəhanələrlə özümü aldadaraq davam edirdim . Təsadüf İnstagramda
            gəzən zaman sizin Coderra səhifənizi gördüm. və dərslərinizə
            qoşuldum .həqiqətən çox anlaşılır şəkildə izahınızla bir çox şeyi
            öyrənmiş oldum və davam edirəm. çox insan belə bir yaxşılıq eləməz .
            bildiklənizi bizimlə bölüşdüyünüzə görə sizə çox təşəkkür edirəm
            müəllim.ümid varam məndə sizin kimi front-endi oyrenib bir developer
            ola bilərəm.🙂
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={StudentAnonimWoman} alt="pic" />
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
        <SwiperSlide className="swiper-slide">
          <img src={StudentAnonimWoman} alt="pic" />
          <h3 className="person">Gülbarə Əliyeva</h3>
          <p className="watcher">
            <span>'coderra.az'</span>tələbəsi
          </p>
          <hr />
          <div className="personText">
            Mən bu dərslərə qoşulan zaman demək olar ki, həm html,həm də css
            haqqında çox az məlumatım var idi.Dərslər çox aydın və hər kəsin
            rahatlıqla öyrənə biləcəyi şəkildə keçirilir.İstər dərs
            müddətində,istərsə dərsdən əlavə zamanda bütün suallarımızı verə
            bilirik.Müəllimə bütün suallarımızı çox dəqiq və rahat şəkildə izah
            etdiyi üçün təşəkkür edirəm✨Həmçinin hər dərsdən sonra ev
            tapşırıqlarının verilməsi və dərs izahı zamanı hər bir qaydaya uyğun
            nümunələr göstərilməsi də çox böyük üstünlükdür.Çünki dərs zamanı
            öyrəndiklərimizi praktika ilə daha çox inkişaf etdirə bilirik.Bu
            dərslər mənə xüsusilə universitet dərslərində və final imtahanında
            çox kömək oldu. Hər şey üçün təşəkkür edirəm🌼
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
