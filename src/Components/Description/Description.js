import React, { useState } from "react";

import data from "./demoData";
import "./Description.css";
import { list, list_1 } from "./demoData";

const Description = () => {
  const [show, setShow] = useState(false);

  const onShowContent = () => {
    setShow(true);
  };
  return (
    <div className="descriptionWrapper">
      <p>
        amana Trading & Investment app provides its users access to 1000+
        financial instruments on its platform. With this online trading app, you
        will be able to trade easily in many different assets with ZERO
        commission. Use your smartphone to trade, train, and analyze the
        markets. You can buy and sell everything from:
      </p>
      {!show && <button onClick={onShowContent}>more</button>}
      {show && (
        <div className="hideContent">
          <ul>
            {data.map(({ text }, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
          <p>
            amana is an All-in-one trading platform, complete with fractional
            trading.
          </p>
          <div className="headingWapper">
            <h5>FEATURES YOU’LL LOVE:</h5>
            <p>
              Enjoy exceptional design and a user-friendly experience with
              personalized watchlists, news, notifications, and more.
            </p>
          </div>
          <div className="headingListWapper">
            <h5>WHAT MAKES US DIFFERENT:</h5>
            <ul>
              {list.map(({ heading, paragraph }, index) => (
                <div className="blocks" key={index}>
                  <li>
                    <h6>{heading}</h6>
                  </li>
                  <li>{paragraph}</li>
                </div>
              ))}
            </ul>
            <p>
              And when it comes to regional products, what you pay is what we
              pay. That means that we don’t make any profit on spreads or
              commissions. And as our community grows, so does our ability to
              lower prices for everyone
            </p>
            <p>
              Download the app now and unlock the power to invest in your future
            </p>
          </div>
          <div className="headingListWapper">
            <h5>TRADE THE WORLD:</h5>
            <ul>
              {list_1.map(({ heading, paragraph, extra }, index) => (
                <div className="blocks" key={index}>
                  <li>
                    <h6>{heading}</h6>
                  </li>
                  <li>{paragraph}</li>
                  <li>{extra}</li>
                </div>
              ))}
            </ul>
          </div>
          <div className="disclosure">
            <h5>DISCLOSURE</h5>
            <p>
              By default, all new accounts created on the amana app are opened
              with AFS Global Ltd and licensed and regulated by the Labuan
              Financial Services Authority, Labuan Malaysia
            </p>
            <p>
              Trading might not be suitable for all investors. Before trading,
              investors should ensure they fully understand the risks involved
              in the financial products amana offers
            </p>
            <p>
              To read our full Risk Disclosure, go to
              https://amana.app/risk-disclosure.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
