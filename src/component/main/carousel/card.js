import React from "react";
import "./card.css";
/**
 * This is a functional component named 'card' which takes a 'data' prop.
 * It renders a clickable card containing an image, a title, and a description.
 * Click event on card redirect you on my linkedin page on new tab
 * @param {Object} param0
 * @returns {JSX.Element}
 */
const card = ({ data }) => {
  return (
    <a
      href="https://linkedin.com/in/poonam-minde-029809235/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="carousel-card">
        <img src={data.image} alt={data.title} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </a>
  );
};

export default card;
