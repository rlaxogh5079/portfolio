import "../styles/Career.css";
import { useState } from "react";

const Career = () => {
  const [flag, setFlag] = useState([true, false, false, false]);
  const [moving, setMoving] = useState(false);
  const [up, setUp] = useState(false);
  const getContent = () => {
    if (flag[0]) {
      return `
        Hello World This is Flag0
      `;
    } else if (flag[1]) {
      return `
        Hello World This is Flag1
      `;
    } else if (flag[2]) {
      return `
        Hello World This is Flag2
      `;
    } else if (flag[3]) {
      return `
        Hello World This is Flag3
      `;
    }
  };
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
            if (!moving) {
              setUp(true);
              setTimeout(() => {
                setUp(false);
              }, 500);
              setFlag([true, false, false, false]);
              setMoving(true);
              setTimeout(() => {
                setMoving(false);
              }, 500);
            }
          }}
        >
          2021
        </li>
        <li
          className={`${flag[1] ? "active" : ""}`}
          onClick={() => {
            if (!moving) {
              if (flag[3] || flag[2]) {
                setUp(true);
                setTimeout(() => {
                  setUp(false);
                }, 500);
              }
              setFlag([false, true, false, false]);
              setMoving(true);
              setTimeout(() => {
                setMoving(false);
              }, 500);
            }
          }}
        >
          2022
        </li>
        <li
          className={`${flag[2] ? "active" : ""}`}
          onClick={() => {
            if (!moving) {
              if (flag[3]) {
                setUp(true);
                setTimeout(() => {
                  setUp(false);
                }, 500);
              }
              setFlag([false, false, true, false]);
              setMoving(true);
              setTimeout(() => {
                setMoving(false);
              }, 500);
            }
          }}
        >
          2023
        </li>
        <li
          className={`${flag[3] ? "active" : ""}`}
          onClick={() => {
            if (!moving) {
              setFlag([false, false, false, true]);
              setMoving(true);
              setTimeout(() => {
                setMoving(false);
              }, 500);
            }
          }}
        >
          2024
        </li>
        <div className={`year-background ${moving ? "moving" : ""}`}></div>
      </ul>
      <div
        className={`career-content ${moving ? "content-active" : ""} ${
          up ? "up" : ""
        }`}
      >
        {getContent()}
      </div>
    </div>
  );
};

export default Career;
