import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./_coursedetail.scss";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Helmet } from "react-helmet";
export default function App() {
  return (
    <div className="Swiper swi">
      <Helmet>
        <title>Mövzular</title>
      </Helmet>
      <h3 className="students">Mövzular</h3>
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
          <div className="personText">
            <h2 className="subjectTitle">HTML</h2>
            <hr />
            <p className="subjectText">
              HTML - HyperText Markup Language veb səhifələr yaratmaq üçün
              istifadə olunan standart mətn işarələmə dilidir. Dilin ən son
              versiyası HTML5-dir. HTML proqramlaşdırma dili kimi müəyyən edilə
              bilməz. Çünki öz-özünə işləyən proqram HTML kodları ilə yazıla
              bilməz. Yalnız bu dili şərh edə bilən proqramlar vasitəsilə işləyə
              bilən proqramlar yazıla bilər. Məhz buna görə də onu
              proqramlaşdırma dili adlandırmaq olmaz. Əsas tələb mətn, şəkillər,
              videolar və onları ehtiva edən səhifələr kimi müxtəlif məlumatları
              sadəcə əlaqələndirmək və əlavə olaraq veb-brauzer proqramı
              tərəfindən sözügedən səhifələrin düzgün şəkildə göstərilməsi üçün
              lazımi qaydaları müəyyən etməkdir. Veb brauzerlər HTML kodunu
              oxuyur, şərh edir və göstərir, buna görə də eyni HTML kodu
              müxtəlif brauzerlərdə fərqli nəticələr verə bilər. CSS və
              JavaScript ilə istifadə edildikdə, HTML vasitəsilə vizual və
              dinamik veb saytlar yaradıla bilər. O, kiçik və böyük işarələri
              arasında yazılmış HTML əmrlərindən istifadə etməklə yazılır. Onlar
              tez-tez işarələnmiş mətnin əvvəlini və sonunu göstərmək üçün
              cüt-cüt istifadə olunur. Bununla belə, mətndə işarə əvəzinə işarə
              qoyulacaqsa, onlar tək istifadə oluna bilər.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="personText">
            <h2 className="subjectTitle">CSS</h2>
            <hr />
            <p className="subjectText">
              CSS - ingilis dilində "Cascading Style Sheets" mənasını verir ki,
              bu da "Cascading Style Layers" deməkdir. "CSS nədir?" Sualın
              cavabını vebsaytların vizual formalaşdırılmasına imkan verən və öz
              qaydalarına malik olan tərif dili kimi ifadə etmək olar. HTML və
              JavaScript ilə birlikdə ən əsas veb texnologiyaları arasında olan
              CSS veb səhifələrdə çoxlu vizual nəzarət təklif edir. CSS ilə siz
              veb səhifələrin tərtibatı, rəngləri, istifadə olunan şriftlər,
              başlıqlar, vizual effektlər və digər vizual elementlər üzərində
              effektiv və funksional nəzarəti təmin edə bilərsiniz. İstifadəçi
              dostu və vizual olaraq təsirli vebsaytlar üçün HTML və
              JavaScript-ə əlavə olaraq yazılmış CSS kodları son dərəcə
              vacibdir. Effektiv CSS kodlaşdırması veb-saytlara yüksək istifadə
              imkanı verir. CSS həm də veb səhifələrin dizaynını çox
              asanlaşdıran və böyük rahatlıq təmin edən çevikliyi ilə seçilir.
              Bu xüsusiyyət sayəsində çox qısa müddətdə veb səhifələrinizin
              hamısında və ya yalnız müəyyən hissələrində yeniləmələr edə
              bilərsiniz. CSS ilə bir veb-saytdakı bütün səhifələrin və ya
              yalnız istədiyiniz səhifənin vizual xüsusiyyətləri olduqca
              asanlıqla idarə edilə bilər.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="personText">
            <h2 className="subjectTitle">Bootstrap</h2>
            <hr />
            <p className="subjectText">
              Bootstrap, istifadə edilə bilən kod parçalarından ibarət açıq
              mənbə və pulsuz veb proqram inkişaf alətləri dəstidir. Onun CSS və
              JavaScript şablonları istifadəçilərə görünən vebsaytların və mobil
              proqramların komponentləri üçün istifadə olunur. HTML, CSS, Less,
              Sass və JavaScript dillərində yazılmış Bootstrap, tam interaktiv
              və həssas veb proqramlar hazırlamaq üçün istifadə oluna bilən asan
              öyrənilən alternativdir. Skeletlər veb-saytların qurulduğu
              təməllərdir. Ön hissə çərçivəsi və alətlər dəsti olan Bootstrap
              Twitter mühəndisləri Mark Otto və Jacob Thornton tərəfindən
              hazırlanmışdır. Onun əsas məqsədi veb proqramlarını sürətli, rahat
              və daha həssas hala gətirməkdir. Bootstrap hazırda cavab verən və
              mobil ilk vebsaytları hazırlamaq üçün ən populyar CSS
              çərçivəsidir. O, həssas və mobil yönümlü veb-saytlar yaratmaq üçün
              çox böyük alət olsa da, W3.CSS adlı daha yığcam, daha sürətli və
              istifadəsi asan alternativ də var. Bootstrap-ın üstünlükləri Bu
              gün insanlar müxtəlif aparat xüsusiyyətləri, əməliyyat sistemləri,
              ekran ölçüləri və qarşılıqlı əlaqə üsulları ilə çoxlu müxtəlif
              cihazlardan istifadə edirlər. Noutbuklardan tutmuş smartfonlara
              qədər bir vebsaytın bütün cihazlarla uyğunluğu günümüzün
              zərurətinə çevrilib. Bootstrap ilə yaradılmış vebsaytların
              interfeysi bu gün və sabah istifadə olunan bütün ekran ölçülərinə
              avtomatik uyğunlaşır. Bu uyğunluq o deməkdir ki, iş masası
              təcrübəsində səliqəli görünən veb-səhifəyə mobil cihazda da baxmaq
              və onunla qarşılıqlı əlaqə yaratmaq olar. Bundan əlavə, Bootstrap
              ilə veb inkişafı bir çox başqa üstünlüklərə malikdir: Daha sürətli
              inkişaf: Bootstrap-ın ən böyük üstünlüklərindən biri keyfiyyətdən
              ödün vermədən veb inkişaf layihələrini sürətləndirməsidir.
              Bootstrap olmadan cavab verən veb-saytların və proqramların
              hazırlanması uzun müddət çəksə də, bu alət dəsti tələb olunan
              vaxtı xeyli azaldır. İstifadəsi asandır: HTML və CSS-ə giriş
              biliyi olan hər kəs Bootstrap istifadə edərək vebsaytlar,
              proqramlar və mövzular hazırlaya bilər. Cavab verən dizayn:
              Bootstrap-ın ticarət nişanlarından biri yuxarıda qeyd etdiyimiz
              həssas dizaynları asanlaşdırmaqdır. Bootstrap ilə hazırlanmış
              cavab verən veb-saytlar avtomatik olaraq bütün ekran ölçülərinə
              uyğunlaşır. Dizaynın davamlılığı: Bootstrap ilə hazırlanmış veb
              səhifə Firefox, Chrome, Edge, Opera və Safari kimi bütün müasir
              veb brauzerlərdə eyni görünür. Açıq mənbə: Bootstrap-ın ən yaxşı
              cəhəti onun açıq mənbə və tamamilə pulsuz olmasıdır. Bir çox
              tərtibatçılar bu platformada hazırladıqları resursları pulsuz və
              ödənişli olaraq başqalarına təqdim edirlər. Bu resurslardan
              vebsaytlar və proqramlar hazırlamaq üçün istifadə oluna bilər.
              Fərdiləşdirmə: Bootstrap veb saytınızda və tətbiqinizdə də
              istifadə edə biləcəyiniz əvvəlcədən quraşdırılmış komponentlərlə
              gəlir. Siz naviqasiya panelləri, açılan menyular, düymələr və s.
              kimi istənilən dizayn elementlərini seçə və istifadə edə
              bilərsiniz. Alətlər dəstini Bootstrap-ın saytından yükləməzdən
              əvvəl bəzi funksiyaları seçmək və yalnız istədiyinizi yükləmək və
              ondan istifadə etməyə başlamaq da mümkündür. Sənədləşdirmə: Əgər
              siz Bootstrap-ı araşdırmaq istəyirsinizsə, hər bir kod parçası
              üçün təsviri və izahedici məzmun təqdim edən vebsaytdakı
              sənədlərdən yararlana bilərsiniz. Bu təsvirlərə daxil edilən kod
              nümunələri başlanğıc tərtibatçıların işini xeyli asanlaşdırır.
              Mövzular: Bootstrap əsasında hazırlanmış veb mövzuları yeni bazara
              çevrildi. Siz tərtibatçılar və dizaynerlər tərəfindən hazırlanmış
              Bootstrap əsaslı şablonları götürə və onlardan birbaşa öz
              layihələrinizdə istifadə edə və ya öz layihələrinizi sata
              bilərsiniz.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="personText">
            <h2 className="subjectTitle">Sass/Scss</h2>
            <hr />
            <p className="subjectText">
              SASS və SCSS anlayışları mütləq bu və ya digər şəkildə Front-End
              tərtibatçılarına qarşı çıxır. İstifadə səbəbini və məqsədini
              oxuyanlar əvvəlcə bunu "lazımsız" kimi görsələr də, təklif
              etdikləri imkanlar və yazı imkanları səbəbindən bu texnologiyalar
              zamanla əvəzolunmaz hala gəlir.SASS Syntactically Awesome
              Stylesheets deməkdir. Çox mənalı olmasa da, türk dilinə "Sintaktik
              Awesome Style Sheets" kimi tərcümə oluna bilər. Məncə, onun
              tərifindən çox funksiyasına diqqət yetirmək lazımdır. SASS-ı
              CSS-nin proqramlaşdırma dilinə tərcüməsi kimi izah edə bilərik.
              2006-cı ildə Hampton Catlin tərəfindən buraxıldı və bu gün fərqli
              adlarla inkişaf etdirilməyə davam edir. O, Ruby proqramlaşdırma
              dilinin paket strukturu əsasında hazırlanmışdır. Yəni əvvəllər
              Ruby-də proqram hazırlamısınızsa, SASS-a alışmaq sizin üçün çətin
              olmayacaq. Front-End tərtibatçıları bir müddətdən sonra CSS
              kodlarının təkrarlanan bir quruluşa sahib olduğunu görməlidirlər.
              İç-içə elementlər üçün seçmə yazarkən uzun ifadələr yarana bilər.
              Eyni rəng kodunu dəfələrlə kopyalayıb yapışdırmalı ola bilərsiniz.
              Burada SASS məhz bu vəziyyətlər üçün yaradılmış strukturdur.
              Beləliklə, SASS bir CSS preprosessorudur. Yazdığınız kodları
              proqramlaşdırma dilinizin məntiqi və strukturunda yığıb CSS
              kodlarına çevirir.SASS-ın CSS-nin proqramlaşdırma dili olduğunu
              deyə bilərik. SASS sayəsində dəyişənlər, iç-içə strukturlar,
              sındırılan və daxil edilən fayllar, miksinlər dediyimiz və
              proqramlaşdırma, miras, if else kimi məntiqi müqayisələrdəki
              funksiyalarla müqayisə edilə bilən strukturlar kimi bir çox
              strukturlardan istifadə edərək CSS faylları yarada bilərik.
              Linkdəki proqramlardan hər hansı birini istifadə edə bilərsiniz.
              Ancaq məsləhətim odur ki, belə proqramların yerinə istifadə
              etdiyiniz redaktorda SASS plagini quraşdırın.Məsələn, mən
              hal-hazırda Visual Studio Code-dan istifadə edirəm və Sass,
              Beautify Sass və Live Sass kimi plaginlərlə SASS kodlarını
              asanlıqla CSS-ə çevirə bilirəm. Kompilyator.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="personText">
            <h2 className="subjectTitle">Git</h2>
            <hr />
            <p className="subjectText">
              Git proqram tərtibatçıları üçün qısa müddət ərzində əvəzolunmaz
              hala gələn versiyaya nəzarət sistemidir. İnternetdə yazdığımız
              layihələri kompüterimizdə və ya xarici disklərdə deyil, internetdə
              saxlayıb idarə etməyimizi təmin edən bir sistemdir. Niyə Git-dən
              istifadə etməliyik? 1- Versiya idarəetməsinin asanlığı
              preferences-system-session-512 Əgər layihənizi kompüterinizdə,
              xarici diskdə və ya bulud sistemində saxlayırsınızsa, layihənizdə
              səhv və ya problem yaratmaq imkanlarını nəzərə alaraq daima
              layihənizin ehtiyat nüsxəsini çıxartmalısınız. Bu səbəbdən layihə
              versiyanızı versiyaya görə saxlamağa başlayırsınız. Layihənizin
              ölçüsündən asılı olaraq, bu proses olduqca mürəkkəb ola bilər.
              Git-dən istifadə edirsinizsə, bu problemlə üzləşməməlisiniz.
              Layihənizin son saxlanmış versiyasına istənilən vaxt daxil ola
              bilərsiniz və ya istənilən günə qayıda bilərsiniz. 2- Eyni
              layihədə eyni vaxtda birdən çox adam işləyir Əgər siz eyni vaxtda
              və ya müxtəlif vaxtlarda birdən çox insanla eyni layihə üzərində
              işləyirsinizsə, kodlarınızı birləşdirmək və ya dəyişdirmək olduqca
              çətindir. Ancaq git istifadə edirsinizsə, bu əməliyyatları etmək
              çətin olmayacaq. 😉 3- Offline istifadə edilə bilər Bu xüsusiyyət
              digər versiyaya nəzarət sistemlərindən fərqli olaraq heç bir
              şəbəkəyə qoşulmadan layihənizi inkişaf etdirməyə imkan verir.
              Layihə əksər sistemlərdə həmişə mərkəzi nöqtədə olsa da, Git-də
              layihənin surəti hər bir istifadəçinin kompüterində mövcuddur,
              beləliklə siz layihələri oflayn olaraq inkişaf etdirə bilərsiniz.
              4- Sürətlidir və az yer tutur Həmçinin, Git kompüterinizdə yerə
              qənaət edir və olduqca sürətli işləyir.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="personText">
            <h2 className="subjectTitle">Github</h2>
            <hr />
            <p className="subjectText">
              GitHub; Bu, böyük bir komandanın versiyaya nəzarət sistemində
              proqram təminatı hazırlayarkən istifadə edə biləcəyi internet
              əsaslı saxlama xidmətidir. GitHub, Git idarəetmə sistemi ilə
              hazırlanmış proqram təminatında istifadə olunur. Açıq mənbəli bir
              xidmət olduğundan, bir çox proqram qrupu tərəfindən istifadə
              edilir və hazırlanır. GitHub xidmətindən neçə nəfərin istifadə
              etməsinin və eyni anda bir layihə üzərində neçə nəfərin
              işləməsinin əhəmiyyəti yoxdur. Xidmətə qoşulmaq və layihə üzərində
              işləmək üçün internet bağlantısı tələb olunur. İnternet əsaslı
              olduğundan, bütün komanda GitHub xidməti ilə layihədə edilən
              dəyişiklikləri görə bilər. GitHub xidməti sayəsində hətta bir çox
              insandan ibarət böyük proqram tərtibatçısı komandaları eyni vaxtda
              eyni layihə üzərində işləyə və ayrıca dəyişikliklər edə bilərlər.
              Bu xidmət vasitəsilə hazırlanmış layihələrdə komanda çox vaxta
              qənaət edir. Eyni əməliyyatlar təkrar-təkrar edilmədiyi üçün heç
              bir ziddiyyət yaranmır və uzun görüşlərdə qərar veriləcək şeylər
              bu xidmət vasitəsilə göstərilə və tez təsdiqlənə bilər. GitHub
              təkcə tərtibatçılar komandasının deyil, həm də proqram təminatını
              hazırladıqları müştərinin istifadə edə biləcəyi bir məkan təqdim
              edir. Deyək ki, komanda proqram təminatını hazırlayıb təqdim edib.
              Bununla belə, müştəri layihəyə bəzi dəyişikliklər etmək istəyir.
              GitHub xidməti vasitəsilə lazımi tənzimləmələr və yeniləmələr
              edərək kommunikasiya prosesini sürətləndirə bilər. Edilən
              dəyişikliklər təsdiq olunmadan əsas layihəyə daxil edilmədiyi üçün
              hər kəs öz tənzimləməsini edərək öz fikrini irəli sürə bilər.
              GitHub-dan istifadə etməzdən əvvəl bilməli olduğunuz şərtlər:
              Repository (repo): Versiya tarixçələri daxil olmaqla bütün
              faylların saxlandığı sahə. Filial: Əsas layihəyə təsir etməyən
              dəyişikliklərin edildiyi iş sahəsi. Markdown (.md): Düz mətni
              GitHub koduna çevirmək üsulu. Dəyişiklikləri yerinə yetirin:
              Repoda tapılan dəyişikliyin saxlanması. Pull Request (PR): Bir
              sahədə edilən dəyişikliyi digər sahə ilə birləşdirmək tələbi.
              Birləşdirmə: PR təsdiqindən sonra birləşdirin və əsas layihəyə
              əlavə edin. Problemlər: Layihənin idarə panelində dəyişiklikləri
              izləyin. Federalist: GitHub dəyişikliklərini paylayan və önizləyən
              platforma.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="personText">
            <h2 className="subjectTitle">Javascript</h2>
            <hr />
            <p className="subjectText">
              Javascript veb proqramlaşdırmada geniş istifadə olunan dinamik
              proqramlaşdırma dilidir. İnteraktiv və dinamik internet
              səhifələrinin inkişafına kömək edən Javascript, adına görə Java
              ilə qarışdırılsa da, əslində iki fərqli texnologiyadır. Javascript
              dili 1997-ci ildə Netscape-dən Brendan Eich tərəfindən
              hazırlanmışdır. İlk illərdə o dövrün əksər brauzerləri Javascript
              dilini şərh edə bilmirdi. Bu vəziyyətdə problem yaradırdı. Bununla
              belə, Javascript dili Eich tərəfindən inkişaf etdirilməyə davam
              etdi. Brendan Eich o vaxt Mozilla Fondunu qurdu. Bu fond bu gün də
              Javascript dilini inkişaf etdirməyə davam edir. Javascript bu gün
              demək olar ki, bütün aktiv saytlarda istifadə olunur. Veb
              saytların funksionallığını artıran proqramlaşdırma dili
              istifadəçilərə vebsaytla əlaqə saxlamağa imkan verir. Məsələn, hər
              hansı bir internet səhifəsində forma doldurarkən natamam və ya
              səhv daxil etdiyiniz zaman ekranda görünən xəbərdarlıq Javascript
              dili sayəsində reallaşır. Bu nümunə Javascript dilinin nə edə
              biləcəyinin ən sadə nümunəsidir. Javascript dili ilə nə etmək
              olar? Javascript ilə HTML qaynaq kodlarına müdaxilə edilə, forma
              təqdim edilə və ziyarətçiyə mesaj verilə bilər. Qısaca izah etmək
              üçün veb-saytlar Javascript dili ilə dinamik bir quruluşa sahib
              ola bilər. Veb səhifələrdə HTML-nin statik vəziyyətini daha
              interaktiv struktura gətirərək istifadəçi üçün daha praktik
              üsullar həyata keçirir. Javascript necə istifadə olunur?
              Javascript dili “.js” uzantısı kimi qeydə alınıb. HTML faylında
              Javascript dilindən istifadə edə bilərik. Javascript kodlarınızı
              vebsaytınıza əlavə etmək istəyirsinizsə, CSS-ə zəng etdiyiniz kimi
              Javascript faylınıza zəng edə bilərsiniz. JavaScript
              tərtibatçıları hansı vasitələrdən istifadə edirlər?
              StackOverFlow-dakı məlumatlar əsasında aparılan təhlillə
              JavaScript tərtibatçılarının hansı alət və texnologiyalardan
              istifadə etdiyi öyrənildi. Bu gün bəzən tənəzzülə uğrasa da, hələ
              də dünyada ən populyar proqramlaşdırma dili olan JavaScript-in
              təhlili aparılıb. StackOverFlow üzrə sorğuda 90 min tərtibatçı
              iştirak edib və JavaScript tərtibatçılarının cavabları alınıb.
              Tərtibatçılar deyirlər ki, JavaScript dili həm internetdə, həm
              yerli platformalarda, həm də back-end texnologiyalarında işləyə
              bilən tam stek dilidir. Node.js server əsasında işlədiyindən,
              back-end tərtibatçılarının sayı da artır. JavaScript dilinin çoxlu
              sayda çərçivəyə malik olması bu proqramlaşdırma dilinin çox
              yönlülüyünü artırır. JavaScript ilə mobil proqramlar hazırlamaq
              üçün bizə React Native çərçivəsi lazım olsa da, masa üstü
              proqramları hazırlamaq üçün Elektron çərçivəyə ehtiyacımız var.
              Proqramlaşdırma dilinin çox yönlü olması bu dildə ixtisaslaşan
              tərtibatçıları bir çox sahələrdə ön plana çıxarır.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="personText">
            <h2 className="subjectTitle">React Js</h2>
            <hr />
            <p className="subjectText">
              React nədir? React veb proqramları üçün sürətli və interaktiv
              istifadəçi interfeysləri yaratmaq üçün istifadə edilən JavaScript
              kitabxanasıdır. Açıq mənbəli, komponent əsaslı və qabaqcıl
              kitabxana olan React yalnız tətbiqin görünüş qatına cavabdehdir.
              React Facebook-da Jordan Walke adlı proqram mühəndisi tərəfindən
              hazırlanıb. Instagram saytının istifadəçi interfeysi də tamamilə
              React ilə işlənib. Bunun necə işlədiyini müşahidə etmək üçün
              aşağıda Argenovanın Instagram (@argenovatr) səhifəsinə nəzər
              salaq. Göründüyü kimi, istifadəçi interfeysi bir çox komponentlərə
              bölünür və hər bir komponentin özünəməxsus xüsusiyyətləri və
              funksiyaları vardır. Bu baxımdan, React sazlama zamanı
              tərtibatçılara bir çox rahatlıqlar təqdim edir.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="personText">
            <h2 className="subjectTitle">Typescript</h2>
            <hr />
            <p className="subjectText">
              TypeScript nədir? Veb proqramlarında geniş şəkildə istifadə edilən
              JavaScript müxtəlif kitabxanalar sayəsində Node.js ilə server
              tərəfi proqramlarda, Electron.js ilə masa üstü proqramlarda və
              müxtəlif kitabxanalar sayəsində hibrid mobil proqram inkişafında
              geniş şəkildə istifadə edilmiş və gözlənilməz bir artım
              göstərmişdir. Bu cür platformalar və iri miqyaslı proqramlar
              dizayn məqsədi ilə nəzərə alınmadığı üçün JavaScript-in bəzi
              struktur çatışmazlıqları var idi. Obyekt yönümlü dillərin təqdim
              etdiyi tip yoxlanışı və siniflər kimi strukturlar yox idi, dinamik
              xarakterinə görə kompilyasiya mərhələsi yox idi və xətaların
              yoxlanılması çətin idi. TypeScript bu çatışmazlıqları aradan
              qaldırmaq və böyük layihələrdə JavaScript-dən daha səmərəli
              istifadə etmək üçün nəzərdə tutulmuş proqramlaşdırma dili kimi
              ortaya çıxdı. “Tətbiq miqyasında inkişaf üçün TypeScript,
              JavaScript.” kimi müəyyən edilir. TypeScript güclü tipli, obyekt
              yönümlü və tərtib edilə bilən açıq mənbə proqramlaşdırma dilidir.
              O, Microsoft işçisi və C# dilinin dizayneri Anders Hejlsberg
              tərəfindən hazırlanmışdır və onun ilk versiyası 2012-ci ildə nəşr
              edilmişdir. 3.3, bu yazı zamanı 2019-cu ilin fevralına olan ən
              aktual versiyadır. TypeScript-i həm dil, həm də alətlər dəsti kimi
              təyin edə bilərik. O, müştəri və ya server mühitində işləyə bilən
              JavaScript proqramlarını yazmaq üçün istifadə edilə bilər. Əlavə
              funksiyalar əlavə edilmiş JavaScript-in bütün xüsusiyyətlərini
              özündə birləşdirən superset kimi müəyyən edilə bilər. Böyük və
              mürəkkəb kodlaşdırma layihələrində səmərəliliyi artırır.
              Xüsusiyyətlər JavaScript TypeScript-dir: TS-də yazılmış kodlar
              tərtib edildikdə, JS kodunu çıxardıqda və JS kodu icra olunduqda
              JS dildəki analoqlarına çevrilir. JS-ə aid olan bütün
              xüsusiyyətlər TS-yə aiddir. TS kodunu yazmaq üçün JS-i bilmək sizə
              işin böyük bir hissəsinə hakim olmağa imkan verəcək. TypeScript
              JavaScript-in genişləndirilmiş versiyasıdır. Hər bir JS kodu TS
              kodudur. Lakin TS kodu tərtib edilmədiyi və işlədildiyi halda JS
              kodu deyil. Bütün JS kitabxanalarından istifadə edə bilər: Bütün
              JS kitabxanaları TS-də də istifadə edilə bilər. TS kimi yazılmış
              bütün kodların JS çıxışı bütün JS çərçivələrindən, alətlərindən və
              kitabxanalarından istifadə edə bilər. Portativlik: TypeScript
              platformasız bir dildir və müxtəlif brauzerlərdə, cihazlarda,
              əməliyyat sistemlərində işləyə bilər. JavaScript-in işlədiyi
              istənilən mühitdə işləyə bilər. Analoqlarından (CoffeScript, Dart
              və s.) fərqli olaraq TypeScript onun icrası üçün xüsusi virtual
              maşına və ya xüsusi icra-icra mühitinə ehtiyac duymur, çünki
              yazılı kodlar JS koduna çevrilir və əməliyyatlar JS kodu üzərindən
              icra olunur. Niyə TypeScript? Kompilyasiya: JS təfsir edilmiş
              dildir, kompilyasiya addımı yoxdur, ona görə də kod işə düşənə
              qədər xətanın aşkarlanması mümkün deyil və səhvlər varsa, bütün
              kod nəzərdən keçirilməlidir ki, bu da çox vaxt apara bilər.
              TypeScript çeviricisi kompilyasiya mərhələsində səhvlərin
              yoxlanılmasını təmin edir və bu problemin həllini təmin edir.
              Güclü Statik Növlər: JS-də statik məlumat yazmaq yoxdur,
              verilənlərin növü icra zamanı dinamik olaraq müəyyən edilir. TS-də
              isə isteğe bağlı məlumat tərifi edilə bilər. Obyekt yönümlü
              proqramlaşdırma: TypeScript obyekt yönümlü anlayışa uyğundur.
              Siniflər, interfeyslər, modullar, miras və s. xüsusiyyətləri
              dəstəkləyir. Oxuması asan: JS kodu ilə müqayisədə təmin etdiyi
              üstünlüklərə görə asanlıqla oxuna bilən və redaktə edilə bilən bir
              dildir.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
