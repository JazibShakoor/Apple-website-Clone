import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";

import "./AppList.css";
import appData from "./AppData";

const AppList = () => {
  return (
    <div className="appListWapper">
      <div className="col-12">
        <div className="mainHeading">
          <h2>You Might Also Like</h2>
          <a href="https://apps.apple.com/ae/app/amana-investing-trading-app/id1640057642?see-all=customers-also-bought-apps">
            See All
          </a>
        </div>
      </div>
      <div className="appList">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {appData.map(({ image, title, subtitle, link, id }) => (
            <SwiperSlide>
              <div className="moreApps" key={id}>
                <div className="appsWappers">
                  <div className="appImage">
                    <a href={link}>
                      <img src={image} alt="" />
                    </a>
                  </div>
                  <div className="textWapper">
                    <a href={link}>{title}</a>
                    <span>{subtitle}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AppList;
