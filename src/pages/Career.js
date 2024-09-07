import "../styles/Career.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const CareerContent = ({ date, content }) => {
  return (
    <>
      <h2>{date}</h2>
      <div>{content}</div>
      <div style={{ marginBottom: "3vh" }}></div>
    </>
  );
};

const Career = () => {
  return (
    <div className="career-container">
      <div className="career-title">Career</div>
      <div className="career-profile">
        <img src="assets/career.jpg" alt="career" />
      </div>
      <div className="career-year-list"></div>
      <Swiper
        className="career-content-container"
        pagination={{
          el: ".career-year-list",
          type: "bullets",
          bulletClass: "career-year",
          bulletActiveClass: "career-year-active",
          clickable: true,
          renderBullet: (index, className) => {
            return `<div class="${className}">202${index + 1}</div>`;
          },
        }}
        speed={600}
        direction="vertical"
        effect="creative"
        modules={[Pagination, EffectCreative]}
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
          <CareerContent
            date="2021.03.02"
            content="Admissions to Pai Chai University"
          />
          <CareerContent
            date="2021.05.14"
            content="Acquisition second class of python Cos Pro"
          />
          <CareerContent
            date="2021.11.11"
            content="
            Excellence Award at Baejae University's Algorithm Competition"
          />
          <CareerContent
            date="2021.09.01 ~ 2021.12.21"
            content="Development of crime prevention system using HAOS"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CareerContent
            date="2022.01.05 ~ 2022.02.27"
            content="Data crawling internship activity using Python Scrapy in APRO Korea"
          />
          <CareerContent
            date="2022.03.02 ~ 2022.06.22"
            content="Development of travel records diary using Go lang and Flutter"
          />
          <CareerContent
            date="2022.06.22 ~ 2022.06.24"
            content="Participate in 2022 SW-Centered University hackathon with the
            recommendation of professors and development Flutter app that
            organizes and provides all card information"
          />
          <CareerContent
            date="2022.08.04 ~ 2022.08.28"
            content="A server that provides COVID-19 related information to RestAPI is
            developed through FastAPI"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CareerContent
            date="2023.01.02 ~ 2023.03.30"
            content="A Study on the Ethernet-Based Low Latency Live Video Streaming
            Framework for Vehicles"
          />
          <CareerContent
            date="2023.02.12"
            content="Acquisition first class of python Cos Pro"
          />
          <CareerContent
            date="2023.03.02 ~ 2023.06.22"
            content="Development app that is combined CGV, MegaBox, and Lotte Cinema's
            movie platforms using Flutter and Python's FastAPI"
          />
          <CareerContent
            date="2023.04.14"
            content="Acquisition SQL Developer"
          />
          <CareerContent
            date="2023.09.01 ~ 2023.12.21"
            content="Development of Used Transaction Intermediation App through Flutter
            And python's FastAPI"
          />
          <CareerContent
            date="2023.09.01 ~ 2024.02.28"
            content="A Study on the Control of Message Transmission between Various IOT
            Devices with Eclipse Hono"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CareerContent
            date="2024.03.02 ~ 2024.06.22"
            content="Development of University Communications App Using Flutter and
            Python's FastAPI"
          />
          <CareerContent
            date="2024.06.05"
            content="Acquisition of information processing industry engineer"
          />
          <CareerContent
            date="2024.08.07 ~ 2024.10.01"
            content="Development of portfolio into a website"
          />
          <CareerContent
            date="2024.09.01 ~ 2024.10.01"
            content="Development of Bucket List Shared With Friend App Using Flutter And Python's FastAPI"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Career;
