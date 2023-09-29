import React from "react";
import { AiFillStar } from "react-icons/ai";

import "./PopWindow.css";

export default function PopWindow1() {
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="cover">
                <div className="starBlock">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar className="colorLess" />
                </div>
                <h5>Jeramiru Desu , 14/01/2023</h5>
                <span>Beginner User Friendly</span>
                <p>
                  This app is Easy to use .. Hassle-Free Widthrawal , been
                  earning since i use this app. I highly Recommend this app for
                  those who wants to trade Stocks , Cryptos, and Forex. I would
                  give it Five Star if only I can deposit via external Crypto
                  wallet. Cause i have some Cryptos in different platfrom and i
                  want to change to use this App . Cause i have some Cryptos in
                  different platfrom and i want to change to use this App . 😊😊
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
