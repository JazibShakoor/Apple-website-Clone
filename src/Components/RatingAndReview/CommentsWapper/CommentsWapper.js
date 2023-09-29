import React from "react";
import { AiFillStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";

import "./CommentsWapper.css";

export default function CommentsWapper() {
  return (
    <div className="commentsWapper">
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        scrollbar={{
          hide: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
        modules={[Scrollbar]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <div className="card">
            <div className="starBlock">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h5>ThlleDiomas D, 28/12/2022</h5>
            <span>You are missing a lot if you're not using thi...</span>
            <p>
              I really like how the app is easy to use,
              <span className="fa">fa</span>
              <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                more
              </button>
            </p>
            <div className="developerBlock">
              <span>Developer Response,</span>
              <p>Thank you for sharing your feedback,</p>
              <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
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
              This app is Easy to use .. Hassle-Free Widthrawal , been earning
              since i use this app. I highly Recommend this app for those who
              wants to trade Stocks , Cryptos, and
              <span className="fa">For</span>
              <button
                className="btn2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop1"
              >
                more
              </button>
            </p>
            <div className="developerBlock">
              <span>Developer Response,</span>
              <p>Thank you for sharing your feedback,</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
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
              I find this app very helpful regarding
              <span className="fa">trad</span>
              <button data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                more
              </button>
            </p>
            <div className="developerBlock">
              <span>Developer Response,</span>
              <p>Hi Amaver'Weie, thank you for your</p>
              <span className="grea">grea</span>
              <button data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                more
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
