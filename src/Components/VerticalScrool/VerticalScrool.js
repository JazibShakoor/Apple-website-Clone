import React from "react";

import "./VerticalScrool.css";

export default function VerticalScrool() {
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop3"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
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
              <div className="block">
                <h1>Version History</h1>
              </div>
              <div className="block">
                <div className="lable">
                  <span>2.8.8</span>
                  <span>26 May 2023</span>
                </div>
                <p>
                  Version 2.8.8 introduces upgraded asset information– providing
                  you with even more detailed insights, analytics, and charting
                  enhancements. Additionally, we've expanded our Plus section –
                  offering a wider range of educational resources to enhance
                  your learning experience. And we've diligently worked on
                  resolving general bugs and improving overall stability to
                  ensure a smoother user experience.
                </p>
              </div>
              <div className="block">
                <div className="lable">
                  <span>2.8.7</span>
                  <span>12 Apr 2023</span>
                </div>
                <p>- Bug Fixes and Improvements</p>
              </div>
              <div className="block">
                <div className="lable">
                  <span>2.8.6</span>
                  <span>28 Mar 2023</span>
                </div>
                <p>- added more educational resources</p>
                <p>- new payment method (instant bank transfer)</p>
              </div>
              <div className="block">
                <div className="lable">
                  <span>2.8.5</span>
                  <span>13 Feb 2023</span>
                </div>
                <p>- Crypto news section</p>
                <p>- New watchlist chart</p>
                <p>- Statements re-work</p>
                <p>- Bug fixes</p>
              </div>
              <div className="block">
                <div className="lable">
                  <span>2.8.1</span>
                  <span>29 Nov 2022</span>
                </div>
                <p>- improved search</p>
                <p>- added more features for advanced charts</p>
                <p>- increase performance</p>
              </div>
              <div className="block">
                <div className="lable">
                  <span>2.8</span>
                  <span>26 Nov 2022</span>
                </div>
                <p>- Protect your login with Face ID, Finger Print</p>
                <p>- New Payment Options, Faster Withdrawal process</p>
                <p>- New Live support channel</p>
                <p>- Faster, better than ever</p>
              </div>
              <div className="block">
                <div className="lable">
                  <span>2.7.9</span>
                  <span>1 Nov 2022</span>
                </div>
                <p>- performance optimizations</p>
                <p>- support for more countries</p>
              </div>
              <div className="block">
                <div className="lable">
                  <span>2.7.2</span>
                  <span>4 Oct 2022</span>
                </div>
                <p>- activity section redesigned</p>
                <p>- MENA, and Europe</p>
              </div>
              <div className="block">
                <div className="lable">
                  <span>2.6</span>
                  <span>21 Sept 2022</span>
                </div>
                <p>Fix critical bug with signup, add another method for OTP</p>
              </div>
              <div className="block">
                <div className="lable">
                  <span>2.5</span>
                  <span>20 Sept 2022</span>
                </div>
                <p>Faster Trade Execution, Bug fixes</p>
              </div>
              <div className="block">
                <div className="lable">
                  <span>2.4</span>
                  <span>17 Sept 2022</span>
                </div>
                <p>- Bug fixes</p>
                <p>- Performance enhancements</p>
                <p>- New trading features</p>
              </div>
              <div className="block">
                <div className="lable">
                  <span>1.0</span>
                  <span>30 Aug 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
