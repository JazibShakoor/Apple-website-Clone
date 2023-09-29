import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

import ScreenShots from "../ScreenShots/ScreenShots";
import "./Home.css";
import Description from "../Description/Description";
import AppFeatures from "../AppFeatures/AppFeatures";
import RatingAndReview from "../RatingAndReview/RatingAndReview";
import AppPrivacy from "../AppPrivacy/AppPrivacy";
import Information from "../Information/Information";
import MoreApps from "../MoreApps/MoreApps";
import AppList from "../AppLists/AppList";

const Home = () => {
  const scrollDown = () => {
    if (document.documentElement.scrollTop > 50) {
      document.getElementsByClassName("underline").className = "move";
    } else {
      document.getElementsByClassName("underline").className = "";
    }
  };

  scrollDown();
  return (
    <div className="homeWapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="underline" onScroll={scrollDown}>
              <h2>
                <span>App Store</span> Preview
              </h2>
            </div>
          </div>
          <div className="col-12">
            <div className="keyPoint">
              <p>This app is available only on the App Store for iPhone.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-5">
            <div className="imageWapper">
              <img src="/ImagesFolder/230x0w.webp" alt="" />
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-6">
            <div className="heading">
              <h1>amana: Investing & Trading App</h1>
              <h3>Invest: Stocks Forex Gold ETFs</h3>
              <a href="https://apps.apple.com/ae/developer/amanacapital/id1580905928">
                AmanaCapital
              </a>
              <div className="rating">
                <a href="https://apps.apple.com/ae/charts/iphone/finance-apps/6015">
                  #16 in Finance
                </a>
                <div className="starWappers">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <BsStarHalf />
                  <span>4.6 • 634 Ratings</span>
                </div>
                <div className="paraWapper">
                  <p>Free</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="underline-1"></div>
          </div>
          <ScreenShots />
          <Description />
          <AppFeatures />
          <RatingAndReview />
          <AppPrivacy />
          <Information />
          <MoreApps />
          <AppList />
        </div>
      </div>
    </div>
  );
};

export default Home;
