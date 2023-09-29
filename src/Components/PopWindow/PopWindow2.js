import React from "react";
import { AiFillStar } from "react-icons/ai";

import "./PopWindow.css";

export default function PopWindow2() {
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop2"
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
                  <AiFillStar />
                </div>
                <h5>Amaver`Weie , 27/12/2022</h5>
                <span>The msot helpful trading app</span>
                <p>
                  I find this app very helpful regarding trading! It allows you
                  to trade many products in a safe way. I highly recommend
                  trying it out
                </p>
                <div className="developerBlock">
                  <span>Developer Response,</span>
                  <p>
                    Hi Amaver'Weie, thank you for your great feedback. Happy
                    trading!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
