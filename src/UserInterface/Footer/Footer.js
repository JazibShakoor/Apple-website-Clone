import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerWapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>
              More ways to shop:
              <a href="https://www.apple.com/ae/retail/">Find an Apple Store</a>
              or
              <a href="https://locate.apple.com/ae/en/">other retailer</a> near
              you. Or call 8000 444 0396.
            </p>
          </div>
          <div className="col-12">
            <div className="flex">
              <div className="box1">
                <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
                <ul className="box2">
                  <li>
                    <a href="https://www.apple.com/legal/privacy/en-ww/">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apple.com/ae/shop/browse/open/salespolicies">
                      Sales and Refunds
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apple.com/legal/"> Legal</a>
                  </li>
                  <li>
                    <a href="https://www.apple.com/ae/sitemap/">Site Map</a>
                  </li>
                </ul>
              </div>
              <p className="countryName">
                <a href="https://www.apple.com/choose-country-region/">
                  United Arab Emirates
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
