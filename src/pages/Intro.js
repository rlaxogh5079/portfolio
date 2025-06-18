import "../styles/Intro.scss";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Intro = () => {
  return (
    <div className="intro dark">
      <div className="intro-main">
        <div className="intro-left">
          <div className="title">이상과 상상을 현실로.</div>
          <div className="subtitle">
            흥미로운 아이디어를 상상하고, 그것을 구현해내는 개발자입니다.
          </div>
          <p className="desc">
            창의적인 사고와 책임감을 바탕으로, 프론트엔드부터 백엔드까지
            아우르는
            <br />
            풀스택 개발자로 성실히 성장해 나가고 있습니다.
          </p>
        </div>

        <div className="intro-right">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            speed={5000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            allowTouchMove={false}
          >
            <SwiperSlide>
              <div className="slide-item">
                <img src="/img/5pplication.png" />
                <div className="slide-caption">
                  5pplication: 여행 감정 기록 앱
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item">
                <img src="/img/cherry_picker.png" />
                <div className="slide-caption">
                  Cherry Picker: 카드 통합 관리 앱
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item">
                <img src="/img/MAC.png" />
                <div className="slide-caption">MAC: 중고 거래 중개 앱</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item">
                <img src="/img/union.png" />
                <div className="slide-caption">
                  UNION: 대학교 통합 커뮤니티 앱
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item">
                <img src="/img/task_spark.png" />
                <div className="slide-caption">
                  Task Spark: 보상 및 경쟁 심리 기반 할일 관리 앱
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item">
                <img src="/img/grand_buddy.png" />
                <div className="slide-caption">
                  동네 손주: 청년 및 고령자 연결 일상 도움 플랫폼 앱
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <button
        className="intro-bottom"
        onClick={() => {
          document
            .getElementById("next-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        ↓
      </button>
    </div>
  );
};

export default Intro;
