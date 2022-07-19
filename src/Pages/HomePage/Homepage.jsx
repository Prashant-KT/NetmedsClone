import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import style from "./Homepage.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { BigCommonSlider } from "./BigCommonSlider/BigCommonSlider";

import { trandingImages } from "./trending";
import { RunningSlider } from "./RunningSlider/RunningSlider";



export const Homepage = () => {
 

  const [show, setShow] = useState(true);
  const [position, setPosition] = useState("static");
  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setShow(false);
      setPosition("fixed");
    } else {
      setShow(true);
      setPosition("static");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div>
      <div>
        <Navbar position={position} />
        {show ? (
          <div className={style.withAttachedNavbar}>
            <div>
              <div>
                <Link to="/products">
                  <img
                    src="https://www.netmeds.com/assets/version1657888943/gloryweb/images/icons/medicine.svg"
                    alt=""
                  />
                </Link>
                <Link
                  to="/products"
                  className={`${style.Linktag + " " + style.Linktag2}`}
                >
                  <p>Medicine</p>
                </Link>
                <IoMdArrowDropdown />
              </div>

              <div>
                <Link to="/products">
                  <img
                    src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"
                    alt=""
                  />
                </Link>
                <Link to="/products" className={style.Linktag}>
                  <p>Wellness</p>
                </Link>
              </div>
              <div>
                <Link to="/products">
                  <img
                    src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg"
                    alt=""
                  />
                </Link>
                <Link to="/products" className={style.Linktag}>
                  <p>Lab Test</p>
                </Link>
              </div>
              <div>
                <Link to="/products">
                  <img
                    src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg"
                    alt=""
                  />
                </Link>
                <Link to="/products" className={style.Linktag}>
                  <p>Beauty</p>
                </Link>
                <IoMdArrowDropdown />
              </div>
              <div>
                <Link to="/products">
                  <img
                    src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg"
                    alt=""
                  />
                </Link>
                <Link to="/products" className={style.Linktag}>
                  <p>Health Corner</p>
                </Link>
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <br></br>
      {/*  slider part starts here*/}
      <div className={style.sliderContainerBox}>
        <BigCommonSlider height={"350px"} />
      </div>

      <br></br>
      <br></br>
      <div className={style.threeCardProduct}>
        <div>
          <img
            src="https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg"
            alt=""
          />
          <span className={style.contenttxt}>
            <span className={style.threeheading}>Order Medicine</span>
            <span className={style.savetext}> Save Upto 25% off</span>
          </span>
        </div>
        <div>
          <img
            src="https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg"
            alt=""
          />
          <span className={style.contenttxt}>
            <span className={style.threeheading}>Beauty</span>
            <span className={style.savetext}> Save Upto 40% off</span>
          </span>
        </div>
        <div>
          <img
            src="https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg"
            alt=""
          />
          <span className={style.contenttxt}>
            <span className={style.threeheading}>Wellness</span>
            <span className={style.savetext}> Flat 15% off</span>
          </span>
        </div>
      </div>
      <div className={style.endHeadingGap}>
        <h2> Payment Partner Offers </h2>
        <p> View All </p>
      </div>
      <div className={style.paymentPartners}>
        <div>
          <img
            src="https://www.netmeds.com/images/cms/offers/1656602758_Simpl_Icon.png"
            alt=""
          />
          <div>
            <p>Get up to Rs. 1000 Simpl Cashback* (5%)!..</p>
            <p style={{ color: "gray" }}>
              Get up to Rs. 1000 Simpl Cashback (5%) on your FIRST-EVER payment
              via Simpl for ANY purchases* of AN..
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://www.netmeds.com/images/cms/offers/1616682689_paytm.png"
            alt=""
          />
          <div>
            <p>Get up to Rs. 300 Paytm Cashback!..</p>
            <p style={{ color: "gray" }}>
              Get Paytm Cashback between max. Rs. 300 and min. Rs. 30 on a
              minimum purchase of ANY products* worth..
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://www.netmeds.com/images/cms/offers/1654235738_Icon_256x256.png"
            alt=""
          />
          <div>
            <p>Use Pay with Rewards, Get up to Rs. 800 Cashback!..</p>
            <p style={{ color: "gray" }}>
              Get assured cashback between Rs. 30 and Rs. 800, when you pay
              using the “Pay with Rewards” payme..
            </p>
          </div>
        </div>
      </div>

      <div className={style.previouseDivider}>
        <div>
          <div className={style.preOrderDiv}>
            <div>
              <h2> Payment Partner Offers </h2>
              <p>Your previously ordered products</p>
            </div>
            <div className={style.view_btn}>View Order</div>
          </div>
          <div className={style.preOrderDivImg}>
            <img
              src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/previous_orders.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className={style.preOrderDiv}>
            <h2 style={{ marginTop: "20px", marginBottom: "10px" }}>
              Beauty Products
            </h2>
            <p style={{ color: "green", fontSize: "20px" }}>
              Save Upto 40% off
            </p>
            <span
              style={{
                height: "20px",
                padding: "10px",
                paddingLeft: "15px",
                paddingRight: "15px",
                borderRadius: "5px",
                color: "white",
                background: " #32aeb1",
              }}
            >
              Explore Beauty
            </span>
          </div>
          <div className={style.preOrderDivImg}>
            <img
              src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/beauty_products.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={style.endHeadingGap}>
        <h2> Trending Today </h2>
      </div>

      <RunningSlider images = {trandingImages} />
      <div style={{ height: "14000px", border: "1px solid orange" }}></div>
    </div>
  );
};
