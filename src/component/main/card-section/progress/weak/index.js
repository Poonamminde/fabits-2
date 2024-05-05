import React from "react";
import Vector from "../../../../../assets/card-section/orange-vector.svg";
import Emoji from "../../../../../assets/card-section/emoji_objects.svg";
import "../style.css";

/**
 * Weak progress bar
 * @returns {JSX Element}
 */
const index = () => {
  return (
    <div>
      <div className="progress">
        <div
          id="excellent-first"
          style={{
            width: "60%",
            height: "100%",
            backgroundColor: "rgba(217, 158, 22, 1)",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
          }}
        ></div>
        <div
          id="excellent-second"
          style={{
            width: "10%",
            height: "100%",
            backgroundImage: `url(${Vector})`,
          }}
        ></div>
        <div
          id="excellent-third"
          style={{
            width: "30%",
            height: "100%",
            backgroundColor: "rgba(247, 218, 149, 1)",
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
        ></div>
        <div className="white-circle" style={{ left: "60%" }}>
          <div
            className="circle"
            style={{ backgroundColor: "rgba(217, 158, 22, 1)" }}
          ></div>
        </div>
      </div>
      <p style={{ color: "rgba(87, 87, 87, 1)" }}>
        Goal behind by
        <span style={{ color: "rgba(217, 158, 22, 1)" }}> 2 months</span>
      </p>
      <p
        style={{
          color: "rgba(217, 158, 22, 1)",
          backgroundColor: "rgba(253, 247, 232, 1)",
          borderRadius: "8px",
          padding: "5px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={Emoji} alt="" />
        Boost to reach your goal sooner!
      </p>
      <div
        style={{
          width: "80%",
          border: "1px solid rgba(211, 219, 236, 1)",
          padding: "10px 24px",
          textAlign: "center",
          borderRadius: "8px",
        }}
      >
        Boost
      </div>
    </div>
  );
};

export default index;
