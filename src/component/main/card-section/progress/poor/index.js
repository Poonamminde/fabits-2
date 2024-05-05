import React from "react";
import Vector from "../../../../../assets/card-section/red-vector.svg";
import "../style.css";

/**
 * Poor progress bar
 * @returns {JSX Element}
 */
const index = () => {
  return (
    <div>
      <div className="progress">
        <div
          id="excellent-first"
          style={{
            width: "30%",
            height: "100%",
            backgroundColor: "rgba(232, 93, 93, 1)",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
          }}
        ></div>
        <div
          id="excellent-second"
          style={{
            width: "30%",
            height: "100%",
            backgroundImage: `url(${Vector})`,
          }}
        ></div>
        <div
          id="excellent-third"
          style={{
            width: "40%",
            height: "100%",
            backgroundColor: "rgba(255, 185, 185, 1)",
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
        ></div>
        <div className="white-circle" style={{ left: "30%" }}>
          <div
            className="circle"
            style={{ backgroundColor: "rgba(232, 93, 93, 1)" }}
          ></div>
        </div>
      </div>
      <p style={{ color: "rgba(87, 87, 87, 1)" }}>
        Goal behind by
        <span style={{ color: "rgba(232, 93, 93, 1)" }}> 18 months</span>
      </p>
    </div>
  );
};

export default index;
