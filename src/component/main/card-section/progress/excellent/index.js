import React from "react";
import Vector from "../../../../../assets/card-section/green-vector.svg";
import "../style.css";

const index = () => {
  return (
    <div>
      <div className="progress">
        <div
          id="excellent-first"
          style={{
            width: "50%",
            height: "100%",
            backgroundColor: "rgba(91, 131, 80, 1)",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
          }}
        ></div>
        <div
          id="excellent-second"
          style={{
            width: "30%",
            height: "100%",
            backgroundColor: "rgba(197, 222, 189, 1)",
            backgroundImage: `url(${Vector})`,
          }}
        ></div>
        <div
          id="excellent-third"
          style={{
            width: "20%",
            height: "100%",
            backgroundColor: "rgba(197, 222, 189, 1)",
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
        ></div>
        <div className="white-circle" style={{ left: "80%" }}>
          <div
            className="circle"
            style={{ backgroundColor: "rgba(91, 131, 80, 1)" }}
          ></div>
        </div>
      </div>
      <p style={{ color: "rgba(87, 87, 87, 1)" }}>
        Goal ahead by{" "}
        <span style={{ color: "rgba(91, 131, 80, 1)" }}>16 months</span>
      </p>
    </div>
  );
};

export default index;
