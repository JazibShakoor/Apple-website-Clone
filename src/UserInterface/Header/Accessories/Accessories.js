import React from "react";

import "./Accessories.css";

const Accessories = () => {
  return (
    <div className={`hoverListWapper1`}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="listItems">
              <h6>Explore Accessories</h6>
              <ul>
                <li>
                  <a href="https://www.apple.com/ae/shop/goto/buy_accessories">
                    Explore All Accessories
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae-edu/shop/mac/accessories">
                    Mac
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/shop/goto/ipad/accessories">
                    IPad
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae-edu/shop/iphone/accessories">
                    IPhone
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae-edu/shop/watch/accessories">
                    Apple Watch
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae-edu/shop/accessories/all/headphones-speakers?f=apple-overear-sport&fh=47d1%2B3214%2B45aa%2B45ab&page=1">
                    AirPods
                  </a>
                </li>
                <li>
                  <a href="apple.com/ae-edu/shop/smart-home/accessories">
                    TV & Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="listItems">
              <h6>Shop Accessories</h6>
              <ul className="links">
                <li>
                  <a href="https://www.apple.com/ae/shop/goto/accessories/all_accessories/made_by_apple">
                    Made By Apple
                  </a>
                </li>
                <li>
                  <a href="https://apple.com/ae/shop/goto/accessories/all_accessories/beats_featured">
                    Beates By Dr.Der
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/airtag/">AirTag</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="listItems thirdCol">
              <h6>More For Mac</h6>
              <ul className="links">
                <li>
                  <a href="https://support.apple.com/en-ae/watch?cid=gn-ols-watch-psp-prodfly">
                    Apple Watch Support
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/watchos/watchos-9/">
                    watchOS 9
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-fitness-plus/">
                    Apple Fitness+
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

export default Accessories;
