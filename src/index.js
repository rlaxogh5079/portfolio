import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Career from "./pages/Career";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import reportWebVitals from "./reportWebVitals";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/swiper.min.css";

SwiperCore.use([Pagination, Mousewheel, Keyboard]);

const pages = [Home, Info, Career, Skill, Contact];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Swiper
      slidesPerView="auto"
      pagination
      mousewheel
      keyboard
      direction="vertical"
      speed={600}
    >
      {pages.map((page) => {
        return <SwiperSlide>{page}</SwiperSlide>;
      })}
    </Swiper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
