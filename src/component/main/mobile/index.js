import React from "react";
import Nav from "./nav.js";
import Carousel from "../carousel";
import CardSection from "../card-section";
import "./index.css";

/**
 * Navigation bar
 * accordian for mobile view to display carousel containing 2 plan icons
 * @returns {JSX Element}
 */
const index = () => {
  return (
    <div>
      <Nav />
      <details>
        <summary>Plan a Goal</summary>
        <Carousel slides={2} />
        <CardSection />
      </details>
    </div>
  );
};

export default index;
