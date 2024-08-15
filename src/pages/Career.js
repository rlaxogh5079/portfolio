import "../styles/Career.css";
import { useState } from "react";

const Career = () => {
  const [flag, setFlag] = useState([true, false, false, false]);
  const [moving, setMoving] = useState(false);
  return (
    <div className="career-container">
      <div className="career-title">Career</div>
      <div className="career-profile">
        <img src="assets/career.jpg" alt="career" />
      </div>
      <ul className="career-year-list">
        <li
          className={`${flag[0] ? "active" : ""} `}
          onClick={() => {
            setFlag([true, false, false, false]);
            setMoving(true);
            setTimeout(() => {
              setMoving(false);
            }, 500);
          }}
        >
          2021
        </li>
        <li
          className={`${flag[1] ? "active" : ""}`}
          onClick={() => {
            setFlag([false, true, false, false]);
            setMoving(true);
            setTimeout(() => {
              setMoving(false);
            }, 500);
          }}
        >
          2022
        </li>
        <li
          className={`${flag[2] ? "active" : ""}`}
          onClick={() => {
            setFlag([false, false, true, false]);
            setMoving(true);
            setTimeout(() => {
              setMoving(false);
            }, 500);
          }}
        >
          2023
        </li>
        <li
          className={`${flag[3] ? "active" : ""}`}
          onClick={() => {
            setFlag([false, false, false, true]);
            setMoving(true);
            setTimeout(() => {
              setMoving(false);
            }, 500);
          }}
        >
          2024
        </li>
        <div className={`year-background ${moving ? "moving" : ""}`}></div>
      </ul>
    </div>
  );
};

export default Career;
