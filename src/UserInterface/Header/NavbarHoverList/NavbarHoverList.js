import React from "react";

import "./NavbarHoverList.css";

const NavbarHoverList = () => {
  return (
    <div className={`hoverListWapper`}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="listItems">
              <h6>Shop</h6>
              <ul>
                <li>
                  <a href="https://www.apple.com/ae/store">Shop the Latest</a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/shop/buy-mac">Mac</a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/shop/buy-ipad">IPad</a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/shop/buy-iphone">IPhone</a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/shop/buy-watch">
                    Apple Watch
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/shop/accessories/all">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="listItems">
              <h6>Quick Links</h6>
              <ul className="links">
                <li>
                  <a href="https://www.apple.com/ae/retail/">Find a Store</a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/shop/goto/order/list">
                    Order Status
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
              <h6>Shop Special Stores</h6>
              <ul className="links">
                <li>
                  <a href="https://www.apple.com/ae-edu/store">Education</a>
                </li>
                <li>
                  <a href="https://www.apple.com/ae/retail/business/">
                    Bussiness
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

export default NavbarHoverList;
