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

export default () => {
  return (
    <>
      <Swiper
        slidesPerView="auto"
        pagination={{
          clickable: true,
          renderBullet: (idx, className) => {
            return `<div class="${className} bullet-container"><span>${bullets[idx]}</span></div>`;
          },
        }}
        mousewheel
        keyboard
        direction="vertical"
        speed={600}
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
