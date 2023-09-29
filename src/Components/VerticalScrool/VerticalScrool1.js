import React from "react";
import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";
import { FaPhotoVideo } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsFillCreditCardFill } from "react-icons/bs";

import "./VerticalScrool1.css";

export default function VerticalScrool() {
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop4"
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
                <h1>App Privacy</h1>
              </div>
              <div className="block">
                <p>
                  The developer, AmanaCapital, indicated that the app’s privacy
                  practices may include handling of data as described below.
                  This information has not been verified by Apple. For more
                  information, see the{" "}
                  <a href="/">developer’s privacy policy.</a>
                </p>
              </div>
              <div className="block">
                <p className="space">
                  To help you better understand the developer’s responses, see
                  <a href="/">Privacy Definitions and Examples.</a>
                </p>
                <p className="space">
                  Privacy practices may vary based on, for example, the features
                  you use or your age. <a href="/">Learn More</a>
                </p>
              </div>
              <div className="block">
                <div className="imageBlock">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                  >
                    <path d="M58.595 42c1.544 0 2.405.866 2.405 2.45v7.29c0 6.153-3.087 9.26-9.322 9.26h-7.244C42.861 61 42 60.134 42 58.61c0-1.554.86-2.42 2.434-2.42h7.185c2.91 0 4.6-1.582 4.6-4.69v-7.05c0-1.584.833-2.45 2.376-2.45zm-53.22 0c1.543 0 2.404.866 2.404 2.45v7.05c0 3.108 1.633 4.69 4.601 4.69h7.186c1.573 0 2.434.866 2.434 2.42 0 1.524-.86 2.39-2.434 2.39h-7.244C6.117 61 3 57.922 3 51.74v-7.29C3 42.866 3.83 42 5.375 42zM32 34C42.897 34 48 42.988 48 46.399c0 .949-.48 1.601-1.501 1.601H17.501C16.481 48 16 47.348 16 46.399 16 42.988 21.103 34 32 34zM32 14c4.438 0 8 3.82 8 8.412 0 4.916-3.562 8.618-8 8.588-4.437-.029-8-3.672-8-8.588C24 17.82 27.563 14 32 14zM51.678 3C57.913 3 61 6.076 61 12.231v7.32C61 21.103 60.168 22 58.595 22c-1.514 0-2.375-.896-2.375-2.45V12.5c0-3.108-1.692-4.691-4.601-4.691h-7.185c-1.573 0-2.434-.866-2.434-2.42C42 3.837 42.86 3 44.434 3h7.244zM19.566 3C21.139 3 22 3.836 22 5.39c0 1.553-.86 2.419-2.434 2.419H12.38c-2.968 0-4.601 1.583-4.601 4.69v7.051c0 1.554-.83 2.45-2.404 2.45C3.86 22 3 21.104 3 19.55v-7.319C3 6.076 6.117 3 12.322 3h7.244z"></path>
                  </svg>
                </div>
                <h1>Data Used to Track You</h1>
                <p>
                  The following data may be used to track you across apps and
                  websites owned by other companies:
                </p>
                <div className="contantBlock">
                  <IoEllipsisHorizontalCircleSharp />
                  <div className="textWapper">
                    <p>Other Data</p>
                    <span>Other Data Types</span>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="imageBlock">
                  <IoMdContact />
                </div>
                <h1>Data Linked to You</h1>
                <p>
                  The following data, which may be collected and linked to your
                  identity, may be used for the following purposes:
                </p>
              </div>
              <div className="block">
                <h4>Analytics</h4>
                <div className="contantBlock">
                  <MdInfo />
                  <div className="textWapper">
                    <p>Contact Info</p>
                    <span>Physical Address</span>
                  </div>
                </div>
                <div className="contantBlock">
                  <IoEllipsisHorizontalCircleSharp />
                  <div className="textWapper">
                    <p>Other Data</p>
                    <span>Other Data Types</span>
                  </div>
                </div>
              </div>
              <div className="block">
                <h4>Product Personalisation</h4>
                <div className="contantBlock">
                  <HiIdentification />
                  <div className="textWapper">
                    <p>Identifiers</p>
                    <span>User ID</span>
                  </div>
                </div>
                <div className="contantBlock">
                  <IoEllipsisHorizontalCircleSharp />
                  <div className="textWapper">
                    <p>Other Data</p>
                    <span>Other Data Types</span>
                  </div>
                </div>
              </div>
              <div className="block">
                <h4>App Functionality</h4>
                <div className="contantBlock">
                  <IoEllipsisHorizontalCircleSharp />
                  <div className="textWapper">
                    <p>Other Data</p>
                    <span>Physical Address</span>
                    <span>Email Address</span>
                    <span>Name</span>
                    <span>Phone Number</span>
                  </div>
                </div>
                <div className="contantBlock">
                  <FaPhotoVideo />
                  <div className="textWapper">
                    <p>User Content</p>
                    <span>Photos or Videos</span>
                  </div>
                </div>
                <div className="contantBlock">
                  <HiIdentification />
                  <div className="textWapper">
                    <p>Identifiers</p>
                    <span>User ID</span>
                  </div>
                </div>
                <div className="contantBlock">
                  <IoMdSettings />
                  <div className="textWapper">
                    <p>Diagnostics</p>
                    <span>Performance Data</span>
                  </div>
                </div>
                <div className="contantBlock">
                  <IoEllipsisHorizontalCircleSharp />
                  <div className="textWapper">
                    <p>Other Data</p>
                    <span>Other Data Types</span>
                  </div>
                </div>
              </div>
              <div className="block">
                <h4>Other Purposes</h4>
                <div className="contantBlock">
                  <IoMdSettings />
                  <div className="textWapper">
                    <p>Diagnostics</p>
                    <span>Crash Data</span>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="imageBlock">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                  >
                    <path d="M7.36 17l3.208 3.208A24.23 24.23 0 007.39 32.235c0 13.44 10.93 24.374 24.366 24.374 4.374 0 8.483-1.159 12.035-3.186L47 56.631A28.616 28.616 0 0131.756 61C15.874 61 3 48.122 3 32.235A28.637 28.637 0 017.36 17zM9.77 6.642l47.588 47.606a2.204 2.204 0 010 3.11 2.206 2.206 0 01-3.111 0L6.632 9.753c-.829-.8-.856-2.283 0-3.11.826-.828 2.253-.886 3.138 0zM32.238 3C48.123 3 61 15.878 61 31.761c0 5.597-1.599 10.82-4.364 15.239l-3.208-3.209a24.221 24.221 0 003.182-12.03c0-13.437-10.934-24.37-24.372-24.37a24.223 24.223 0 00-12.03 3.18L17 7.363A28.628 28.628 0 0132.238 3zm-7.492 31L36 45H18.373C17.44 45 17 44.418 17 43.572c0-2.224 2.5-7.11 7.746-9.572zm6.915-20C35.733 14 39 17.634 39 22.002c0 2.419-.874 4.529-2.281 5.998L26 16.923C27.343 15.145 29.376 14 31.661 14z"></path>
                  </svg>
                </div>
                <h1>Data Not Linked to You</h1>
                <p>
                  The following data, which may be collected but is not linked
                  to your identity, may be used for the following purposes:
                </p>
              </div>
              <div className="block">
                <h4>Analytics</h4>
                <div className="contantBlock">
                  <MdInfo />
                  <div className="textWapper">
                    <p>Contact Info</p>
                    <span>Other User Contact Info</span>
                  </div>
                </div>
              </div>
              <div className="block">
                <h4>Product Personalisation</h4>
                <div className="contantBlock">
                  <BsFillCreditCardFill />
                  <div className="textWapper">
                    <p>Financial Info</p>
                    <span>Payment Info</span>
                  </div>
                </div>
                <div className="contantBlock">
                  <MdInfo />
                  <div className="textWapper">
                    <p>Contact Info</p>
                    <span>Other User Contact Info</span>
                  </div>
                </div>
                <div className="contantBlock">
                  <HiIdentification />
                  <div className="textWapper">
                    <p>Identifiers</p>
                    <span>User ID</span>
                  </div>
                </div>
              </div>
              <div className="block">
                <h4>App Functionality</h4>
                <div className="contantBlock">
                  <BsFillCreditCardFill />
                  <div className="textWapper">
                    <p>Financial Info</p>
                    <span>Payment Info</span>
                  </div>
                </div>
                <div className="contantBlock">
                  <MdInfo />
                  <div className="textWapper">
                    <p>Contact Info</p>
                    <span>Other User Contact Info</span>
                  </div>
                </div>
                <div className="contantBlock">
                  <HiIdentification />
                  <div className="textWapper">
                    <p>Identifiers</p>
                    <span>User ID</span>
                  </div>
                </div>
              </div>
              <div className="block">
                <h4>Other Purposes</h4>
                <div className="contantBlock">
                  <IoMdSettings />
                  <div className="textWapper">
                    <p>Diagnostics</p>
                    <span>Crash Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
