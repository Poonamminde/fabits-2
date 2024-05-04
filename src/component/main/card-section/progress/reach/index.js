import React from "react";
import Vector from "../../../../../assets/card-section/vavy-blue-vector.svg";
import "../style.css";

const index = () => {
  return (
    <div>
      <div className="progress">
        <div
          id="excellent-first"
          style={{
            width: "85%",
            height: "100%",
            backgroundColor: "rgba(59, 77, 128, 1)",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
          }}
        ></div>
        <div
          id="excellent-third"
          style={{
            width: "15%",
            height: "100%",
            backgroundImage: `url(${Vector})`,
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
        ></div>
        <div className="white-circle" style={{ left: "85%" }}>
          <div
            className="circle"
            style={{ backgroundColor: "rgba(59, 77, 128, 1)" }}
          ></div>
        </div>
      </div>
      <p style={{ color: "rgba(87, 87, 87, 1)" }}>
        Goal reached
        <span style={{ color: "rgba(91, 131, 80, 1)" }}> 3 months </span> ahead
      </p>
    </div>
  );
};

export default index;
