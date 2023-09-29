import React from "react";

import "./AirPod.css";

const AirPod = () => {
  return (
    <div className={`hoverListWapper1a`}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="listItems">
              <h6>Explore AirPods</h6>
              <ul>
                <li>
                  <a href="https://www.apple.com/ae/airpods/">
                    Explore All AirPods
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/airpods-2nd-generation/">
                    AirPods 2nd Generation
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/airpods-3rd-generation/">
                    AirPods 3rd Generation
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/airpods-pro/">
                    AirPods Pro Generation
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/airpods-max/">
                    AirPods Max
                  </a>
                </li>
              </ul>
              <ul className="links gap">
                <li>
                  <a href="https://www.apple.com/ae/airpods/compare/">
                    Compare AirPods
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="listItems">
              <h6>Shop AirPods</h6>
              <ul className="links">
                <li>
                  <a href="https://www.apple.com/ae/shop/goto/accessories/all_accessories/headphones_speakers?fh=47d1%2B3214%2B45aa%2B45ab&f=apple-overear-sport&page=1">
                    Shop AirPods
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae-edu/shop/accessories/all/headphones-speakers?f=headphoneacc&fh=47d1%2Be62115&page=1">
                    AirPods Accessories
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="listItems thirdCol">
              <h6>More For AirPods</h6>
              <ul className="links">
                <li>
                  <a href="https://support.apple.com/en-ae/airpods?cid=gn-ols-airpods-psp-prodfly">
                    AirPods Support
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/apple-music/">
                    Apple Music
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

export default AirPod;
