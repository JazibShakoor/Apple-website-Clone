import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";

import "./Header.css";
import NavbarHoverList from "./NavbarHoverList/NavbarHoverList";
import Mac from "./HoverBlock/Mac";
import IPod from "./IPod/IPod";
import IPhone from "./IPhone/IPhone";
import Watch from "./Watch/Watch";
import AirPod from "./AirPod/AirPod";
import TVHomes from "./TVHomes/TVHomes";
import Entirement from "./Entirement/Entirement";
import Accessories from "./Accessories/Accessories";
import Support from "./Support/Support";
import SearchBard from "./SearchBar/SearchBard";

const Header = () => {
  const [box, setBox] = useState(false);
  const [show, setShow] = useState(true);

  const onClick = () => {
    setBox(true);
  };

  const onMouseEnters = () => {
    setShow(false);
    setBox(false);
    console.log("bluroff");
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
    console.log("show:" + show);
  }, [show]);

  return (
    <header className="headerWapper">
      <div className="container">
        <div className="headerContentWapper">
          <div className="logoBlock">
            <div className="logo">
              <img src="/ImagesFolder/Apple_logo_black.svg" alt="logo" />
            </div>
          </div>
          <div className="innerWapper">
            <div className="react-icons">
              <button onClick={onClick}>
                <GoSearch />
              </button>
              {box && show && (
                <div>
                  <div className="blurs" onMouseEnter={onMouseEnters}></div>
                  s <SearchBard />
                </div>
              )}
              <a href="https://www.apple.com/ae/shop/go/ae/shop/goto/bag">
                <AiOutlineShopping />
              </a>
            </div>
            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link drop-toggle"
                      href="https://www.apple.com/ae-edu/store"
                    >
                      Store
                    </a>
                    {show && (
                      <div className="drop">
                        <div
                          className="blur0"
                          onMouseEnter={onMouseEnters}
                        ></div>
                        <NavbarHoverList />
                      </div>
                    )}
                  </li>
                  <li className="nav-item dropdown1">
                    <a
                      className="nav-link drop-toggle"
                      href="https://www.apple.com/ae/mac/"
                    >
                      Mac
                    </a>
                    {show && (
                      <div className="drop1">
                        <div
                          className="blur"
                          onMouseEnter={onMouseEnters}
                        ></div>
                        <Mac />
                      </div>
                    )}
                  </li>
                  <li className="nav-item dropdown2">
                    <a
                      className="nav-link"
                      href="https://www.apple.com/ae/ipad/"
                    >
                      IPod
                    </a>
                    {show && (
                      <div className="drop2">
                        <div
                          className="blur"
                          onMouseEnter={onMouseEnters}
                        ></div>
                        <IPod />
                      </div>
                    )}
                  </li>
                  <li className="nav-item dropdown3">
                    <a
                      className="nav-link"
                      href="https://www.apple.com/ae/iphone/"
                    >
                      IPhone
                    </a>
                    {show && (
                      <div className="drop3">
                        <div
                          className="blur"
                          onMouseEnter={onMouseEnters}
                        ></div>
                        <IPhone />
                      </div>
                    )}
                  </li>
                  <li className="nav-item dropdown4">
                    <a
                      className="nav-link"
                      href="https://www.apple.com/ae/watch/"
                    >
                      Watch
                    </a>
                    {show && (
                      <div className="drop4">
                        <div
                          className="blur"
                          onMouseEnter={onMouseEnters}
                        ></div>
                        <Watch />
                      </div>
                    )}
                  </li>
                  <li className="nav-item dropdown5">
                    <a
                      className="nav-link"
                      href="https://www.apple.com/ae/airpods/"
                    >
                      AirPod
                    </a>
                    {show && (
                      <div className="drop5">
                        <div
                          className="blur"
                          onMouseEnter={onMouseEnters}
                        ></div>
                        <AirPod />
                      </div>
                    )}
                  </li>
                  <li className="nav-item dropdown6">
                    <a
                      className="nav-link"
                      href="https://www.apple.com/ae/tv-home/"
                    >
                      TV & Home
                    </a>
                    {show && (
                      <div className="drop6">
                        <div
                          className="blur"
                          onMouseEnter={onMouseEnters}
                        ></div>
                        <TVHomes />
                      </div>
                    )}
                  </li>
                  <li className="nav-item dropdown7">
                    <a
                      className="nav-link"
                      href="https://www.apple.com/ae/services/"
                    >
                      Entertaiment
                    </a>
                    {show && (
                      <div className="drop7">
                        <div
                          className="blur"
                          onMouseEnter={onMouseEnters}
                        ></div>
                        <Entirement />
                      </div>
                    )}
                  </li>
                  <li className="nav-item dropdown8">
                    <a
                      className="nav-link"
                      href="https://www.apple.com/ae/shop/goto/buy_accessories"
                    >
                      Accessories
                    </a>
                    {show && (
                      <div className="drop8">
                        <div
                          className="blur"
                          onMouseEnter={onMouseEnters}
                        ></div>
                        <Accessories />
                      </div>
                    )}
                  </li>
                  <li className="nav-item dropdown9">
                    <a
                      className="nav-link"
                      href="https://support.apple.com/en-ae"
                    >
                      Support
                    </a>
                    {show && (
                      <div className="drop9">
                        <div
                          className="blur"
                          onMouseEnter={onMouseEnters}
                        ></div>
                        <Support />
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
