import React from "react";

import "./Entirement.css";

const Entirement = () => {
  return (
    <div className={`hoverListWapper1e`}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="listItems">
              <h6>Explore Entertainment</h6>
              <ul>
                <li>
                  <a href="https://www.apple.com/ae/services/">
                    Explore All Entertainment
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-one/">Apple TV One</a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-tv-plus/">
                    Apple TV+
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-music/">
                    Apple Music
                  </a>
                </li>

                <li>
                  <a href="https://www.apple.com/ae/apple-arcade/">
                    Apple Arcade
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-fitness-plus/">
                    Apple Fitness+
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-podcasts/">
                    Apple Podcasts
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-books/">
                    Apple Books
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/app-store/">Apple Store</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="listItems">
              <h6>Support</h6>
              <ul className="links">
                <li>
                  <a href="https://support.apple.com/en-ae/tv?cid=gn-ols-tvplus-psp-prodfly">
                    Apple TV+ Support
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/en-ae/music?cid=gn-ols-music-psp-prodfly">
                    Apple Music Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entirement;
