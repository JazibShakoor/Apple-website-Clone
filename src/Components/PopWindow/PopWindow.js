import React from "react";
import { AiFillStar } from "react-icons/ai";

import "./PopWindow.css";

export default function PopWindow() {
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
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
                <h5>ThlleDiomas D, 28/12/2022</h5>
                <span>You are missing a lot if you're not using this app</span>
                <p>
                  I really like how the app is easy to use, fast, and
                  user-friendly. Amana made trading easier and less challenging
                  for me, thank you for the pleasurable experience!
                </p>
                <div className="developerBlock">
                  <span>Developer Response,</span>
                  <p>
                    Thank you for sharing your feedback, ThlleDiomas D! We’re
                    glad to hear you’re enjoying your experience with amana.
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
