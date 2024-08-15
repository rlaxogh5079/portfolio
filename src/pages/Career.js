import "../styles/Career.css";
import { useState } from "react";

const Career = () => {
  const [flag, setFlag] = useState([true, false, false, false]);
  return (
    <div className="career-container">
      <div className="career-title">Career</div>
      <div className="career-profile">
        <img src="assets/career.jpg" alt="career" />
      </div>
      <ul className="career-year-list">
        <li
          className={`${flag[0] ? "active" : ""}`}
          onClick={() => {
            setFlag([true, false, false, false]);
          }}
        >
          2021
        </li>
        <li
          className={`${flag[1] ? "active" : ""}`}
          onClick={() => {
            setFlag([false, true, false, false]);
          }}
        >
          2022
        </li>
        <li
          className={`${flag[2] ? "active" : ""}`}
          onClick={() => {
            setFlag([false, false, true, false]);
          }}
        >
          2023
        </li>
        <li
          className={`${flag[3] ? "active" : ""}`}
          onClick={() => {
            setFlag([false, false, false, true]);
          }}
        >
          2024
        </li>
        <div className="year-background"></div>
      </ul>
    </div>
  );
};

export default Career;
