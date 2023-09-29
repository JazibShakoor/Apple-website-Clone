import React from "react";

import "./AppFeatures.css";

const AppFeatures = () => {
  return (
    <div className="appFeaturesWapper">
      <div className="row">
        <div className="col-8">
          <h2>What’s New</h2>
        </div>
        <div className="col-4">
          <div className="historyWapper">
            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
              Version History
            </button>
            <p>Version 2.8.8</p>
          </div>
        </div>
        <div className="col-12">
          <p className="pL">
            Version 2.8.8 introduces upgraded asset information– providing you
            with even more detailed insights, analytics, and charting
            enhancements. Additionally, we've expanded our Plus section –
            offering a wider range of educational resources to enhance your
            learning experience. And we've diligently worked on resolving
            general bugs and improving overall stability to ensure a smoother
            user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
