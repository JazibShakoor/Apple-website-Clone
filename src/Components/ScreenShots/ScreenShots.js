import React from "react";

import "./ScreenShots.css";

const ScreenShots = () => {
  return (
    <div className="screenShots">
      <div className="col-12">
        <h1 className="screenshotsH1">IPhone ScreenShots</h1>
      </div>
      <div className="col-12">
        <div className="scrollImage">
          <div className="scrollWapper">
            <img src="/ImagesFolder/230x0w (1).webp" alt="" />
          </div>
          <div className="scrollWapper">
            <img src="/ImagesFolder/230x0w (2).webp" alt="" />
          </div>
          <div className="scrollWapper">
            <img src="/ImagesFolder/230x0w (3).webp" alt="" />
          </div>
          <div className="scrollWapper">
            <img src="/ImagesFolder/230x0w (4).webp" alt="" />
          </div>
          <div className="scrollWapper">
            <img src="/ImagesFolder/230x0w (5).webp" alt="" />
          </div>
          <div className="scrollWapper">
            <img src="/ImagesFolder/230x0w (6).webp" alt="" />
          </div>
          <div className="scrollWapper">
            <img src="/ImagesFolder/230x0w (7).webp" alt="" />
          </div>
          {/* <div className="scrollWapper">
            <img src="/ImagesFolder/230x0w (8).webp" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ScreenShots;
