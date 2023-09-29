import React from "react";
import { AiFillStar } from "react-icons/ai";

import "./RatingAndReview.css";
import CommentsWapper from "./CommentsWapper/CommentsWapper";

const RatingAndReview = () => {
  return (
    <div className="ratingAndReview">
      <div className="row">
        <div className="col-12">
          <div className="mainHeading">
            <h2>Ratings and Reviews</h2>
            <a href="https://apps.apple.com/ae/app/amana-investing-trading-app/id1640057642?see-all=reviews">
              See All
            </a>
          </div>
        </div>
        <div className="col-4">
          <div className="flexContainer">
            <span>4.6</span>
            <p>out of 5</p>
            <small>641 Ratings</small>
          </div>
        </div>
        <div className="col-4">
          <div className="ratingBlock">
            <div className="starWapper">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="starWapper">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="starWapper">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="starWapper">
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="starWapper">
              <AiFillStar />
            </div>
          </div>
        </div>
        <div className="col-12">
          <CommentsWapper />
        </div>
      </div>
    </div>
  );
};

export default RatingAndReview;
