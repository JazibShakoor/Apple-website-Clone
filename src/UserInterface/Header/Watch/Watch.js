import React from "react";

import "./Watch.css";

const Watch = () => {
  return (
    <div className={`hoverListWapper1`}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="listItems">
              <h6>Explore Watch</h6>
              <ul>
                <li>
                  <a href="https://www.apple.com/ae/watch/">
                    Explore All Watch
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-watch-ultra/">
                    Apple Watch Ultra
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-watch-series-8/">
                    Apple Watch Series 8
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-watch-se/">
                    Apple Watch SE
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-watch-nike/">
                    Apple Watch Nike
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-watch-hermes/">
                    Apple Watch Hermes
                  </a>
                </li>
              </ul>
              <ul className="links">
                <li>
                  <a href="https://www.apple.com/ae/watch/compare/">
                    Compare IPhone
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/watch/why-apple-watch/">
                    Switch to IPhone
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="listItems">
              <h6>Shop Watch</h6>
              <ul className="links">
                <li>
                  <a href="https://www.apple.com/ae/watch/">Shop Apple Watch</a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/shop/goto/watch/bands">
                    Apple Watch Bands
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/shop/goto/watch/accessories">
                    Apple Watch Accessories
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/shop/trade-in">
                    Appler Trade in
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/shop/browse/finance/installments">
                    Financing
                  </a>
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

export default Watch;
