import React from "react";

import "./IPhone.css";

const IPod = () => {
  return (
    <div className={`hoverListWapper1`}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="listItems">
              <h6>Explore IPhone</h6>
              <ul>
                <li>
                  <a href="https://www.apple.com/ae/iphone/">
                    Explore All IPhone
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/iphone-14-pro/">
                    IPhone Pro
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/iphone-14/">IPhone 14</a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/shop/goto/buy_iphone/iphone_13">
                    IPhone 13
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/shop/goto/buy_iphone/iphone_12">
                    IPhone 12
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/iphone-se/">IPhone SE</a>
                </li>
              </ul>
              <ul className="links gap">
                <li>
                  <a href="https://www.apple.com/ae/ipad/compare/">
                    Compare IPhone
                  </a>
                </li>
                <li>
                  <a href="apple.com/ae/iphone/switch/">Switch to IPhone</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="listItems">
              <h6>Shop Mac</h6>
              <ul className="links">
                <li>
                  <a href="https://www.apple.com/ae/iphone/">Shop IPhone</a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/shop/goto/iphone/accessories">
                    IPhone Accessories
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
                  <a href="https://support.apple.com/en-ae/iphone?cid=gn-ols-iphone-psp-prodfly">
                    IPhone Support
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/ios/ios-16/">Ios 16</a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/privacy/">IPhone Privacy</a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/icloud/">ICloud</a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/wallet/">Wallet, Pay</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPod;
