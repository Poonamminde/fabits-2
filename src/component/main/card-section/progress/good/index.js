import React from "react";
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
            backgroundColor: "rgba(116, 167, 102, 1)",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
          }}
        ></div>
        <div
          id="excellent-second"
          style={{
            width: "50%",
            height: "100%",
            backgroundColor: "rgba(197, 222, 189, 1)",
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
        ></div>
        <div className="white-circle" style={{ left: "50%" }}>
          <div
            className="circle"
            style={{ backgroundColor: "rgba(116, 167, 102, 1)" }}
          ></div>
        </div>
      </div>
      <p style={{ color: "rgba(87, 87, 87, 1)" }}>On track</p>
    </div>
  );
};

export default index;
