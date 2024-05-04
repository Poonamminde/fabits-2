import React from "react";
import Search from "../../../assets/card-section/search.svg";
import FilterIcon from "../../../assets/card-section/filter_alt.svg";
import DownArrow from "../../../assets/card-section/arrow_drop_down.svg";
import Excellent from "../../../assets/card-section/Excellent.svg";
import Good from "../../../assets/card-section/good.svg";
import Weak from "../../../assets/card-section/weak.svg";
import Poor from "../../../assets/card-section/poor.svg";
import Card from "./card";
import "./index.css";

const index = () => {
  return (
    <div className="main">
      <div className="main-section-1">
        <h2>Track current goals</h2>
        <div>
          <span className="blue-text">
            Filters&nbsp;
            <img src={FilterIcon} alt="filter" />
          </span>
          <span>
            Sort by: <span className="blue-text">Progress (High to Low) </span>
            <img src={DownArrow} alt="option" />
          </span>
          <div id="search-box">
            <img src={Search} alt="search" />
            <input type="text" placeholder="search" />
          </div>
        </div>
      </div>
      <hr />
      <div className="card-container">
        <Card
          data={{
            progress: "₹ 11,24,00,000",
            amount: "₹ 15,00,00,000",
            date: "March 2035",
            health: Excellent,
            bar: "excellent",
          }}
        />
        <Card
          data={{
            progress: "₹ 2,70,00,000",
            amount: "₹ 5,00,00,000",
            date: "Jan 2040",
            health: Good,
            bar: "good",
          }}
        />
        <Card
          data={{
            progress: "₹ 42,00,000",
            amount: "₹ 1,00,00,000",
            date: "March 2035",
            health: Weak,
            bar: "weak",
          }}
        />
        <Card
          data={{
            progress: "₹ 11,24,00,000",
            amount: "₹ 15,00,00,000",
            date: "March 2035",
            health: Poor,
            bar: "poor",
          }}
        />
        <Card
          data={{
            progress: "₹ 11,24,00,000",
            amount: "₹ 15,00,00,000",
            date: "March 2035",
            reached: "March 2035",
            bar: "reached",
          }}
        />
      </div>
    </div>
  );
};

export default index;
