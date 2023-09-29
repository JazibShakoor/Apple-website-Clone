import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import "./Information.css";

const Information = () => {
  return (
    <div className="informationWapper">
      <div className="row">
        <div className="col-12">
          <h2>Information</h2>
        </div>
        <div className="col-4">
          <div className="provider">
            <span>Provider</span>
            <p>AMANA CAPITAL LTD</p>
          </div>
          <div className="compatibility">
            <span>Compatibility</span>
            <h6>IPhone</h6>
            <p>Requires iOS 14.0 or later.</p>
          </div>
          <div className="iPod">
            <h6>IPod touch</h6>
            <p>Requires iOS 14.0 or later.</p>
          </div>
          <div className="copyRight">
            <span>CopyRight</span>
            <p>© Amana Capital</p>
          </div>
        </div>
        <div className="col-4">
          <div className="size">
            <span>Size</span>
            <p>197.5 MB</p>
          </div>
          <div className="language">
            <span>Languages</span>
            <p>English</p>
          </div>
          <div className="price">
            <span>Price</span>
            <p>Free</p>
          </div>
        </div>
        <div className="col-4">
          <div className="category">
            <span>Category</span>
            <p className="finance">Finance</p>
          </div>
          <div className="rate">
            <span>Age Rating</span>
            <p>4+</p>
          </div>
        </div>
        <div className="col-12">
          <div className="appLinks">
            <a href="https://amana.app/">
              Delevoper Website <FiArrowUpRight />
            </a>
            <a href="https://amana.app/support">
              App Support <FiArrowUpRight />
            </a>
            <a href="https://amana.app/pdf/privacy-policy.pdf">
              Privacy Policy <FiArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
