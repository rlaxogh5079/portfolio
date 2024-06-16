import NavBar from "./components/NavBar";
import Intro from "./pages/Intro";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";

const App = () => {
  return (
    <div>
      <NavBar />
      <Swiper
        modules={[Scrollbar, Mousewheel, Keyboard]}
        scrollbar={{ drawable: true, el: "" }}
        direction={"vertical"}
        mousewheel={true}
        keyboard={true}
        style={{ height: "93vh" }}
      >
        <SwiperSlide>
          <Intro />
        </SwiperSlide>
        <SwiperSlide>
          <Intro />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;
