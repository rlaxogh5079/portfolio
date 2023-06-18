import "./index.scss";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Career from "./pages/Career";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/swiper.min.css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Mousewheel, Keyboard]);

const bullets = ["Home", "Info", "Career", "Skill", "Contact"];
const icons = ["fa-home", "fa-user", "fa-star", "fa-book", "fa-phone"];

export default () => {
  return (
    <>
      <Swiper
        slidesPerView="auto"
        pagination={{
          clickable: true,
          renderBullet: (idx, className) => {
            return `<div class="${className}"><i class="fa icon ${icons[idx]}"></i><div class="bullet-text">${bullets[idx]}</div></div>`;
          },
        }}
        mousewheel
        keyboard
        direction="vertical"
        speed={600}
        onAfterInit={() => {
          document
            .querySelector("div.bullet-text")
            .classList.add("bullet-text-active");
        }}
        onSlideChange={(swiper) => {
          setTimeout(() => {
            for (var i = 0; i < bullets.length; i++) {
              if (i === swiper.activeIndex) {
                document
                  .querySelectorAll(`div.bullet-text`)
                  [i].classList.add("bullet-text-active");
              } else {
                document
                  .querySelectorAll(`div.bullet-text`)
                  [i].classList.remove("bullet-text-active");
              }
            }
          }, 600);
        }}
      >
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          <Info />
        </SwiperSlide>
        <SwiperSlide>
          <Career />
        </SwiperSlide>
        <SwiperSlide>
          <Skill />
        </SwiperSlide>
        <SwiperSlide>
          <Contact />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
