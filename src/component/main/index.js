import React from "react";
import Mobile from "./mobile";
import Carousel from "./carousel";
import CardSection from "./card-section";
import "./index.css";

/**
 * container for carousel and card section fon desktop
 * mobile component for mobile view
 * @returns {JSX Element}
 */
const index = () => {
  return (
    <div className="main-container">
      <div id="mobile">
        <Mobile />
      </div>
      <div id="desktop">
        <Carousel slides={6} />
        <CardSection />
      </div>
    </div>
  );
};

export default index;
