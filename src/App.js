import Intro from "./pages/Intro";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import "./styles/App.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Mousewheel,
  Keyboard,
  Scrollbar,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/scrollbar";

const App = () => {
  return (
    <Swiper
      className="app-swiper"
      direction="vertical"
      modules={[Mousewheel, Keyboard, Scrollbar, EffectCreative]}
      speed={700}
      mousewheel={{
        enabled: true,
      }}
      keyboard={{ enabled: true }}
      scrollbar={{ draggable: true }}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, "-100%", 0],
        },
        next: {
          translate: [0, "100%", 0],
        },
      }}
    >
      <SwiperSlide>
        <Intro />
      </SwiperSlide>
      <SwiperSlide>
        <AboutMe />
      </SwiperSlide>
      <SwiperSlide>
        <Projects />
      </SwiperSlide>
      <SwiperSlide>
        <Skills />
      </SwiperSlide>
      <SwiperSlide>
        <Experience />
      </SwiperSlide>
      <SwiperSlide>
        <Contact />
      </SwiperSlide>
    </Swiper>
  );
};

export default App;
