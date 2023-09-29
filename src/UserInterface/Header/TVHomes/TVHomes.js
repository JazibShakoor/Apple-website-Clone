import React from "react";

import "./TVHomes";

const TVHomes = () => {
  return (
    <div className="hoverListWapper1">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="listItems">
              <h6>Explore TV & Homes</h6>
              <ul>
                <li>
                  <a href="https://www.apple.com/ae/tv-home/">
                    Explore All TV & Homes
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-tv-4k/">
                    Apple TV 4K
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="listItems">
              <h6>Shop TV & Home</h6>
              <ul className="links">
                <li>
                  <a href="https://www.apple.com/ae/shop/goto/buy_tv/apple_tv_4k">
                    Shop Apple TV 4K
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae-edu/shop/product/MNC83ZE/A/apple-tv-remote">
                    Shop Apple TV Remote
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae-edu/shop/smart-home/accessories">
                    TV & Home Accessories
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="listItems thirdCol">
              <h6>More For TV & Home</h6>
              <ul className="links">
                <li>
                  <a href="https://support.apple.com/en-ae/apple-tv?cid=gn-ols-appletv-psp-prodfly">
                    Apple TV Support
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-tv-app/">
                    Apple TV App
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-tv-plus/">
                    Apple TV+
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/home-app/">Home App</a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-music/">
                    Apple Music
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/airplay/">AirPlay</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVHomes;
