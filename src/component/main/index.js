import React from "react";
import Carousel from "./carousel";
import CardSection from "./card-section";
import "./index.css";

/**
 * container for carousel and card section
 * @returns {JSX Element}
 */
const index = () => {
  return (
    <div className="main-container">
      <Carousel />
      <CardSection />
    </div>
  );
};

export default index;
