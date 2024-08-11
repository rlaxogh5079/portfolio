import Home from "./Home";
import About from "./About";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Scrollbar,
  Keyboard,
  Mousewheel,
  EffectCreative,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import "swiper/css/effect-creative";

import "../styles/Root.css";

const Root = () => {
  return (
    <>
      <div className="swiper-pagination"></div>
      <Swiper
        modules={[Scrollbar, Keyboard, Mousewheel, Pagination, EffectCreative]}
        mousewheel={true}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
        }}
        effect={"creative"}
        direction={"vertical"}
        speed={1000}
        style={{ width: "100vw", height: "100vh" }}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: [0, "-500px", 0],
            opacity: 0,
          },
          next: {
            translate: [0, "500px", 0],
            opacity: 0,
          },
        }}
      >
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Root;
