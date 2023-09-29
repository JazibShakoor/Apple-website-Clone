import React from "react";

import "./Card.css";

export default function Card({ image, title, paragraph, icons }) {
  return (
    <div className="card">
      <div className="image">{image}</div>
      <h5>{title}</h5>
      <p className="paraMargin">{paragraph}</p>
      <div className="imgAndText2">
        {icons.map(({ title, icon }, index) => (
          <div className="wrapper" key={index}>
            <div className="icons">{icon}</div>
            <p>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
