import React from "react";
import Excellent from "./progress/excellent";
import Good from "./progress/good";
import Weak from "./progress/weak";
import Poor from "./progress/poor";
import Reach from "./progress/reach";
import "./card.css";

const index = ({ data }) => {
  return (
    <a
      href="https://linkedin.com/in/poonam-minde-029809235/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="plan-card">
        <div className="plan-card-section-1">
          <div className="grey-box"></div>
          <h3 className="plan-heading">
            Dhairyadev & Sayali’s Vacation Plan 1
          </h3>
        </div>
        <hr />
        <div className="goal-section">
          <div>
            <span>Goal Progress</span>
            <h3>{data.progress}</h3>
          </div>
          <div>
            <span>Goal Amount</span>
            <h3>{data.amount}</h3>
          </div>
        </div>
        <div className="goal-section">
          <div>
            <span>Goal Date</span>
            <h3>{data.date}</h3>
          </div>
          <div>
            {data.hasOwnProperty("health") ? (
              <>
                <span>Goal Health</span>
                <br />
                <img src={data.health} alt="health" />
              </>
            ) : (
              <>
                <span>Goal Reached</span>
                <h3>{data.reached}</h3>
              </>
            )}
          </div>
        </div>
        <hr />
        {data.bar === "excellent" && <Excellent />}
        {data.bar === "good" && <Good />}
        {data.bar === "weak" && <Weak />}
        {data.bar === "poor" && <Poor />}
        {data.bar === "reached" && <Reach />}
      </div>
    </a>
  );
};

export default index;
