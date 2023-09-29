import React from "react";

import "./MoreApps.css";

const MoreApps = () => {
  return (
    <div className="moreApp">
      <div className="appsWappers">
        <h1>More By This Developer</h1>
        <div className="appImage">
          <a
            href="https://apps.apple.com/ae/app/amana-prepaid-cards/id1664096564"
            alt=""
          >
            <img src="/ImagesFolder/146x0w.webp" alt="" />
          </a>
        </div>
        <div className="textWapper">
          <a href="https://apps.apple.com/ae/app/amana-prepaid-cards/id1664096564">
            Amana PrePaid Cards
          </a>
          <span>Finance</span>
        </div>
      </div>
    </div>
  );
};

export default MoreApps;
